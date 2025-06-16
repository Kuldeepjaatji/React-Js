import { useState } from "react";

function AddTodo({newitems}){
    
    const [inputText,setInputText] = useState("");
    const [dueDate,setDueDate] = useState("");

    function handleInputText(event){
        setInputText(event.target.value);
    }
    function handleDueDate(event){
        setDueDate(event.target.value);
    }
    function handleAddBtn(item2,index2){
        if (item2 === "" || index2 === "") {
            alert("Please enter a task before adding.");
            return;
        }
        // if (item2.trim() === ""||index2.trim() === "") {
        //     alert("Please enter a task before adding.");
        //     return;
        // }
        newitems(item2,index2)
        setDueDate("");
        setInputText("");
    }
    return(
        <>
        <div className="container border border-0">
            <div className="row d-flex align-items-center">
                <div className="col-4 border border-0">
                    <input type="text" placeholder="Enter your task" className="w-100" value={inputText} onChange={handleInputText}/>
                </div>
                <div className="col-4 border border-0">
                    <input type="date" className="w-100" value={dueDate} onChange={handleDueDate}/>
                </div>
                <div className="col-4 ">
                    <button type="submit" className="btn btn-success w-100 border border-0" onClick={()=>handleAddBtn(inputText,dueDate)}>Add</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddTodo;