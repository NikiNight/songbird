import React from 'react';
import Bird from './Bird';
import Answers from './Answers';
import Button from '../common/Button';
import AudioTrue from '../../audio/true.mp3';
import AudioFalse from '../../audio/false.mp3';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick = () => {
    console.log('Button Click');
  }

  stopAudio = (audio) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0.0;
    }
  }

  handleAnswerClick = (isQuestionGuessed) => {
    this.stopAudio(this.audioTrue);
    this.stopAudio(this.audioFalse);
    if(isQuestionGuessed) {
      this.audioTrue.play();
    } else {
      this.audioFalse.play();
    }
  }

  componentDidMount() {
    this.audioTrue = new Audio(AudioTrue);
    this.audioFalse = new Audio(AudioFalse);
  }

  render() {
    const { appliedVariant, isQuestionGuessed, data } = this.props;
    return (  
    <>
      <div className="question">
        
        <Bird />
      </div>
      <div className="container-2-column">
        <Answers data={data} appliedVariant={appliedVariant} handleAnswerClick={this.handleAnswerClick} />
        <Bird />
      </div>
      <div className="controls">
        <Button buttonclass="controls__next" value="Next Level" disabled={isQuestionGuessed ? false : true} handleClick={this.handleButtonClick} />
      </div>
    </>
    )
  }
}
