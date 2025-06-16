import classes from "./Input.module.css"

// const Input = ({handle1}) =>{

//   return (
//     <input type="text" className={classes.Input} onChange={handle1} />
//   );
//   }
const Input = ({handleOnKeyDown1}) =>{

  return (
    <input type="text" className={classes.Input} onKeyDown={handleOnKeyDown1} />
  );
  }

export default Input;