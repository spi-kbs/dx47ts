import React, { useState } from 'react';
import {Region} from "../types/Prefecture"


export const NumCounter = () => {
  const [number, setNumber] = useState<number>(0);
  // const [error, setError] = useState<string>('');

  return (
    <div>
      <p>{number}</p><Error num={number}/>
      <button onClick={
        () => {
          setNumber(number + 1)
          // setError('')
        }
      }>+</button>
      <button onClick={
        () => {
          const nextValue = number - 1
          // if (nextValue < 0) {
          //   // setError(' : error!')
          //   return;
          // }
          setNumber(nextValue)
          // setNumber(Math.max(0, number - 1))
        }
      }>-</button>
      <p><button onClick={()=>setNumber(0)}>reset</button></p>
      <p><input type="text" value={number}/><button onClick={()=>setNumber(number)}>set</button></p>
    </div>
  )
};

const Error = ({num}: {num: number}) => {
  return num < 0 ? (
    <p>error!</p>
  ) : null;
}
// export const Number = () => {
//   return (
//     <></>
//   );
// };
