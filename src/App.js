import Main from './components/MainComponent';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navigationbar from "./components/navbar/navbar"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </div>
  );
}
export default App;