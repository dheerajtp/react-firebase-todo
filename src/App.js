import { useState, useEffect } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { db } from "./firebase_config";
import firebase from "firebase";
import "firebase/firestore";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todo").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todotext: todoInput,
    });
    setTodoInput("");
  };

  const getTodo = () => {
    db.collection("todo").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todotext,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>My Todo App 😇</h1>
        <form>
          <TextField
            id="standard-basic"
            value={todoInput}
            label="Write your Todo.."
            onChange={(e) => setTodoInput(e.target.value)}
            style={{ width: "90vw", maxWidth: "500px" }}
          />
          <Button
            type="submit"
            onClick={addTodo}
            style={{ display: "none" }}
            variant="contained"
          >
            Default
          </Button>
        </form>
        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {todos.map((todo) => (
            <Todo todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
