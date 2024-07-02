import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBox from "./components/NewsBox";

function App(){
  const[category, setCategory] = useState('general')
  return <div>
    <Navbar setCategory={setCategory}/>
    <NewsBox category={category}/>
  </div>
}

export default App;