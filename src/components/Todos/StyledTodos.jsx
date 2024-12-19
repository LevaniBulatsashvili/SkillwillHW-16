import React from "react";
import styled from "styled-components";
import StyledTodoCard from "./StyledTodoCard";

const StyledTodosContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "0.5rem",
}));

const StyledTodoCardContainer = styled.div(({ mode }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: `${mode === "light" ? "white" : "#b4b4b4"}`,
  padding: "1.5rem",
  borderRadius: "5%",
  minWidth: "20rem",
  minHeight: "16rem",
}));

const StyledTodoTitle = styled.h3(({ mode, borderColor }) => ({
  position: "relative",
  color: `${mode === "light" ? "#333333f3" : "#ffffffca"}`,
  paddingBottom: "1rem",
  fontWeight: "400",
  borderBottom: `2px solid ${borderColor}`,
}));

const StyledModalBtn = styled.div(({mode}) => ({
  margin: "auto auto 0 0",
  "> button": {
    cursor: "pointer",
    color: `${mode === "light" ? "grey" : "black"}`,
    background: "none",
    border: "none",
    marginTop: "1rem",
  },
  "> button:hover": {
    color: `${mode === "light" ? "#ffffffca" : "grey"}`,
  },
}));

function StyledTodos({
  mode,
  backlogTodos,
  inProgressTodos,
  doneTodos,
  moveToInProgress,
  moveToDone,
  moveToBacklog,
  deleteTodo,
  openModal,
  setModalType,
}) {
  const openBacklogModal = () => {
    openModal();
    setModalType("Backlog");
  };

  const openInProgressModal = () => {
    openModal();
    setModalType("Ongoing");
  };

  const openDoneModal = () => {
    openModal();
    setModalType("Done");
  };

  return (
    <StyledTodosContainer>
      <StyledTodoCardContainer mode={mode}>
        <StyledTodoTitle mode={mode} borderColor="#b01919b4">
          Backlog<span>: {backlogTodos.length}</span>
        </StyledTodoTitle>
        {backlogTodos.map((todo) => (
          <StyledTodoCard
            key={todo.id}
            mode={mode}
            todo={todo}
            onTodoClick={moveToInProgress}
          />
        ))}
        <StyledModalBtn>
          <button
            onClick={openBacklogModal}
            className="material-symbols-outlined"
          >
            add
          </button>
        </StyledModalBtn>
      </StyledTodoCardContainer>
      <StyledTodoCardContainer mode={mode}>
        <StyledTodoTitle mode={mode} borderColor="#b08f19ab">
          In Progress<span>: {inProgressTodos.length}</span>
        </StyledTodoTitle>
        {inProgressTodos.map((todo) => (
          <StyledTodoCard
            key={todo.id}
            mode={mode}
            todo={todo}
            onTodoClick={moveToDone}
          />
        ))}
        <StyledModalBtn>
          <button
            onClick={openInProgressModal}
            className="material-symbols-outlined"
          >
            add
          </button>
        </StyledModalBtn>
      </StyledTodoCardContainer>
      <StyledTodoCardContainer mode={mode}>
        <StyledTodoTitle mode={mode} borderColor="#2a8518b1">
          Done<span>: {doneTodos.length}</span>
        </StyledTodoTitle>
        {doneTodos.map((todo) => (
          <StyledTodoCard
            key={todo.id}
            mode={mode}
            todo={todo}
            onTodoClick={moveToBacklog}
            onTodoDelete={deleteTodo}
          />
        ))}
        <StyledModalBtn>
          <button onClick={openDoneModal} className="material-symbols-outlined">
            add
          </button>
        </StyledModalBtn>
      </StyledTodoCardContainer>
    </StyledTodosContainer>
  );
}

export default React.memo(StyledTodos);
