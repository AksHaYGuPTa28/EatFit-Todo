import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./todoMain.css";

import TaskList from "./task-list";
import TodoForm from "./todo-form";

function TodoMain() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const json = localStorage.getItem("tasks");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTasks(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json);
  }, [tasks]);
  const handleAddTask = (e) => {
    setTasks((tasks) => [...tasks, currentTask]);
    setCurrentTask(null);
    e.preventDefault();
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleCompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].complete = !newTasks[index].complete;
    setTasks(newTasks);
  };

  return (
    <div className="App content">
      <h1 className="title">To Do List</h1>
      <TodoForm
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        handleAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        handleRemoveTask={handleRemoveTask}
        handleCompleteTask={handleCompleteTask}
      />
    </div>
  );
}

export default TodoMain;
