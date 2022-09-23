import React, { useState } from "react";
import { nanoid } from "nanoid";

const TodoInputs = ({ addData,editedTodo }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
    id: nanoid(),
  });

  const isDisabled = [user.name, user.email, user.email].every(Boolean);

  const formValidation = (e) => {
    postRequest(user);
    setUser((pre) => {
      let { name, email, userName } = pre;
      name = "";
      email = "";
      userName = "";
      return {
        name,
        email,
        userName,
      };
    });
    addData(user);
    e.preventDefault();
  };

  const postRequest = async (user = {}) => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      return await response.json();
    } catch (error) {
      throw new error(error);
    }
  };

  const inputStyle = {
    width: "30%",
    height: "40px",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "4px",
  };

  const containerStyle = {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div>
      <form onSubmit={formValidation} className="form_container" style={containerStyle}>
        <input
          type="text"
          placeholder="Name.."
          className="todo_input w-50"
          value={user.name}
          style={editedTodo? editedTodo: inputStyle}
          onChange={(e) =>
            setUser((pre) => {
              let copyObj = { ...pre };
              copyObj.name = e.target.value;
              return copyObj;
            })
          }
        />
        <input
          type="text"
          placeholder="Username.."
          className="todo_input"
          value={user.userName}
          style={inputStyle}
          onChange={(e) =>
            setUser((pre) => {
              let copyObj = { ...pre };
              copyObj.userName = e.target.value;
              return copyObj;
            })
          }
        />
        <input
          type="text"
          placeholder="Email.."
          className="todo_input"
          value={user.email}
          style={inputStyle}
          onChange={(e) =>
            setUser((pre) => {
              let copyObj = { ...pre };
              copyObj.email = e.target.value;
              return copyObj;
            })
          }
        />
        <button
          style={{
            width: "140px",
            height: "40px",
          }}
          disabled={!isDisabled}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default TodoInputs;
