"use client";
import React, { useState } from "react";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  const deleteHandler = (index) => {
    let copytask = [...todos];
    copytask.splice(index, 1);
    setTodos(copytask);
  };
  let showTask = <h3>No Task Available.</h3>;
  if (todos.length > 0) {
    showTask = todos.map((todo, index) => {
      return (
        <li
          key={index}
          className="border-b-2 border-zinc-600 py-2 flex justify-center items-center"
        >
          <div className="flex justify-between mb-4 w-[80%] items-center">
            <h4 className="font-medium text-2xl">{todo.title}</h4>
            <h6 className="font-medium">{todo.desc}</h6>
            <button
              onClick={() => {
                deleteHandler(index);
              }}
              className="bg-red-800 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-zinc-800 text-center text-slate-300 text-3xl font-bold p-4 tracking-wider">
        Todo App.
      </h1>
      <div className="flex justify-center items-center mt-5 flex-col gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!title || !desc) return alert("Please fill all fields");
            setTodos([...todos, { title, desc }]);
            setTitle("");
            setDesc("");
            console.log(todos);
          }}
        >
          <input
            type="text"
            className="rounded text-md outline-none border-zinc-800 border m-5 px-4 py-2"
            placeholder="Enter Your Task"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="rounded text-md outline-none border-zinc-800 border m-5 px-4 py-2"
            placeholder="Enter Your Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button className="bg-zinc-700 px-4 hover:bg-zinc-600 py-2 text-white font-medium- rounded">
            Add Task
          </button>
        </form>
        <hr />
        <div className="p-4 bg-slate-300 w-[70%] h-[60vh] rounded-md overflow-y-auto">
          {/* map through todos and display them */}
          <ul className="flex flex-col gap-2 justify-center">{showTask}</ul>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
