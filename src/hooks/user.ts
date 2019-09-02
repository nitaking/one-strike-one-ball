import { useState } from 'react';
import { useMap } from 'react-hooks-lib';
import { useStrikeNumber } from './number';

export const useUser = (initialValue = { name: '', number: '' }) => {
  const { name, number } = initialValue;
  const [userName, setUserName] = useState(name);
  const [userNumber, setUserNumber] = useState(number);
  console.log({
    input: { name: userName, number: userNumber },
    initialValue,
  });
  // const isValid = { name: userName, number: userNumber } == initialValue;

  const inputValue = { name: userName, number: userNumber };
  const isRequire = JSON.stringify(inputValue) === JSON.stringify(initialValue);
  const isError = JSON.stringify(inputValue) === JSON.stringify(initialValue)
        || userNumber.length !== 3;
  const errors = {
    message: [
      'すべて入力してください',
    ],
  };
  const isValid = !isError;

  return {
    userName,
    userNumber,
    setUserName,
    setUserNumber,
    isValid,
  };
};
