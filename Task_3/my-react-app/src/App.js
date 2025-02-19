import React, { useState } from 'react';
import './App.css';
import palettes from './pallete.json';

function Header() {
  return (
    <header className="header">
      Color Palettes MVP
    </header>
  );
}

function PaletteCard({ palette, onClick }) {
  return (
    <div className="palette-card" onClick={onClick}>
      <div className="palette-name">
        {palette.emoji} {palette.paletteName}
      </div>
      <div className="palette-preview">
        {palette.colors.slice(0, 5).map((colorObj, idx) => (
          <div key={idx} className="palette-color" style={{ backgroundColor: colorObj.color }}></div>
        ))}
      </div>
    </div>
  );
}

function PaletteGrid({ palettes, onSelectPalette }) {
  return (
    <div className="palette-grid">
      {palettes.map((palette, index) => (
        <PaletteCard key={index} palette={palette} onClick={() => onSelectPalette(palette)} />
      ))}
    </div>
  );
}

function ColorPicker({ palette, onBack, onSelectColor }) {
  return (
    <div className="color-picker">
      <h2>{palette.emoji} {palette.paletteName}</h2>
      <div className="color-grid">
        {palette.colors.map((colorObj, idx) => (
          <div
            key={idx}
            className="color-box"
            style={{ backgroundColor: colorObj.color }}
            onClick={() => onSelectColor(colorObj.color)}
          >
            <div className="color-code">{colorObj.color}</div>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={onBack}>Назад</button>
    </div>
  );
}

function ColorOverlay({ color, show }) {
  return (
    show ? (
      <div className="color-overlay" style={{ backgroundColor: color }}>
        <span className="overlay-text">{color}</span>
      </div>
    ) : null
  );
}

function App() {
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [overlayColor, setOverlayColor] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const copySound = new Audio(process.env.PUBLIC_URL + '/src_notify.mp3');

  const handleSelectPalette = (palette) => {
    setSelectedPalette(palette);
  };

  const handleBack = () => {
    setSelectedPalette(null);
  };

  const handleSelectColor = (color) => {
    copySound.currentTime = 0;
    copySound.play();

    if (navigator.clipboard) {
      navigator.clipboard.writeText(color)
        .then(() => console.log('Колір скопійовано:', color))
        .catch(err => console.error('Помилка копіювання:', err));
    }

    setOverlayColor(color);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 1500);
  };

  return (
    <div className="App">
      <Header />
      {selectedPalette ? (
        <ColorPicker
          palette={selectedPalette}
          onBack={handleBack}
          onSelectColor={handleSelectColor}
        />
      ) : (
        <PaletteGrid
          palettes={palettes}
          onSelectPalette={handleSelectPalette}
        />
      )}
      <ColorOverlay color={overlayColor} show={showOverlay} />
    </div>
  );
}

export default App;
