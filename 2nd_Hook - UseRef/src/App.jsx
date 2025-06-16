import { useRef } from 'react'
import './App.css'

function App() {
 const inputRef = useRef(null);
 const countRef = useRef(0);
 function foces(){
  countRef.current += 1;
  if(inputRef.current){
    inputRef.current.textContent  = countRef.current;
  }
 }
 function foces2(){
  countRef.current -= 1;
  if(inputRef.current){
    inputRef.current.textContent  = countRef.current;
  }
 }

  return (
    <>
      <div className='div1'>
        <p ref={inputRef} className='pp'>{countRef.current}</p>
        <div className='div2'>
          <button type='button' className='btn' onClick={()=>{foces()}}>incrise</button>
          <button type='button' className='btn' onClick={()=>{foces2()}}>decrise</button>
        </div>
      </div>
    </>
  )
}

export default App
