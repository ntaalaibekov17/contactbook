import React, {useState} from 'react';
import BgColor from "./components/BgColor/BgColor";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";
import EditModal from "./components/EditModal/EditModal";

const App = () => {
    let [todos, setTodos] = useState([])
    let [modal, setModal] = useState(false)
    let [editTodo, setEditTodo] = useState({})

    function HandleTask(newObj) {
        let newTodos = [...todos]
        newTodos.push(newObj)
        setTodos(newTodos)
    }

    // !function to make line through
    function changeStatus(id) {
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodos(newTodos)
    }

    function handleEdit(index) {
        setModal(true)
        setEditTodo(todos[index])
    }

    function handleDelete(id) {
        let newTodos = todos.filter(item => {
            console.log(item.id)
            return item.id !== id
        })
        setTodos(newTodos)
    }
    function handleSaveTask(newTask){
        let newTodos = todos.map((item) => {
            if (item.id === newTask.id) {
                return newTask
            }
            return item
        })
        setTodos(newTodos)
        handleCloseModal()
    }

    function handleCloseModal(){
        setModal(false)
    }

    return (
        <>
            {/*<BgColor/>*/}
            <AddToDo handleTask={HandleTask}/>
            <ToDoList
                todos={todos}
                changeStatus={changeStatus}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            {modal ?
                <EditModal
                    editTodo={editTodo}
                    handleSaveTask={handleSaveTask}
                    handleCloseModal = {handleCloseModal}
                />
                : null}
        </>

    )
}

export default App;