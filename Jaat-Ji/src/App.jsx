import Empty from "./Component's/Empty";
import Listitem from "./Component's/Listitem";
import './App.css';

function App() {
 const color = [`Red`,`Blue`,`Yellow`,`Pink`,`Green`,`Skyblue`];
 //const color = [];

//  if(color.length === 0){
//   return <p>Your colors not show.</p>;

//  }else{return <ul className="list-group">
//      {
//        color.map((item,index)=>(
//          <li key={index} className="list-group-item">{item}</li>
//        ))
//      }
//      </ul>}


 // let EmptyColorList = color.length == 0 ? <p>Color Names is undefined.</p> : null;

  return (
    <>
    {/* {EmptyColorList} */}
    <h1 className="border border-2 bg-info text-center">Colors Name</h1>
      <Empty itemsList={color}/>
      <Listitem itemsList={color}/>
    </>
  )

}

export default App;