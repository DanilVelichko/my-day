import React, { useState } from 'react';
import css from './ToDo.module.css';
// import { v4 as uuidv4 } from 'uuid';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSummary } from 'redux/summary/summaryOperationst';
// import { selectSummary } from 'redux/summary/summarySelectors';
// import { Wrapper, StatisticsTitle, Box } from './DiagramTab.styled';
// import { colorMap } from './colorMap';

const ToDo = ({ todo, index, completeToDo, removeToDo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeToDo(index)}>Complete</button>
        <button onClick={() => removeToDo(index)}>x</button>
      </div>
    </div>
  );
};

const ToDoForm = ({ addToDo }) => {
    const [value, setValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addToDo(value);
        setValue('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="input"
            value={value}
            placeholder="Add ToDo"
            onChange={e => setValue(e.target.value)}
        />
        </form>
    );
}

const ToDoList = () => {
    const [todos, setTodos] = useState([
        {
            text: 'Learn about React',
            isCompleted: false,
        },
        {
            text: 'Meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'Build really cool todo app',
            isCompleted: false,
        },
    ]);
    
    const addToDo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };
    
    const completeToDo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };
    
    const removeToDo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    
    return (
        <div className={css.box}>
            <h2>ToDo List</h2>
        <div className={css.todoList}>
            {todos.map((todo, index) => (
            <ToDo
                key={index}
                index={index}
                todo={todo}
                completeToDo={completeToDo}
                removeToDo={removeToDo}
            />
            ))}
            <ToDoForm addToDo={addToDo} />
        </div>
        </div>
    );
}       

export default ToDoList;