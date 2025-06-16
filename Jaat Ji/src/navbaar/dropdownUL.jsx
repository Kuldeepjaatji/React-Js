
function dropdown(){
    const colorName = [`Red`,`Blue`,`Green`,`Pink`,`Yellow`]
    return (
        <>
            <ul className="dropdown-menu">
                  {
                    colorName.map((index,array) => (
                        <li key={array}> <a className="dropdown-item" href="#">{index}</a></li>
                    ))
                  }                  
            </ul>
        </>
    )
}
export default dropdown;