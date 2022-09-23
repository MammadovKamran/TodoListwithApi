import React, { useState, useEffect } from "react";
import "./App.css";
import TodoInputs from "./TodoInputs";
import TodoList from "./TodoList";

const App = () => {
  const [data, setData] = useState([]);
  const [editedTodo, setEditedTodo] = useState([]);
  // !ADD DATA
  const addData = (paramsData) => {
    data.push(paramsData);
    const copy = [...data];
    setData(copy);
    console.log(data);
  };

  // !DELETE DATA
  const deleteData = (paramsDeleted) => {
    const index = data.indexOf(paramsDeleted);
    data.splice(index, 1);
    const copy = [...data];
    setData(copy);
  };

  // // !EDIT DATA
  // const editData = (paramsEdit) => {
  //   const index = data.indexOf(paramsEdit);
  //   data.splice(index, 1);
  //   const copy = [...data];
  //   setEditedTodo(copy);
  //   console.log(editedTodo);
  // };

  // !FETCH DATA
  const fetchTodo = () => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((todosData) => setData(todosData));
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="container">
      <h2>Todo List</h2>
      <TodoInputs addData={addData} />
      <TodoList data={data} deleteData={deleteData}
      //  editData={editData}
        />
    </div>
  );
};

export default App;
