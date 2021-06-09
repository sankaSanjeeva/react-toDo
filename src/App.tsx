import React, { BaseSyntheticEvent, useState } from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import Add from './components/Add/Add';
import Card from './components/Card/Card';

function App() {
  const [todos, toggleDone] = useState([
    { title: 'First One', description: 'This is the first one', isDone: true },
    { title: 'Second One', description: 'This is the second one', isDone: true },
    { title: 'Third One', description: 'This is the third one', isDone: false },
  ]);

  const toggleDoneTodo = (event: BaseSyntheticEvent) => {
    let index = todos.findIndex((todo, i) => i === Number(event.target.alt));
    todos[index].isDone = !todos[index].isDone;
    toggleDone([...todos]);
  }

  const removeTodo = (event: BaseSyntheticEvent) => {
    if (window.confirm('Are you sure')) {
      let index = todos.findIndex((todo, i) => i === Number(event.target.alt));
      todos.splice(index, 1);
      toggleDone([...todos]);
    }
  }

  const addTodo = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    let todo = { title: event.target[0].value, description: event.target[1].value, isDone: false };
    todos.push(todo);
    toggleDone([...todos]);
  }

  return (
    <div className="app bg-gray-700">
      <header className="app__header flex justify-center items-center">
        <h1 className="text-2xl">ToDO App</h1>
        <img src={logo} className="app__header__logo" alt="logo" />
      </header>
      <section className="flex flex-col items-center">
        <div className="p-2">
          <Add addTodo={addTodo} />
        </div>
        <div className="grid gap-2 p-1">
          {todos.map((todo, i) =>
            <li key={i} className="list-none">
              <Card
                index={i}
                title={todo.title}
                description={todo.description}
                isDone={todo.isDone}
                toggleDoneTodo={toggleDoneTodo}
                removeTodo={removeTodo} />
            </li>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
