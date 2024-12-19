import React from "react";
import styled from "styled-components";

const Container = styled.div(({ mode, borderColor }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "1rem",
  padding: "1rem",
  border: `1px solid ${borderColor}`,
  borderLeft: `4px solid ${borderColor}`,
  borderRadius: "5px",
  "> p": {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: `${mode === "light" ? "#1f1f1fd9" : "#ffffffce"}`,
    overflowWrap: "break-word",
    inlineSize: "11rem",
  },
  "> div > button": {
    cursor: "pointer",
    marginLeft: "0.5rem",
    background: "none",
    border: "none",
    ":hover": {
      color: "#383333",
    },
  },
}));

const StyledDeleteButton = styled.button({
  color: "#ff0000dc",
  ":hover": {
    color: "#ff0000",
  },
});

const StyledTodoCard = ({ mode, todo, onTodoClick, onTodoDelete }) => {
  return (
    <Container mode={mode} borderColor={todo.color}>
      <p>{todo.description}</p>
      <div>
        <button onClick={() => onTodoClick(todo)}>
          <span className="material-symbols-outlined">
            {onTodoDelete ? "refresh" : "arrow_forward_ios"}
          </span>
        </button>
        {onTodoDelete && (
          <StyledDeleteButton onClick={() => onTodoDelete(todo.id)}>
            <span className="material-symbols-outlined">close</span>
          </StyledDeleteButton>
        )}
      </div>
    </Container>
  );
};

export default React.memo(StyledTodoCard);
