import React from 'react';

const Bird = (props) =>
  // const { score } = props;
  (
    <div className="bird">
      <img src="https://www.dw.com/image/40645797_304.jpg" alt="Орёл" className="bird__image" />
      <div className="bird__body">
        <p className="bird__title">Орёл</p>
        <audio controls className="bird__voice">
          <source src="https://www.xeno-canto.org/sounds/uploaded/VROUALCTKG/XC520302-Crested%20Serpent%20Eagle%20%28Borneo%2C%20Kinabatangan%2C%20jun%2008%2C%201%29.MP3" />
        </audio>
      </div>
    </div>
  );
export default Bird;
