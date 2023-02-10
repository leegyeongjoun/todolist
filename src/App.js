import './App.css';
import React,{useCallback, useRef, useState} from 'react'
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:'리액트 기초 알아보기',
      checked:true,
    },
    {
      id:2,
      text:'리액트 기초 알아보기',
      checked:true,
    },
    {
      id:3,
      text:'리액트 기초 알아보기',
      checked:false,
    },
  ])

  //고윳값으로 사용될 id
  // ref를 사용하여 변수 담기

  const nextId = useRef(4);
  const onInsert = useCallback(
    text=> {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
