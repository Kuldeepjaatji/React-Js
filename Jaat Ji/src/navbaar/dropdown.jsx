import Dropdown from "./dropdownUL";

function dropdown(){
    return(
            <>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button"data-bs-toggle="dropdown" aria-expanded="false">Color Name</a>
                <Dropdown/>
              </li>
            </>
    )
}
 export default dropdown;