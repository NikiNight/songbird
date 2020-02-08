import React from 'react';
import AudioPlayer from 'react-modular-audio-player';


const Bird = (props) => {
  const { image, title, species, description } = props;
  const playlist = [
    {
      src: 'https://www.xeno-canto.org/sounds/uploaded/VROUALCTKG/XC520302-Crested%20Serpent%20Eagle%20%28Borneo%2C%20Kinabatangan%2C%20jun%2008%2C%201%29.MP3',
      title: 'Орёл',
      artist: '',
    },
  ];
  return (
    <div className="bird">
      <img src={image} alt={title} className="bird__image" />
      <div className="bird__body">
        <p className="bird__title">{title}</p>
        {
          species && <p className="bird__species">{species}</p>
        }
        <AudioPlayer
          className="bird__voice"
          audioFiles={playlist}
          hideForward
          hideLoop
          hideRewind
          hideName
        />
      </div>
      {
        description && <p className="bird__description">{description}</p>
      }
    </div>
  );
};
export default Bird;
