import React from 'react';
import { random } from 'lodash';
import Header from './header/Header';
import Body from './body/Body';
import Result from './result/Result';
import Footer from './footer/Footer';
import birdsData from '../data/birdsData';
import * as Constants from './helpers/Constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      stage: 0,
      stageScore: Constants.MAX_ATTEMPT_POINT,
      maxScore: birdsData.length * Constants.MAX_ATTEMPT_POINT,
      appliedVariant: '',
      isQuestionGuessed: false,
      isGameFinished: false,
    };
  }

  componentDidMount() {
    this.generateQuestionNumber();
  }

  winStage = () => {
    const { stage } = this.state;
    if (stage < birdsData.length - 1) {
      this.setState((prevState) => ({
        stage: prevState.stage + 1,
        stageScore: Constants.MAX_ATTEMPT_POINT,
        isQuestionGuessed: false,
      }));
      this.generateQuestionNumber();
    } else {
      this.setState({
        isGameFinished: true,
      });
    }
  }

  updateStageScore = (isGuessed) => {
    const { isQuestionGuessed } = this.state;
    if (!isQuestionGuessed) {
      if (isGuessed) {
        this.setState((prevState) => ({
          score: prevState.score + prevState.stageScore,
          isQuestionGuessed: true,
        }));
      } else {
        this.setState((prevState) => ({
          stageScore: prevState.stageScore - 1,
        }));
      }
    }
  }

  generateQuestionNumber = () => {
    const { stage } = this.state;
    const randomVariantNumber = random(1, birdsData[stage].data.length);
    this.setState({ appliedVariant: randomVariantNumber });
  }

  tryAgain = () => {
    this.setState({
      score: 0,
      stage: 0,
      stageScore: Constants.MAX_ATTEMPT_POINT,
      isQuestionGuessed: false,
      isGameFinished: false,

    });
    this.generateQuestionNumber();
  }


  render() {
    const {
      score, maxScore, stage, appliedVariant, isGameFinished,
    } = this.state;
    return (
      <>
        <Header score={score} stage={stage} data={birdsData} />
        {
          (appliedVariant && !isGameFinished)
          && (
          <Body
            key={stage}
            data={birdsData[stage].data}
            appliedVariant={appliedVariant}
            handleButtonClick={this.winStage}
            handleAnswerClick={this.updateStageScore}
          />
          )
        }
        {
          isGameFinished
          && <Result score={score} maxScore={maxScore} handleButtonClick={this.tryAgain} />
        }
        <Footer />
      </>
    );
  }
}
