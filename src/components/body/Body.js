import React from 'react';
import PropTypes from 'prop-types';
import Bird from './Bird';
import Answers from './Answers';
import Button from '../common/Button';
import AudioTrue from '../../audio/true.mp3';
import AudioFalse from '../../audio/false.mp3';
import TextPlaceholder from './TextPlaceholder';
import TemplateBird from '../../img/template-bird.jpg';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVariant: '',
      isQuestionGuessed: false,
    };
  }

  componentDidMount() {
    this.audioTrue = new Audio(AudioTrue);
    this.audioFalse = new Audio(AudioFalse);
  }

  stopAudio = (audio) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0.0;
    }
  }

  runAudioSignal = (isQuestionGuessed) => {
    this.stopAudio(this.audioTrue);
    this.stopAudio(this.audioFalse);
    if (isQuestionGuessed) {
      this.audioTrue.play();
    } else {
      this.audioFalse.play();
    }
  }

  applyQuestionGuess = () => {
    this.setState({
      isQuestionGuessed: true,
    });
  }

  handleAnswerClick = (isQuestionGuessed, selectedVariant) => {
    const { handleAnswerClick } = this.props;
    this.runAudioSignal(isQuestionGuessed);
    this.setState({
      selectedVariant,
    });
    if (isQuestionGuessed) {
      this.applyQuestionGuess();
    }
    handleAnswerClick(isQuestionGuessed);
  }

  handleButtonClick = () => {
    const { isQuestionGuessed } = this.state;
    const { handleButtonClick } = this.props;
    if (isQuestionGuessed) {
      handleButtonClick();
    }
  }


  render() {
    const { appliedVariant, data } = this.props;
    const { selectedVariant, isQuestionGuessed } = this.state;
    const selectedBird = data.find((bird) => bird.id === selectedVariant);
    const appliedBird = data.find((bird) => bird.id === appliedVariant);
    const templateBird = {
      name: '*****',
      image: TemplateBird,
      audio: appliedBird.audio,
    };
    return (
      <>
        <div className="question">
          {
          isQuestionGuessed
            ? <Bird data={appliedBird} />
            : <Bird data={templateBird} />
        }

        </div>
        <div className="container-2-column">
          <Answers
            data={data}
            appliedVariant={appliedVariant}
            handleAnswerClick={this.handleAnswerClick}
          />
          {
          selectedVariant
            ? <Bird data={selectedBird} fullVariant />
            : <TextPlaceholder />
        }
        </div>
        <div className="controls">
          <Button
            buttonclass="controls__next"
            value="Следующий уровень"
            disabled={!isQuestionGuessed}
            handleClick={this.handleButtonClick}
          />
        </div>
      </>
    );
  }
}

Body.propTypes = {
  appliedVariant: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      audio: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      species: PropTypes.string,
    }),
  ),
  handleAnswerClick: PropTypes.func,
  handleButtonClick: PropTypes.func,
};

Body.defaultProps = {
  appliedVariant: '',
  data: PropTypes.arrayOf(
    PropTypes.shape({
      audio: '',
      description: '',
      image: '',
      name: '*****',
      species: '',
    }),
  ),
  handleAnswerClick: PropTypes.func,
  handleButtonClick: PropTypes.func,
};
