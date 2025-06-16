import Items from "./Items";
import classes from "./Listitem.module.css";
function ListItem(props) {

const buyBtn = (Ite)=>{
    
    console.log(`hello , ${Ite}`);
    }

  // const colorsList = ["Red","Green","Yellow","Blue","Black","White"];

  return (
    <>
      <ul className={classes.listgroup}>
        {props.itemsList.map((item, index) => (

         <Items key={index} itemsNames={item} buyBtn1={buyBtn}/>

        ))}
      </ul>
    </>
  );
}
export default ListItem;
