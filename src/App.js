import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import HubView from './components/hubview';
import MainViewer from './components/mainviewer';
import './index.css';

function App() {
  const [viewport, setViewport] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    imageWidth: 0,
    imageHeight: 0,
  });

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-view">
        <MainViewer setViewport={setViewport} setCursorPosition={setCursorPosition} />
      </div>
      <div className="hub-view">
        <HubView viewport={viewport} cursorPosition={cursorPosition} />
      </div>
    </div>
  );
}

export default App;
