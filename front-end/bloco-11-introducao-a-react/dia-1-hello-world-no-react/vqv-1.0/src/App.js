import './App.css';
import React from 'react';

// const value = 'Hello World!'
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const toDoList = ['wake up','have breakfast','brushing teeth', 'go to work'];
class App extends React.Component {
  render() {
    return (
      // adicionando toDoList e listando atravéz do map em uma tag ul
      <ul>{toDoList.map(toDoList => Task(toDoList))}</ul>
    );
  }
}

export default App;
