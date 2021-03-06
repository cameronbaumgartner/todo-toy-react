import { useState } from 'react';
import '../App.css';  
import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';
import FinishedTodos from './FinishedTodos.jsx';

function App() {
  const [todos, setTodos] = useState(['Meal plan', 'Grocery shopping', 'Laundry']);
  const [finishedTodos, setFinishedTodos] = useState(['Work out', 'Put clothes away']);
  const [input, setInput] = useState('');
  console.log(todos, finishedTodos);

  const changeHandler = (event) => {
    setInput(event.target.value);
  }

  const clickHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  const removeTodo = (index) => {
    const todosClone = [...todos];
    todosClone.splice(index, 1);
    return todosClone;
  }

  const markDone = (index) => {
    setFinishedTodos([...finishedTodos, todos[index]]);
    setTodos(removeTodo(index));
  }

  const deleteItem = (index) => {
    setTodos(removeTodo(index));
  }

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
        <TodoInput 
          input={input} 
          changeHandler={changeHandler} 
          clickHandler={clickHandler}
        />
      </header>
      <hr></hr>
      <TodoList 
        todos={todos}
        markDone={markDone}
        deleteItem={deleteItem}
      />
      <hr></hr>
      <h3>Done <span><i className="far fa-caret-square-down"></i></span></h3>
      <FinishedTodos todos={finishedTodos} />
    </div>
  );
}

export default App;