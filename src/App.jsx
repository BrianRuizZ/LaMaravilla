import React, { useState, useEffect } from 'react';
import './App.css';

// ... (código anterior)

const App = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [characterImage, setCharacterImage] = useState('rommel.png');
  const imageSize = 150; // Cambia el tamaño según tus necesidades

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
          break;
        case 'ArrowDown':
          setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
          break;
        case 'ArrowLeft':
          setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
          break;
        case 'ArrowRight':
          setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <h1>Ola ste ez el juego de romel la mantequilla</h1>
      <div>
      <img
        src={characterImage}
        alt="Character"
        className='rommel'
        style={{

          position: 'absolute',
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: `${imageSize}px`,
          height: `${imageSize}px`,
        }}
     
      />
      <p>Apreta las flechitas para moverte y click en la foto de rommel para emotiza insana:0</p>
      </div>

    </div>

  );
};

export default App;
