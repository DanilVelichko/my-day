import React, { useState } from 'react';
import css from './ToDo.module.css';

const ToDo = ({ todo, index, completeToDo, removeToDo, editToDo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = e => {
    e.preventDefault();
    editToDo(index, editText);
    setIsEditing(false);
  };

  return (
    <div
      className={isEditing ? css.editingTodo : css.todo}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {isEditing ? (
        <form className={ css.form} onSubmit={handleEdit}>
                  <input
                      className={css.input_text}
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <button className={css.button_submit} type="submit">Save</button>
          <button className={css.todo_button} onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <div>{todo.text}</div>
          <div>
            <button className={css.todo_button} onClick={() => completeToDo(index)}>Complete</button>
            <button className={css.todo_button} onClick={() => setIsEditing(true)}>Edit</button>
            <button className={css.todo_button} onClick={() => removeToDo(index)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addToDo({
      id: Date.now(),
      text: value,
      isCompleted: false,
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={css.input_text}
        value={value}
        placeholder="My new task is..."
        onChange={e => setValue(e.target.value)}
      />
      <button className={css.button_submit} type="submit">Add task</button>
    </form>
  );
};

const ToDoList = () => {
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      id: Date.now() + 1,
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      id: Date.now() + 2,
      text: 'Build really cool todo app',
      isCompleted: false,
    },
  ]);

  const addToDo = todo => {
    setTodos([...todos, todo]);
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

  const editToDo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <div className={css.box}>
          <h2 className={css.title_todo}>ToDo List</h2>
            <ToDoForm addToDo={addToDo} />
      <div className={css.todoList}>
        {todos.map((todo, index) => (
          <ToDo
            key={todo.id}
            index={index}
            todo={todo}
            completeToDo={completeToDo}
            removeToDo={removeToDo}
            editToDo={editToDo}
          />
        ))}
      
      </div>
    </div>
  );
};

export default ToDoList;
