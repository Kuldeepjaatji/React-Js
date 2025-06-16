import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState();
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Be cautious with eval in production!else if(result){setInput=``;}
      } catch (error) {
        setResult('Error');
      }
    }else if (value === 'C') {
      setInput('');
      setResult(0);
    }else if (value === 'B') {
      setInput(input.slice(0,-1));
      setResult(0);
    }else if (value === 'C') {
      setInput('');
      setResult(0);
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
    <div style={{border:`1px solid black`,borderRadius:10,backgroundColor:`pink`}}>
      <div style={{width:200,borderRadius:6,margin:10}}>
      <div  style={{backgroundColor:`red`,height:35,display:'flex',outline:`none`,borderRadius:6}}>
        <input type="text" value={input} readOnly style={{backgroundColor:`red`,borderRadius:6,outline:`none`,border:`none`}}/>
        <div>{result}</div>
      </div>
      <div style={{display:'flex',justifyContent:'space-around',marginTop:10}}>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('C')}>C</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('%')}>%</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('B')}>B</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div style={{display:'flex',justifyContent:'space-around',marginTop:10}}>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('7')}>7</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('8')}>8</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('9')}>9</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div style={{display:'flex',justifyContent:'space-around',marginTop:10}}>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('4')}>4</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('5')}>5</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('6')}>6</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div style={{display:'flex',justifyContent:'space-around',paddingTop:10}}>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('1')}>1</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('2')}>2</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('3')}>3</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div style={{display:'flex',justifyContent:'space-around',marginTop:10,marginBottom:10}}>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('00')}>00</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('0')}>0</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => handleButtonClick('.')}>.</button>
        <button style={{height:35,width:35,backgroundColor:`green`,border:`none`,outline:`none`,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'skyblue'}} onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
    </div>
        </>
  )
}

export default App
