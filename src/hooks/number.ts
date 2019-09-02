
import { useState } from 'react';

interface INumbers {
    value1?: string;
    value2?: string;
    value3?: string;
}

export const useStrikeNumber = (initialValue = '') => {
  const strArrInitialValue = Array.from(initialValue);

  const [strikeNumbers, setStrikeNumbers] = useState(strArrInitialValue);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');

  const [strikeCount, setStrikeCount] = useState(0);
  const [ballCount, setBallCount] = useState(0);
  const [isOut, setOut] = useState(false);

  const inputNumbers = [number1, number2, number3];

  const isError = inputNumbers.includes(null) || inputNumbers.includes('');
  console.log({
    isError,
  });

  return {
    strikeNumbers,
    inputNumbers,

    setNumbers: ({ value1, value2, value3 }: INumbers) => {
      console.log({ value1, value2, value3 });
      if (value1 || value1 === '') {
        setNumber1(value1);
      }
      if (value2 || value2 === '') {
        setNumber2(value2);
      }
      if (value3 || value3 === '') {
        setNumber3(value3);
      }
      console.log('setNumbers', [number1, number2, number3]);
    },
    checkStrike: () => {
      let ballCount = 0;
      let strikeCount = 0;
      inputNumbers.forEach((elem, i) => {
        // ストライクチェック
        if (strikeNumbers[i] === inputNumbers[i]) {
          strikeCount++;
        } else {
          // ストライクでなければボールチェック
          if (strikeNumbers.includes(elem)) {
            ballCount++;
          }
        }
      });
      setBallCount(ballCount);
      setStrikeCount(strikeCount);

      // アウト判定
      if (ballCount === 0 && strikeCount === 0) {
        setOut(true);
      } else {
        setOut(false);
      }
    },
    strikeCount,
    ballCount,
    isOut,
    isError,
  };
};
