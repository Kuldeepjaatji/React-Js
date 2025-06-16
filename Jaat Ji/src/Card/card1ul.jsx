function cart(){
     let rollNumber = [`An item`,`1st`,`2nd`,`3rd`,`4th`,`5th`,`kuldeep`];
    return(
        <>
        <ul className="list-group list-group-flush">
            {
                rollNumber.map((item,index)=>(
                    <li className="list-group-item" key={index}>{item}</li>
                ))
            }
            
        </ul>
        </>
    );
}
export default cart;