import React from 'react';
import AudioPlayer from 'react-modular-audio-player';


const Bird = (props) => {
  const {
    image, name, species, description, audio,
  } = props.data;
  const { fullVariant } = props;
  const playlist = [
    {
      src: audio,
      title: name,
      artist: '',
    },
  ];
  return (
    <div className="bird">
      <img src={image} alt={name} className="bird__image" />
      <div className="bird__body">
        <p className="bird__title">{name}</p>
        {
          (species && fullVariant) && <p className="bird__species">{species}</p>
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
        (description && fullVariant) && <p className="bird__description">{description}</p>
      }
    </div>
  );
};
export default Bird;
