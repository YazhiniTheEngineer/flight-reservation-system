import './App.css';
import { useState } from 'react';
import LoggedHome from './components/loggedhome/LoggedHome';
import Home from "./components/home/Home";

function App() {

  const [isLogged,setIdLogged]=useState(false);

  return (
    <div className="App">
      
      {isLogged ? <LoggedHome />:<Home />}
    </div>
  );
}

export default App;
