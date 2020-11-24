import Main from './components/MainComponent';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
    </div>
  );
}
export default App;