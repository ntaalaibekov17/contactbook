import React from 'react';
import "./ToDoList.css"

const ToDoList = (props) => {
    let style = {
        color:"red",
        listStyleType:"none"
    }
    return (

            <>
                {
                    props.todos.map((item, index)=>(
                        <ul>
                            <li>{item.name}
                                <button onClick={()=>props.handleDelete(item.id)}>&times;</button>
                                <button onClick={()=> props.handleEdit(index)}>edit</button>
                            </li>
                            <li>{item.lastName}

                            </li>
                            <li>{item.number}

                            </li>
                        </ul>

                    ))
                }
            </>

    );
};

export default ToDoList;
// <button onClick={()=>props.handleDelete(item.id)}>&times;</button>
// <button onClick={()=> props.handleEdit(index)}>edit</button>



// <ul style={style}>
//     {props.todos.map((item, index)=>(
//
//         <li>{item.name}
//             <button onClick={()=>props.handleDelete(item.id)}>&times;</button>
//             <button onClick={()=> props.handleEdit(index)}>edit</button>
//
//         </li>))}
//
// </ul>
// <ul style={style}>
//     {props.todos.map((item, index)=>(
//         <li>
//             {item.lastName}
//
//         </li>))}
// </ul>
// <ul style={style}>
//     {props.todos.map((item, index)=>(
//         <li>
//             {item.number}
//
//         </li>))}
// </ul>