import React, { useEffect } from 'react';
import OpenSeadragon from 'openseadragon';

const MainViewer = ({ setViewport, setCursorPosition }) => {
  useEffect(() => {
    const viewer = OpenSeadragon({
      id: 'openseadragon-viewer',
      prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',  // OpenSeadragon's UI controls
      tileSources: {
        type: 'image',
        url: process.env.PUBLIC_URL + '/wsi.png' // Use local image from public folder
      }
    });

    const updateViewport = () => {
      const bounds = viewer.viewport.getBounds();
      const imageBounds = viewer.world.getItemAt(0).getContentSize();

      setViewport({
        x: bounds.x,
        y: bounds.y,
        width: bounds.width,
        height: bounds.height,
        imageWidth: imageBounds.x,
        imageHeight: imageBounds.y,
      });
    };

    // Capture cursor position on image
    const updateCursorPosition = (event) => {
      const webPoint = viewer.viewport.pointFromPixel(event.position);
      setCursorPosition({
        x: webPoint.x,
        y: webPoint.y,
      });
    };

    // Listen for viewport change and mouse move
    viewer.addHandler("viewport-change", updateViewport);
    viewer.addHandler("canvas-move", updateCursorPosition);

    // Cleanup on unmount
    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, [setViewport, setCursorPosition]);

  return <div id="openseadragon-viewer" style={{ width: '100%', height: '80vh' }}></div>;
};

export default MainViewer;