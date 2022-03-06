import React from "react";
import { Link, Navigate } from "react-router-dom";
import AuthService from "../../services/auth";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name:"", password: "", confPassword: "", email: "", submitDone: false, passwordMatch: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        try { 
            if(this.state.confPassword != this.state.password) return(
                this.setState({passwordMatch: true})
            )
              console.log('registrado');
              console.log(this.state.name, this.state.email, this.state.password);
        AuthService.register(
            this.state.name,this.state.email,this.state.password)
            .then((res)=>{
                if(res){
                    this.setState({submitDone:true})
                }
            })    
        } catch (error) {
        }
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
                            <input className="col-6" name="name" type='text' required value={this.state.name} onChange={this.handleChange} />
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
                {this.state.submitDone && <Navigate to='/movies'/>}

            </div>
        </div>
      )
  }
}

export default Register;
