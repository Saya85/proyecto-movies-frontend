import './App.css';
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './components/home';
import Login from './components/users/login'
import Movies from './components/movies/movies';
import Register from './components/users/register';



function App() {
  return (
    <div className="App">
      <Routes>
        {/* Paths Principales */}
        <Route path='/' element={<Layout />}>
          <Route path='' element= {<Home/>}/>
           <Route path='login' element={<Login />} /> 
          {/* <Route path='logout' element={<Logout />} /> */}
           <Route path='register' element={<Register />} /> 
           <Route path='/movies' element={<Movies/>}/>
          {/* Paths Usuarios */}
          {/* <Route path='perfil' element={<Perfil />} /> */}
            {/* <Route path='/logout' element={<Logout />} /> */}
            {/* <Route path='/logoutAll' element={<LogoutAll />} /> */}
            {/* <Route path='/eliminarCuenta' element={<EliminarCuenta />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;