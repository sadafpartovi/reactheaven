import { useState, useEffect } from "react";
import style from "./todo.module.css";
function App() {
  const [toDoList, setToDoList] = useState([]);
  const [addedItem, setAddedItem] = useState("");
  const [dataToShow, setDataToShow] = useState(toDoList);
  const [isActive, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addedItem) {
      setToDoList([...toDoList, { title: addedItem, status: "todo" }]);
    }
    setAddedItem("");
  };

  const handleToggle = (item) => {
    const copy = [...toDoList];
    const data = copy.find((each) => each.title === item.title);
    data.status = data.status === "todo" ? "done" : "todo";
    setToDoList(copy);
  };

  const handleUp = (item) => {
    const copy = [...toDoList];
    const index = copy.indexOf(item);
    if (index - 1 >= 0) swapItems(copy, index, index - 1);
    setToDoList(copy);
  };

  const handleDown = (item) => {
    const copy = [...toDoList];
    const index = copy.indexOf(item);
    if (index + 1 < copy.length) swapItems(copy, index, index + 1);
    setToDoList(copy);
  };

  const swapItems = (list, index1, index2) => {
    var b = list[index1];
    list[index1] = list[index2];
    list[index2] = b;
    return list;
  };

  const handleActie = () => {
    const copy = [...toDoList];
    const active = copy.filter((each) => each.status === 'todo');
    setDataToShow(active)
    setActive(prev => !prev)
  }

  const handleCompleted = () => {
    const copy = [...toDoList];
    const completed = copy.filter((each) => each.status === 'done');
    setDataToShow(completed)
    setActive(prev => !prev)
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setAddedItem(e.target.value)}
          placeholder="Add your todo"
          value={addedItem}
        />
        <button>Add Todo</button>
      </form>
      { !isActive &&  toDoList?.map((item, key) => (
        <div key={key}>
          <p
            className={item.status === "done" ? style.cross : ""}
          >{`${key}: ${item.title}`}</p>
          <button onClick={() => handleToggle(item)}>Toggle</button>
          <button onClick={() => handleUp(item)}>^</button>
          <button onClick={() => handleDown(item)}>v</button>
        </div>
      ))}

      {isActive && dataToShow?.map((item, key) => (
        <div key={key}>
        <p
          className={item.status === "done" ? style.cross : ""}
        >{`${key}: ${item.title}`}</p>
        </div>
      ))}

      <button onClick={handleActie}>Active</button>
      <button onClick={handleCompleted}>Completed</button>
    </>
  );
}

export default App;
