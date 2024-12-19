import React from "react";
import styled from "styled-components";
import StyledAddTodo from "./StyledAddTodo";

const StyledBackdrop = styled.div({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: "30",
});

const StyledModalContainer = styled.div(({mode}) => ({
  position: "fixed",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "27rem",
  backgroundColor: `${mode === "light" ? "#ffffff" : "#ffffffdf"}`,
  borderRadius: "0.4rem",
  zIndex: "40",
  padding: "1.2rem",
  boxSizing: "border-box",
  "> div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "> div > span": {
    marginLeft: "auto",
    cursor: "pointer",
    color: "#202020",
  },
  "> div > span:hover": {
    color: "#000000",
  },
}));

const StyledModal = ({ mode, type, isOpen, addTodo, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <StyledBackdrop
        className="modal-backdrop"
        onClick={onClose}
      ></StyledBackdrop>
      <StyledModalContainer mode={mode} className="modal">
        <div className="modal-content">
          <span onClick={onClose} className="material-symbols-outlined">
            close
          </span>
          <StyledAddTodo mode={mode} addTodo={addTodo} type={type} />
        </div>
      </StyledModalContainer>
    </>
  );
};

export default StyledModal;
