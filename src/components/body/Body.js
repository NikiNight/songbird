import React from 'react';
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
      isQuestionGuessed: false
    }
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

  runAudioSignal = (isQuestionGuessed) => {
    this.stopAudio(this.audioTrue);
    this.stopAudio(this.audioFalse);
    if(isQuestionGuessed) {
      this.audioTrue.play();
    } else {
      this.audioFalse.play();
    }
  }

  applyQuestionGuess = () => {
    this.setState({
      'isQuestionGuessed': true
    })
  }

  handleAnswerClick = (isQuestionGuessed, selectedVariant) => {
    this.runAudioSignal(isQuestionGuessed);
    this.setState({
      'selectedVariant': selectedVariant
    })
    if(isQuestionGuessed) {
      this.applyQuestionGuess();
    }
  }

  componentDidMount() {
    this.audioTrue = new Audio(AudioTrue);
    this.audioFalse = new Audio(AudioFalse);
  }

  render() {
    const { appliedVariant, data } = this.props;
    const { selectedVariant, isQuestionGuessed } = this.state;
    let selectedBird = data.filter(bird => bird.id===selectedVariant);
    let appliedBird = data.filter(bird => bird.id===appliedVariant);
    return (  
    <>
      <div className="question">
        {
          isQuestionGuessed
          ? <Bird title={appliedBird[0].name} image={appliedBird[0].image}/>
          : <Bird title={'*****'} image={TemplateBird}/>
        }
        
      </div>
      <div className="container-2-column">
        <Answers data={data} appliedVariant={appliedVariant} handleAnswerClick={this.handleAnswerClick} />
        {
          !!selectedVariant 
          ? <Bird title={selectedBird[0].name} image={selectedBird[0].image} species={selectedBird[0].species} description={selectedBird[0].description}/>
          : <TextPlaceholder />
        }
      </div>
      <div className="controls">
        <Button buttonclass="controls__next" value="Next Level" disabled={isQuestionGuessed ? false : true} handleClick={this.handleButtonClick} />
      </div>
    </>
    )
  }
}
