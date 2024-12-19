export const DUMMYCOLORS = ["#1362b6", "#da1212", "#ce9915", "#5aa112"];
const DUMMYDATA = [
  { id: 1, description: "Buy Milk", color: "#1362b6" },
  { id: 2, description: "Clean Dishes", color: "#da1212" },
  { id: 3, description: "Make Dinner", color: "#ce9915" },
];

export const initialTodoListState = {
  lastElementId: DUMMYDATA.length,
  backlogTodos: DUMMYDATA,
  inProgressTodos: [],
  doneTodos: [],
};

export const TodoListReducer = (state, action) => {
  switch (action.type) {
    case "ADD/Backlog":
      return {
        ...state,
        lastElementId: (state.lastElementId += 1),
        backlogTodos: [...state.backlogTodos, action.payload],
      };
    case "ADD/InProgress":
      return {
        ...state,
        lastElementId: (state.lastElementId += 1),
        inProgressTodos: [...state.inProgressTodos, action.payload],
      };
    case "ADD/Done":
      return {
        ...state,
        lastElementId: (state.lastElementId += 1),
        doneTodos: [...state.doneTodos, action.payload],
      };
    case "MOVE/InProgress":
      return {
        ...state,
        backlogTodos: state.backlogTodos.filter(
          (todo) => todo.id !== action.payload.id
        ),
        inProgressTodos: [...state.inProgressTodos, action.payload],
      };
    case "MOVE/Done":
      return {
        ...state,
        inProgressTodos: state.inProgressTodos.filter(
          (todo) => todo.id !== action.payload.id
        ),
        doneTodos: [...state.doneTodos, action.payload],
      };
    case "MOVE/Backlog":
      return {
        ...state,
        doneTodos: state.doneTodos.filter(
          (todo) => todo.id !== action.payload.id
        ),
        backlogTodos: [...state.backlogTodos, action.payload],
      };
    case "DELETE/Todo":
      return {
        ...state,
        doneTodos: state.doneTodos.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw Error("Incorrect Action Type Provided");
  }
};
