import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import TemplateBird from '../../img/template-bird.jpg';

const Bird = (props) => {
  const playlist = [
    {
      src: 'https://www.xeno-canto.org/sounds/uploaded/VROUALCTKG/XC520302-Crested%20Serpent%20Eagle%20%28Borneo%2C%20Kinabatangan%2C%20jun%2008%2C%201%29.MP3',
      title: 'Орёл',
      artist: '',
    },
  ];

  return (
    <div className="bird">
      <img src={TemplateBird} alt="" className="bird__image" />
      <div className="bird__body">
        <p className="bird__title">Орёл</p>
        <AudioPlayer
          className="bird__voice"
          audioFiles={playlist}
          hideForward
          hideLoop
          hideRewind
          hideName
        />
      </div>
    </div>
  );
};
export default Bird;
