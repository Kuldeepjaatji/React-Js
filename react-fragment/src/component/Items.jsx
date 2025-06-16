import classes from "./Items.module.css"

function Items({itemsNames,isActive,buyButton}){



  return (
    <li className={`list-group-item ${isActive && classes.bgPink}`}>
      <span>{itemsNames}</span>
      <button className={classes.btn} onClick={()=>buyButton(itemsNames)} >Buy</button>
    </li>
  );
}

export default Items;