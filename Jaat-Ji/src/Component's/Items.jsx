import classes from "./Items.module.css"

function Items({itemsNames,buyBtn1}){

//  const buyBtn = ()=>{
//     console.log(`hello , ${itemsNames}`);
//  }


//  const buyBtn = ()=>{
//     console.log(btn.target.innerText);
//     console.log(`hello , ${itemsNames}`);
//  }


  return (
    <li className={classes.listgroupitem}>
      <span>{itemsNames}</span>
      {/* <button className={classes.btn} onClick={()=>console.log(`hello , ${itemsNames}`)}>Buy</button>
      <button className={classes.btn} onClick={()=>{buyBtn()}}>Buy</button> */}
      {/* <button className={classes.btn} onClick={(btn)=>{buyBtn(btn)}}>Buy</button> */}
      {<button className={classes.btn} onClick={() => buyBtn1(itemsNames)}>Buy</button>}
      {/* {<button className={classes.btn} onClick={buyBtn1(itemsNames)}>Buy</button> } */}

    </li>
  );
}

export default Items;