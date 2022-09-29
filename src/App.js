import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import Container from 'react-bootstrap/Container';

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <Container>
      <Header />
      <AddTodo setTodo={setTodo} todo={todo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
