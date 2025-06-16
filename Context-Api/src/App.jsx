import { useState } from 'react';
import './App.css';
import MyContext from './Store/Store';
import { GrandFather } from './Component/GrandFather';
import { Father } from './Component/Father';
import { Child } from './Component/Child';
import { GrandChild } from './Component/GrandChild';

function App() {
  const [count, setCount] = useState("Hello")

  return (
    <>
      <MyContext.Provider value={{count,setCount}}>
        <GrandFather>
          <Father>
            <Child>
              <GrandChild/>
            </Child>
          </Father>
        </GrandFather>
      </MyContext.Provider>
    </>
  )
}

export default App
