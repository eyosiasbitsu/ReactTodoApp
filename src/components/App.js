import React, { useState } from 'react';
import TodoList from './components/TodoList'

const App = () => {

    const [todos, setTodos] = useState(['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4']);
    
    return (
        <div className='App'>
            <h1> Todo List </h1>
            <TodoList todos = {todos}/>
        </div>
    ); 
};

export default App;