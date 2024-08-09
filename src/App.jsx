import { useState } from "react";
import "./App.css";
import { FaPlus, FaSave, FaEdit, FaTrash } from "react-icons/fa";

function App() {
  const [InputData, setInputData] = useState("");
  const [Item, setItem] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const addItem = () => {
    if (InputData.trim() !== "") {
      if (isEditing) {
        const updatedItems = [...Item];
        updatedItems[editingIndex] = InputData;
        setItem(updatedItems);
        setIsEditing(false);
        setEditingIndex(null);
      } else {
        setItem([...Item, InputData]);
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

  const editItem = (index) => {
    setInputData(Item[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>😶‍🌫️</h1>
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
            {isEditing ? <FaSave /> : <FaPlus />}
          </button>
        </div>
        {Item.map((val, index) => (
          <div className="todo-item" key={index}>
            <span>{val}</span>
            <div className="icons">
              <FaTrash
                className="delete-icon"
                onClick={() => deleteItem(index)}
              />
              <FaEdit className="edit-icon" onClick={() => editItem(index)} />
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
