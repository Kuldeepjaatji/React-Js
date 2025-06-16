function EmptyList(props){

  return (

    props.itemsList.length == 0 ? <p>Color Names is undefined.</p> : null
    
  );
}
export default EmptyList;