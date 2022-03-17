import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar.components';
import ExercisesList from './components/exercise-list.components';
import EditExercise from './components/edit-exercise.components';
import CreateUser from './components/create-user.components';
import CreateExercises from './components/create-exercises.components';

function App() {
    return (
      <Router>
          <div className='container'>
            <Navbar />
            <br />
            
            <Routes>
              <Route path='/' exact element={<ExercisesList />} />
              <Route path='/edit/:id' element={<EditExercise />} />
              <Route path='/create' element={<CreateExercises />} />
              <Route path='/user' element={<CreateUser />} />
            </Routes>
          </div>
      </Router>
    );
}

export default App;
