import React from "react";
import Item from "./Item";
import {useState} from 'react'

function ShoppingList({ items }) {

  const [searchBy, setSearchBy] = useState('All')

  function handleSearch(e){
    setSearchBy(e.target.value)
  }

 const filteredItems = items.filter(items => searchBy === 'All' || items.category === searchBy)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange = {handleSearch} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
