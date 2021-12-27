/* eslint-disable no-eval */
import React from 'react';
import Box from './styled';

const SmallCalc = function () {
  const [num, setNum] = React.useState('');

  function inputNum(e) {
    const el = e.target;
    setNum(num + el.value);
  }

  function clearDisplay() {
    setNum('');
  }

  function deleteOne() {
    setNum(num.slice(0, -1));
  }

  function equalButton() {
    try {
      if (String(eval(num)).length > 4) {
        setNum(eval(num).toFixed(3));
      } else {
        setNum(eval(num));
      }
    } catch (e) {
      setTimeout(() => setNum('Invalid Operation.'), 0);
      setTimeout(() => setNum(''), 500);
    }
  }

  return (
    <Box>
      <table>
        <tr>
          <td colSpan={4}>
            <input type="text" className="display" value={num} />
          </td>
        </tr>

        <tr>
          <td>
            <button type="button" className="btn clear" onClick={clearDisplay}>C</button>
            <button type="button" className="btn num" onClick={inputNum} value="(">(</button>
            <button type="button" className="btn num" onClick={inputNum} value=")">)</button>
            <button type="button" className="btn num" onClick={inputNum} value="/">/</button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" className="btn num" onClick={inputNum} value="7">7</button>
            <button type="button" className="btn num" onClick={inputNum} value="8">8</button>
            <button type="button" className="btn num" onClick={inputNum} value="9">9</button>
            <button type="button" className="btn num" onClick={inputNum} value="*">*</button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" className="btn num" onClick={inputNum} value="4">4</button>
            <button type="button" className="btn num" onClick={inputNum} value="5">5</button>
            <button type="button" className="btn num" onClick={inputNum} value="6">6</button>
            <button type="button" className="btn num" onClick={inputNum} value="+">+</button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" className="btn num" onClick={inputNum} value="1">1</button>
            <button type="button" className="btn num" onClick={inputNum} value="2">2</button>
            <button type="button" className="btn num" onClick={inputNum} value="3">3</button>
            <button type="button" className="btn num" onClick={inputNum} value="-">-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" className="btn num" onClick={inputNum} value=".">.</button>
            <button type="button" className="btn num" onClick={inputNum} value="0">0</button>
            <button type="button" className="btn" onClick={deleteOne}>&laquo;</button>
            <button type="button" className="btn equal" onClick={equalButton}>=</button>
          </td>
        </tr>
      </table>
    </Box>
  );
};

export default SmallCalc;
