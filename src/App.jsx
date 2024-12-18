import { useState } from "react";

import "./App.css";
import Hello from "./components/Hello";

function App() {
  const [InputData, setInputData] = useState("");
  const [Item, setItem] = useState([]);
  const [edit, setEdit] = useState(null);

  const addItem = () => {
    if (InputData.trim() !== "") {
      if (Item.includes(InputData.trim())) {
        console.log("Item already exists");
      } else if (edit !== null) {
        const updated = Item.map((val, index) =>
          index === edit ? InputData.trim() : val
        );
        setItem(updated);
        setEdit(null);
      } else {
        setItem([...Item, InputData.trim()]);
      }
      setInputData("");
    } else {
      console.log("Input cannot be empty");
    }
  };

  const deleteItem = (id) => {
    const updatedItem = Item.filter((_, index) => id !== index);
    setItem(updatedItem);
  };
  const editItem = (id) => {
    setInputData(Item[id]);
    setEdit(id);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Todo</h1>
      </header>
      <main className="todo-list">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your task..."
            value={InputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className="add-btn" onClick={addItem}>
            {edit !== null ? "Save" : "+"}
          </button>
        </div>
        {Item.map((val, index) => (
          <div className="todo-item" key={index}>
            <span>{val}</span>
            <div className="icons">
              <button
                className="delete-icon"
                onClick={() => deleteItem(index)}
              >D</button>

              <button
                className="delete-icon"
                onClick={() => editItem(index)}
              >E</button>
              
            </div>
          </div>
        ))}
      </main>
      <footer className="footer">
        <p>©sayy_alameen</p>
      
      </footer>
    </div>
  );
}

export default App;
