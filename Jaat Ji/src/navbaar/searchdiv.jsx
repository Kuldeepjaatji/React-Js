import Search from "./search";
import Ul from "./ul";


function div(){
    return(
        <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Ul/>
            <Search/>
          </div>
        </>
    );
}

export default div;