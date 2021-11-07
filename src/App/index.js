import React from 'react';
import { useSelector } from 'react-redux';
import useInjectReducer from '../data/redux/react/useInjectReducer';
import todosReducer from './reducer';
import redux from '../data/redux/redux';

function App() {
  useInjectReducer({ key: 'todo', reducer: todosReducer });

  const [text, setText] = React.useState('');

  const todos = useSelector((state) => {
    return state.todo;
  });

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <input onChange={(e) => setText(e.target.value)}></input>
        <button onClick={() => redux.addTodo(text)}>add todo</button>
      </div>
      <ul>
        {todos?.map((t) => (
          <li key={t.text}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
