import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState(["react를 배워봅시다"]);
  const obSubmutHandler = (e) => {
    e.preventDefault();
    setTodo([...todo, value]);
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="layout">
      <div className="inputcontainer">
        <form onSubmit={obSubmutHandler}>
          <input
            type="text"
            {...value}
            onChange={onChangeInput}
            className="todolistinput"
          />
          <button type="submit">추가하기</button>
        </form>
      </div>
      <div className="titleContainer">
        <h1 className="title">Todo List</h1>
      </div>
      <div className="todolistContainer">
        {todo &&
          todo.map((e, i) => (
            <div className="todoItemContainer" key={e + i}>
              <span>{e}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
