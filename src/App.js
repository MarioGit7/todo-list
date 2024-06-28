import './App.css';
import React, {useRef} from 'react';
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  const inputRef = useRef()

  // Setting state that holds the tasks

  const [tasks, setTasks] = React.useState([])



  // Creating a function for adding tasks to state

  function addTodo(e){
    e.preventDefault()

    inputRef.current.value.length > 0 && setTasks([
      ...tasks,
      {id: tasks.length === 0 ? 1 : tasks[tasks.length-1].id + 1, text: inputRef.current.value, completed: false, editMode: false}
    ])
    inputRef.current.value=""
  }

   
  // Deleting todo 
  function deleteTodo(id){
    const filteredArr = tasks.filter(item => item.id !== id)
    setTasks(filteredArr)
  }
  
  //Marking todo as complete
  function completeTodo(id){
    const updateComplete = tasks?.map(prevTask => 
        prevTask.id === id ? {...prevTask, completed: !prevTask.completed, editMode: false} : prevTask
    )
    setTasks(updateComplete)
  }


  const submitEdit = (e, editText, editId) => {
    e.preventDefault()
    const emptyEdit = editText.current.value.length !== 0 
    if(emptyEdit){
      const editComplete = tasks?.map(prevTask => 
        prevTask.id === editId ?  {...prevTask, text: editText.current.value, editMode: false } : {...prevTask, editMode: false}
      )
      setTasks(editComplete)
    }else(
       
      setTasks(tasks?.map(prevTask => 
        prevTask.id === editId ?  {...prevTask, text: prevTask.text, editMode: false } : {...prevTask}
      ))
    )
    
    

    
  }

  function toggleEditMode(id){
    const toggleEditMode = tasks?.map(prevTask => 
      prevTask.id === id ? {...prevTask, editMode: true} : prevTask
    )
    setTasks(toggleEditMode)
  }

  //Mapping through all task in state and returning a "task" component with the data

  const taskMap = tasks?.map(task => {
    return <Task key={task.id} id={task.id} text={task.text} completed={task.completed} delete={deleteTodo} markComplete={completeTodo} edit={submitEdit} editMode={task.editMode} toggleEdit={toggleEditMode}/>
    } 
  )

   
  
  return (
    <div className='App'>
      <Header />
      <div className="add-todo-con">
          <form className="add-todo-form" onSubmit={addTodo}>
              <input className="add-todo-input" placeholder="Example: Buy Groceries" ref={inputRef}></input>
              <button className="add-todo-btn" type="submit">Add Todo</button>
          </form>
      </div>
      <div className='todo-container'>
        <div className='todo-title-container'>
          <h3 >Tasks</h3>
        </div>
        <div className='tasks-container'>{taskMap}</div>
      </div>
    </div>
  );
}

export default App;
