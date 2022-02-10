import React, {useState} from 'react';
import "./EditModal.css"

const EditModal = (props) => {
    let [item,setItem] = useState(props.editTodo)
    function handleEditInput(event){
     let newObj = {...item}
     newObj.name = event.target.value
        setItem(newObj)
    }
    function handleEditInput2(event){
        let newObj = {...item}
        newObj.lastName = event.target.value
        setItem(newObj)
    }
    function handleEditInput3(event){
        let newObj = {...item}
        newObj.number = event.target.value
        setItem(newObj)
    }
    function handleSave(){
        props.handleSaveTask(item)
    }
    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input onChange={handleEditInput} type="text" value={item.name} placeholder="name" className="inp-edit"/>
                <input onChange={handleEditInput2} type="text" value={item.lastName} placeholder="lastname" className="inp-edit"/>
                <input onChange={handleEditInput3} type="text" value={item.number} placeholder="number" className="inp-edit"/>
                <button onClick={handleSave} >save</button>
            </div>
        </div>
    );
};

export default EditModal;