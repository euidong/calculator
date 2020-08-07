import React, { useState } from 'react';
import './calculate.scss';

function App() {
  const [score, setScore] = useState(0);

  const onClick = (value) => {
    setScore(score => { if (score) { return score + value } return value; });
  }

  return (
    <div className="App">
      <div className="calc">
        <div className="calc__title">
          Calculator
        </div>
        <div className="calc__score">
          {score}
        </div>
        <div className="calc__keyboard">
          <div className="calc__keyboard__main">
            <div className="button calc__keyboard__ac">AC</div>
            <div classsName="calc__keyboard__number">
              <div className="calc__keyboard__number__line">
                <div className="button button--blue" onClick={() => onClick('1')}>1</div>
                <div className="button button--blue" onClick={() => onClick('2')}>2</div>
                <div className="button button--blue" onClick={() => onClick('3')}>3</div>
              </div>
              <div className="calc__keyboard__number__line">
                <div className="button button--blue">4</div>
                <div className="button button--blue">5</div>
                <div className="button button--blue">6</div>
              </div>
              <div className="calc__keyboard__number__line">
                <div className="button button--blue">7</div>
                <div className="button button--blue">8</div>
                <div className="button button--blue">9</div>
              </div>
            </div>
            <div className="button button--blue--big">0</div>
          </div>
          <div className="calc__keyboard__operator">
            <div className="button button--deepblue">+</div>
            <div className="button button--deepblue">−</div>
            <div className="button button--deepblue">×</div>
            <div className="button button--deepblue">÷</div>
            <div className="button button--pink">=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
