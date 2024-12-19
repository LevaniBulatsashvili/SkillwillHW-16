import React, { useRef } from "react";
import styled from "styled-components";

const StyledForm = styled.form(({ mode }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  color: "#000000",
  "> div": {
    "> input": {
      fontSize: "1.2rem",
      padding: "0.1rem 0.2rem",
    },
    "> button": {
      fontSize: "1.1rem",
      cursor: "pointer",
      padding: "0.2em",
      ":hover": {},
    },
  },
}));

const StyledAddTodo = ({ mode, type, addTodo }) => {
  const inputRef = useRef(null);
  const onTodoSubmit = (e) => {
    e.preventDefault();

    if (type === "Backlog") addTodo("ADD/Backlog", inputRef.current?.value);
    if (type === "Ongoing") addTodo("ADD/InProgress", inputRef.current?.value);
    if (type === "Done") addTodo("ADD/Done", inputRef.current?.value);

    inputRef.current.value = "";
  };
  return (
    <StyledForm mode={mode} onSubmit={onTodoSubmit}>
      <h1>Add {type} Todo</h1>
      <div>
        <input ref={inputRef} defaultValue="" />
        <button type="submit">Submit</button>
      </div>
    </StyledForm>
  );
};

export default React.memo(StyledAddTodo);
