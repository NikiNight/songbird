import React from 'react';
import Header from './header/Header';
import Body from './body/Body';
import Result from './result/Result';
import Footer from './footer/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 10,
      maxScore: 20,
    };
  }

  render() {
    const { score, maxScore } = this.state;
    return (
      <>
        <Header score={score} />
        <Body />
        <Result score={score} maxScore={maxScore} />
        <Footer />
      </>
    );
  }
}
