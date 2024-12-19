import React, { useReducer, useState } from "react";
import {
  initialTodoListState,
  TodoListReducer,
  DUMMYCOLORS,
} from "../reducers/TodoListReducer";
import styled from "styled-components";
import useDetectDevice from "../hooks/useDetectDevice";
import useLocalStorage from "../hooks/useLocalStorage";
import StyledTodos from "./Todos/StyledTodos";
import StyledModal from "./StyledModal";

const Container = styled.div(({ mode }) => ({
  backgroundColor: `${mode === "light" ? "#ebebeb5e" : "#8d8c8cd4"}`,
  fontFamily: "Helvetica, sans-serif",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  justifyContent: "flex-start",
  alignItems: "center",
  border: "1px solid black",
  width: "80%",
  minHeight: "90vh",
  padding: "1rem",
  margin: "1rem auto",
}));

const StyledToggleModeBtn = styled.button(() => ({
  cursor: "pointer",
  fontSize: "1.2rem",
  padding: "0.5rem",
}));

const StyledTodoList = () => {
  const [state, dispatch] = useReducer(TodoListReducer, initialTodoListState);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("Backlog");
  const { lastElementId, backlogTodos, inProgressTodos, doneTodos } = state;
  const device = useDetectDevice();
  const [mode, setMode] = useLocalStorage("mode", "light");

  const addTodo = (todoType, inputValue) => {
    const newTodo = {
      id: lastElementId + 1,
      description: inputValue,
      color: DUMMYCOLORS[Math.floor(Math.random() * 4)],
    };
    dispatch({ type: todoType, payload: newTodo });
  };

  const moveToInProgress = (todo) => {
    dispatch({ type: "MOVE/InProgress", payload: todo });
  };

  const moveToDone = (todo) => {
    dispatch({ type: "MOVE/Done", payload: todo });
  };

  const moveToBacklog = (todo) => {
    dispatch({ type: "MOVE/Backlog", payload: todo });
  };

  const deleteTodo = (id) => dispatch({ type: "DELETE/Todo", payload: id });

  return (
    <Container mode={mode}>
      <StyledModal
        mode={mode}
        type={modalType}
        isOpen={openModal}
        addTodo={addTodo}
        onClose={() => setOpenModal(false)}
      />
      {device === "Desktop" && (
        <StyledToggleModeBtn
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          Toggle Theme
        </StyledToggleModeBtn>
      )}

      <StyledTodos
        mode={mode}
        backlogTodos={backlogTodos}
        inProgressTodos={inProgressTodos}
        doneTodos={doneTodos}
        moveToInProgress={moveToInProgress}
        moveToDone={moveToDone}
        moveToBacklog={moveToBacklog}
        deleteTodo={deleteTodo}
        openModal={() => setOpenModal(true)}
        setModalType={(type) => setModalType(type)}
      />
    </Container>
  );
};

export default StyledTodoList;
