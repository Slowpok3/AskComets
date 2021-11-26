import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Display from './components/display';
import Card from './components/card';
import QuestionDisplay from './components/questionDisplay';





function App() {
  return (
   
    <div className="App">
   <Router>
      <Routes>
        <Route 
          path = "/"
          element = {<Display />}
          />
        <Route 
          path = "/Question/:id"
          element = {<QuestionDisplay />}
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
