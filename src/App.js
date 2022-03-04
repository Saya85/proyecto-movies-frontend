import './App.css';
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './components/home';
import Login from './components/users/login'
import Movies from './components/movies/movies';
import Register from './components/users/register';
import Alquileres from './components/alquiler/alquileres'
import Alquiler from './components/alquiler/alquiler'


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Paths Principales */}
        <Route path='/' element={<Layout />}>
          <Route path='' element= {<Home/>}/>
           <Route path='login' element={<Login />} /> 
           <Route path='register' element={<Register />} /> 
           <Route path='/movies' element={<Movies/>}/>
           <Route path='/alquiler/:id' element={<Alquiler/>}/>
           <Route path='/alquileres' element={<Alquileres/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;