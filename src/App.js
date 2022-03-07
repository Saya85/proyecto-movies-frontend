import './App.css';
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import LayoutAdmin from './components/layout/layout-admin';
import Home from './components/home';
import Login from './components/users/login';
import LoginAdmin from './components/admin/login-admin';
import Logout from './components/users/logout';
import Movies from './components/movies/movies';
import Register from './components/users/register';
import RegisterAdmin from './components/admin/register-admin';
import Alquileres from './components/alquiler/alquileres';
import AlquileresAdmin from './components/admin/all-alquileres';
import Alquiler from './components/alquiler/alquiler';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Paths Principales */}
        <Route path='/' element={<Layout />}>
          <Route path='' element= {<Home/>}/>
           <Route path='/login' element={<Login />} /> 
           <Route path='/logout' element={<Logout />} /> 
           <Route path='/register' element={<Register />} /> 
           <Route path='/movies' element={<Movies/>}/>
           <Route path='/alquiler/:id' element={<Alquiler/>}/>
           <Route path='/alquileres' element={<Alquileres/>}/>
        </Route>
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route path='' element= {<Home/>}/>
           <Route path='login' element={<LoginAdmin />} /> 
           <Route path='register' element={<RegisterAdmin />} /> 
           <Route path='alquileres' element={<AlquileresAdmin />}/>
        </Route>
      </Routes>
      

    </div>
  );
}

export default App;