import React from "react";
import {
  AiOutlineCheck,
  AiOutlineRedo,
  AiOutlineClose,
  AiOutlineBars,
} from "react-icons/ai";
import "./todoMain.css";

const Task = ({ task, index, handleRemoveTask, handleCompleteTask }) => {
  return (
    <>
      <span className="icon has-text-info">
        <AiOutlineClose
          size={24}
          onClick={() => handleRemoveTask(index)}
          style={{ cursor: "pointer", color: "red" }}
        />
      </span>
      <span className="icon has-text-info">
        {task.complete ? (
          <AiOutlineRedo
            size={24}
            style={{
              cursor: "pointer",
              color: task.complete ? "green" : "",
            }}
            onClick={() => handleCompleteTask(index)}
          />
        ) : (
          <AiOutlineCheck
            size={24}
            style={{ cursor: "pointer", color: task.complete ? "" : "blue" }}
            onClick={() => handleCompleteTask(index)}
          />
        )}
      </span>
      <span
        style={{
          textDecoration: task.complete ? "line-through" : "none",
          paddingLeft: "8px",
          textTransform: "uppercase",
        }}
      >
        {task.description}
      </span>
      <span className="icon has-text-info bars-right">
        <AiOutlineBars
          size={24}
          style={{ color: "black", marginRight: "1rem" }}
        />
      </span>
    </>
  );
};

export default Task;
