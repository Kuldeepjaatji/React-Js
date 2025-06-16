function Empty(props2){

    // const colorsList = ["Red","Green","Yellow","Blue","Black","White"];
  
    return (
  
      props2.itemsList.length == 0 ? <p>Color Names is undefined.</p> : null
      
    );
  }
  export default Empty;