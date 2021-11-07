function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        { text: action.payload[0], completed: false },
      ];
    }
    case 'DELETE_TODO': {
      return state.filter((s, i) => i !== action.payload[0]);
    }
    default:
      return state;
  }
}

export function anotherReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        { text: action.payload[0], completed: false },
      ];
    }
    default:
      return state;
  }
}

export default todosReducer;
