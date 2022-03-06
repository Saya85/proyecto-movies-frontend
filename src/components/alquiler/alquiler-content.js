import React from "react";
import { Link, Navigate } from "react-router-dom";

import AlquilerService from "../../services/alquiler-service";



class AlquilerContent extends React.Component{
    constructor(props){
        super(props)
        this.state = { calidad: 'HD', fecha: '', submitDone: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const {id} = this.props;
        console.log(id)
        console.log( this.state.calidad, this.state.fecha)
        try {
            AlquilerService.alquilarPelicula(
                id,this.state.calidad,this.state.fecha)
                .then((res)=>{
                    if(res){
                        this.setState({submitDone:true})
                    }
                })    
        } catch (error) {
            console.log(error)
        }
            
    }

    render() {
        return (
            <div className="container">
                <h2 className="mb-5">Alquileres</h2>
                <h3 className="mb-5">nombre pelicula</h3>
                <form className="w-50 m-auto" onSubmit={this.handleSubmit}>
                    <div className="container mb-5">
                        <label className="row m-2 d-flex">
                            <p className="col-6">calidad:</p>
                            <select className="col-6" name="calidad" onChange={this.handleChange} required>
                                <option value='HD'>HD</option>
                                <option value='Full-HD' >Full-HD</option>
                                <option value='4K'>4k</option>
                            </select>
                        </label>
                        <label className="row m-2">
                            <p className="col-6 align-self-center">fecha:</p>
                            <div className="col-6 p-0 d-flex flex-column align-items-center">
                                <div className="w-100 d-flex align-items-center justify-content-start">
                                    <label className="d-flex align-items-center">
                                        <p className="me-3">1 dia</p>
                                        <input name="fecha" value='1' required type='radio' onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div className="w-100 d-flex align-items-center justify-content-start">
                                    <label className="d-flex align-items-center">
                                        <p className="me-2">2 dias</p>
                                        <input name="fecha" value='2' required type='radio' onChange={this.handleChange}/>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <button type="submit">alquilar</button>
                </form>         
                {this.state.submitDone === true && <Navigate to='/movies'/>}       
            </div>
        )
    }
}


export default AlquilerContent