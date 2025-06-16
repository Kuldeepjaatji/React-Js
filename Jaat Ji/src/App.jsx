import Fulldiv from "./navbaar/fulldiv";
import Cards from "./Card/cards";
import Cards2 from "./Card/cards2";
import Cards3 from "./Card/cards3";


function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Fulldiv/>
        </nav>
      <div className="d-flex justify-content-evenly">
      <Cards/>
      <Cards2/>
      <Cards3/>
      </div>
    </>
  );
}

export default App;