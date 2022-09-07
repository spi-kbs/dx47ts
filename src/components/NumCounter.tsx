import React, { useState } from 'react';
import {Region} from "../types/Prefecture"


export const NumCounter = () => {
  const [number, setNumber] = useState<number>(0);
  const [error, setError] = useState<string>('');

  return (
    <div>
      <p>{number}{error}</p>
      <p></p>
      <button onClick={
        () => {
          setNumber(number + 1)
          setError('')
        }
      }>+</button>
      <button onClick={
        () => {
          const nextValue = number - 1
          if (nextValue < 0) {
            setError(' : error!')
            return;
          }
          setNumber(nextValue)
          setNumber(Math.max(0, number - 1))
        }
      }>-</button>
    </div>
  )
};


// export const Number = () => {
//   return (
//     <></>
//   );
// };
