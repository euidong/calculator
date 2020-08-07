import React, { useState } from 'react';

function Calc () {
  const [score, setScore] = useState('0');
  const [prevScore, setPrevScore] = useState(null);
  const [_, setOperator] = useState(null);
  const [willClean, setWillClean] = useState(false);

  const onNumberClick = (value) => {
    setScore(score => { 
      if (willClean) { 
        score = '0';
      }
      if (score !== '0') { 
        return score + value
      } 
      return value; 
    });
    setWillClean(false);
  };

  const onOperatorClick = (curOper) => {
    setWillClean(true);
    setOperator(prevOper => {
      if (curOper === '=') {
        if (prevOper) {
          switch(prevOper) {
            case '+':
              setScore(score => Number(prevScore) + Number(score));
              break;
            case '-':
              setScore(score => Number(prevScore) - Number(score));
              break;
            case '×':
              setScore(score => Number(prevScore) * Number(score));
              break;
            case '÷':
              setScore(score => Number(prevScore) /  Number(score));
              break;
            default:
              break;
          }
          setPrevScore(null);
        } 
        return null;
      } else {
        setPrevScore(score);
        return curOper;
      }
    });
  };

  const onACClick = () => {
    setScore('0');
    setPrevScore(null);
    setOperator(null);
    setWillClean(false);
  }
  return (
    <div className="calc">
      <div className="calc__title">
        Calculator
      </div>
      <div className="calc__score">
        {score}
      </div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div className="button calc__keyboard__ac" onClick={onACClick}>AC</div>
          <div classsName="calc__keyboard__number">
            {
              new Array(3).fill().map((_, line) => {
                return (
                  <div className="calc__keyboard__number__line">
                    { 
                      new Array(3).fill().map((_, idx) => {
                        const num = line * 3 + idx + 1;
                        return (<div className="button button--blue" onClick={() => onNumberClick(num.toString())}>{num}</div>)
                      })
                    }
                  </div>
                );
              })
            }
          </div>
          <div className="button button--blue--big" onClick={() => onNumberClick('0')}>0</div>
        </div>
        <div className="calc__keyboard__operator">
          <div className="button button--deepblue" onClick={() => onOperatorClick('+')}>+</div>
          <div className="button button--deepblue" onClick={() => onOperatorClick('-')}>−</div>
          <div className="button button--deepblue" onClick={() => onOperatorClick('×')}>×</div>
          <div className="button button--deepblue" onClick={() => onOperatorClick('÷')}>÷</div>
          <div className="button button--pink" onClick={() => onOperatorClick('=')}>=</div>
        </div>
      </div>
    </div>
  );
}

export default Calc;