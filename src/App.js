import React from 'react';
import './App.css';
import BodyPartsList from  "./BodyPartsList";
import Home from  "./Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SearchExercise from './SearchExcercise';
import Excercises from './Excercises';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-exercises' element={<SearchExercise />} />
          <Route path='/exercises' element={<Excercises />} />
        </Routes>
      </Router> */}
      <Home/>
    </div>
  );
}

export default App;
