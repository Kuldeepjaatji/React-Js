import "bootstrap/dist/css/bootstrap.min.css"
import ListItem from "./component/ListItem";
import EmptyList from "./Component/EmptyList";
import Container from "./Component/Container";
import classes from "./App.module.css"
import Input from "./Component/Input";
import { useState } from "react";

function App() {
//  let [textShow,setTextShow] = useState("this is your color");

//  const [colors,setColors] = useState(["Red","Green","Yellow","Blue","Black","White"]);


  //-----1st=== by chang

  //  const handle = (event)=>{
  //   if(event.key === "Enter"){
  //     let newItem = event.target.value;
  //     setTextShow(newItem)
  //   }};


  //-----2nd

  // const handleOnKeyDown = (event)=>{
  //   if(event.key === "Enter"){
  //     let newItem = event.target.value;
  //     setTextShow(newItem);
  //   }};


  //-----3rd======== I don't no

  
    let [textShow,setTextShow] = useState("this is your color");
    // const [colors,setColors] = useState(["Red","Green","Yellow","Blue","Black","White"]);

    const [colors,setColors] = useState([]);
  const handleOnKeyDown = (event)=>{
    if(event.key === "Enter" && !(event.target.value == "")){
     let newItem = event.target.value;
      setTextShow(newItem);
    event.target.value = "";
      let totalItem = [newItem,...colors]
    setColors(totalItem);
    }
  }

  return (
    <>
    <Container>
      <h2 className="border border-2 bg-info text-center p-2"> Color Names</h2>
      <EmptyList itemsList={colors} />
      {/* <Input handle1={handle}/> */}
      <Input handleOnKeyDown1={handleOnKeyDown}/>
      <p>What is item for you :{textShow}</p>
      <ListItem itemsList={colors} />

    </Container>
    <Container>
    <h2>Remote Design</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <button className={classes.btn}>Buy Now</button>
    </Container>
    </>
  );
}

export default App;