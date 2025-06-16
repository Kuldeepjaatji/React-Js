import { useState } from "react"

function App(){
    const [Kuldeep , setKuldeep] = useState(1);
    const [Jaat , setJaat] = useState(1);
    const [Hemant , setHemant] = useState(536870912);
    const [Kumawat , setKumawat] = useState(1);
  return(
    <>
      <div className="flex">
        <div className="div">      
        <h1>Count : {Kuldeep}</h1>
        <button onClick={()=>setKuldeep(Kuldeep + 1)}>Click & Increment</button>
        </div>
        <div className="div">      
        <h1>Count : {Jaat}</h1>
        <button onClick={()=>setJaat(Jaat * 2)}>Click & Fold</button>
        </div>
        <div className="div">      
        <h1>Count : {Hemant}</h1>
        <button onClick={()=>setHemant(Hemant / 2)}>Click & Dibid</button>
        </div>
        <div className="div">      
        <h1>Count : {Kumawat}</h1>
        <button onClick={()=>setKumawat(Kumawat - 1)}>Click & Decrement</button>
        </div>  
      </div>    
    </>
  )
}
export default App;