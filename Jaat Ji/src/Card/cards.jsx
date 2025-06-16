import Links from "./card1link";
import Cart from "./card1ul";
import Tital from "./card1tital";
import Img from "./card1img";

function cards(){

    return(
        <>
            <div style={{width: "18rem"}}>
                <Img/>
                <Tital/>
                <Cart/>
                <Links/>
            </div>
        </>
    )
}
export default cards;