import Para from "./Para";

function Greet({Name,Age,Para2}){
    return(
        <>
        <h1>Hello,Ma name is {Name}</h1>
        <p>and my age = {Age}</p>
        <Para para1={Para2}></Para>
        </>
    );
}
export default Greet;