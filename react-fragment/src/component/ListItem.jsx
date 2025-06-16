import { useState } from "react";
import Items from "./items";
function ListItem(props) {


  //  let [isActive1,setIsActive1] = useState([`Blue`]) ==> isme jo asine kroge to us asin value pr auto color aayega
      let [isActive1,setIsActive1] = useState([]);

  const buyButton = (Kuldeep) => {
     setIsActive1([Kuldeep,...isActive1]) // ==> sbhi pr select krke color kr sakte hai
    
    
    
    //setIsActive1(Kuldeep);  // ==> isme sbhi items me 1 ko click krne ek hi colorfull hogr
    // console.log(`color name is ${Kuldeep} available.`)
  }

  return (
    <>
      <ul className="list-group">
        {
          props.itemsList.map((item, index) => (
            
         <Items key={index} isActive={isActive1.includes(item)} itemsNames={item} buyButton={buyButton} />
          
        ))}
      </ul>
    </>
  );
}
export default ListItem;
