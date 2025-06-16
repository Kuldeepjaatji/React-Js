import React, { useContext } from 'react';
import MyContext from '../Store/Store';

export const GrandFather = () => {
    const {count,setCount} = useContext(MyContext);
  return (
    <>
    <p>{count}</p>
    <button onClick={()=>setCount("My Value is Updated via Context.")}>Click</button>
    </>
  );
}
