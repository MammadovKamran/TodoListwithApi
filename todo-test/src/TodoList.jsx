import React, { useState } from "react";
import { Button, Card, CardHeader, ListGroup, ListGroupItem } from "reactstrap";
const TodoList = ({ data, deleteData, editData }) => {
  //! DELETE TODO
  const deleteTodo = (paramsDeleted) => {
    data.map((element) => {
      if (element.id === paramsDeleted.id) {
        deleteRequest(paramsDeleted);
        deleteData(paramsDeleted);
      } else {
        console.log("error");
      }
    });
  };
  const deleteRequest = async (user) => {
    console.log(user, "Deleted");
    await fetch(`http://localhost:3000/users/${user.id}`, { method: "DELETE" });
  };

  // // ! EDIT TODO
  // const editTodo = (paramsEdit) => {
  //   data.map((element) => {
  //     if (element.id === paramsEdit.id) {
  //       editData(paramsEdit);
  //     } else {

  //       console.log("error");
  //     }
  //   });
  // };
  return (
    <div>
      <div className="d-flex flex-wrap">
        {data.length > 0 ? (
          data.map((user) => (
            <Card
              style={{
                width: "18rem",
              }}
              key={user.id}
            >
              <CardHeader className="d-flex justify-content-between">
                <Button
                  color="warning"
                  onClick={() => {
                    // editTodo(user);
                  }}
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    deleteTodo(user);
                  }}
                >
                  X
                </Button>
              </CardHeader>
              <ListGroup flush>
                <ListGroupItem>{user.name}</ListGroupItem>
                <ListGroupItem>{user.userName}</ListGroupItem>
                <ListGroupItem>{user.email}</ListGroupItem>
              </ListGroup>
            </Card>
          ))
        ) : (
          <h1>not any user</h1>
        )}
      </div>
    </div>
  );
};

export default TodoList;
