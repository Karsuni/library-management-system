
import './crud.css'
    import React, { useState } from 'react';
    const Crud = () => {
      const [items, setItems] = useState([
        { id: 1, name: 'Jane EYE' },
        { id: 2, name: 'BRAVE NEW WORLD' },
        { id: 3, name: 'EMMA' }
      ]);
    
      const addItem = (name) => {
        const newItem = { id: items.length + 1, name };

        setItems([...items, newItem]);
      };
    
      const itemList = items.map(item => (
        <div key={item.id}>
          {item.name} 
          <button onClick={() => editItem(item.id)}>Edit Book</button>
          <button onClick={() => deleteItem(item.id)}>Delete Book</button>
        </div>
      ));

      const editItem = (id) => {
        const updatedItems = items.map(item => 
          item.id === id ? { ...item, name: prompt('Enter new book:', item.name) } : item
        );
        setItems(updatedItems);
      };
    
      const deleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
      };
    
      return (
        <body>
        <div>
          <br></br>
          <h1>LIST OF BOOKS</h1>
          <br></br>
          <h2>Book Collections</h2>
          {itemList}<br></br>
          <button  onClick={() => addItem(prompt('Enter book name:'))}>Add book</button><br></br>
          <br></br>
        </div>
        </body>
      );
    };

export default Crud
