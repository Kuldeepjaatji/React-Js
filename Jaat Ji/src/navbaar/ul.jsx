import Home from "./Home";
import Link from "./Link";
import Dropdown from "./dropdown";
import Nav from "./nav";

function ul(){
    
    return(
        <>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Home/>
            <Link/>
            <Dropdown></Dropdown>
            <Nav/>
          </ul>
        </>
    )
}
export default ul;