import React from 'react';

const HubView = ({ viewport = {}, cursorPosition = {} }) => {
  // Dimensions of the Hub View (scaled down)
  const hubWidth = 200;  // Desired width of Hub View
  const hubHeight = 200; // Desired height of Hub View

  // Set default values for imageWidth and imageHeight to prevent undefined calculations
  const imageWidth = viewport.imageWidth || 1;
  const imageHeight = viewport.imageHeight || 1;

  // Scale factors for fitting the entire image in Hub View
  const scaleX = hubWidth / imageWidth;
  const scaleY = hubHeight / imageHeight;

  // Calculate the scaled position for the cursor marker in the Hub View
  const markerX = cursorPosition.x * scaleX;
  const markerY = cursorPosition.y * scaleY;

  // Style for the marker indicating the cursor position
  const cursorMarkerStyle = {
    position: 'absolute',
    top: `${markerY}px`,
    left: `${markerX}px`,
    width: '10px',
    height: '10px',
    backgroundColor: 'red',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  };

  return (
    <div style={{ width: hubWidth, height: hubHeight, border: '1px solid #ccc', position: 'relative' }}>
      <h3>Hub View</h3>
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'relative', 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/wsi.png'})`, // Use local image path
          backgroundSize: 'cover', // Fit the image within the hub view
          backgroundPosition: 'center',
        }}
      >
        <div style={cursorMarkerStyle} />
      </div>
    </div>
  );
};

export default HubView;