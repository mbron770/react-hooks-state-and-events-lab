import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from 'react'

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [isLightMode, setIsLightMode] = useState(true)
  
  

  function toggleFx(){
    setIsLightMode(!isLightMode)
  }
  
  return (
    <div className={isLightMode ? 'App light' : 'App dark'}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {toggleFx}>Dark Mode</button>
      </header> 
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
