import React, {useState} from 'react';

const AddToDo = (props) => {
    let [name, setName] = useState("")
    let [lastName, setLastName] = useState("")
    let [number, setNumber] = useState("")


    // const handleInput = (event)=>{
    //     setTask(event.target.value)
    // }
    const handleAdd=()=>{
        const newTask = {
            name,
            lastName,
            number,
            id:Date.now()
        }
        props.handleTask(newTask)

    }


    return (
        <div>
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="text" placeholder="lastname" onChange={(e) => setLastName((e.target.value))} value={lastName}/>
            <input type="text" placeholder="number" onChange={(e) => setNumber(e.target.value)} value={number}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddToDo;