import React from "react";

import { Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import AuthService from "../../services/users"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nombre:"", apellidos:"", password: "", confPassword: "", email: "", submitDone: false, passwordMatch: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    async handleSubmit(e){
      e.preventDefault();
      if(this.state.confPassword != this.state.password) return(
          this.setState({passwordMatch: true})
      )
        console.log('registrado');
        console.log(this.state.nombre, this.state.apellidos, this.state.email, this.state.password);
      

      AuthService.registrar(
        this.state.nombre,
        this.state.apellidos,
        this.state.email,
        this.state.password
        ).then(this.setState({ submitDone:true }))

  }

  render(){
      return(
        <div className="h-80 pb-5 d-flex flex-column align-items-between justify-content-center">
            <div>
                <h2 className="mb-5">Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="container d-flex flex-column align-items-between justify-content-center" >
                        <label className="row m-2">
                            <p className="col-6">Nombre:</p>
                            <input className="col-6" name="nombre" type='text' required value={this.state.nombre} onChange={this.handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">Apellidos:</p>
                            <input className="col-6" name="apellidos" type='text' required value={this.state.apellidos} onChange={this.handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">email:</p>
                            <input className="col-6" name="email" type='email' required value={this.state.email} onChange={this.handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">contraseña:</p>
                            <input className="col-6" name="password" type='password' required value={this.state.password} onChange={this.handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">confirmar contraseña:</p>
                            <input className="col-6" name="confPassword" type='password' required value={this.state.confPassword} onChange={this.handleChange} />
                        </label>
                    </div>
                    <button className="mt-5" type="submit">Acceder</button>
                </form>
                {this.state.passwordMatch && <p className="passwordMatch">Las contraseñas no coinciden.</p>}
              {/*   {this.state.submitDone && <Navigate to='/perfil'/>} */}

            </div>
        </div>
      )
  }

  }


export default Register;    