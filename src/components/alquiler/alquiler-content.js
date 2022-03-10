import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import AlquilerService from "../../services/alquiler-service";

/* class AlquilerContent extends React.Component{
    constructor(props){
        super(props)
        this.state = { calidad: 'HD', fecha: '', submitDone: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
 */
function AlquilerContent(){
    const [submitDone, setSubmitDone] = useState(false);
    const [formData, setFormData]= useState({
        calidad: "HD",
        fecha: ''
    })

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }

   const handleSubmit= (e)=>{
        e.preventDefault();
        const {id} = this.props;
        console.log(id)
        console.log( formData.calidad, formData.fecha)
        try {
            AlquilerService.alquilarPelicula(
                id,formData.calidad,formData.fecha)
                .then((res)=>{
                    if(res){
                        setSubmitDone(true);
                    }
                })    
        } catch (error) {
            console.log(error)
        }
            
    }
        return (
            <div className="container">
                <h2 className="mb-5">Alquileres</h2>
                <h3 className="mb-5">nombre pelicula</h3>
                <form className="w-50 m-auto" onSubmit={handleSubmit}>
                    <div className="container mb-5">
                        <label className="row m-2 d-flex">
                            <p className="col-6">calidad:</p>
                            <select className="col-6" name="calidad" onChange={handleChange} required>
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
                                        <input name="fecha" value='1' required type='radio' onChange={handleChange}/>
                                    </label>
                                </div>
                                <div className="w-100 d-flex align-items-center justify-content-start">
                                    <label className="d-flex align-items-center">
                                        <p className="me-2">2 dias</p>
                                        <input name="fecha" value='2' required type='radio' onChange={handleChange}/>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <button type="submit">alquilar</button>
                </form>         
                {submitDone === true && <Navigate to='/movies'/>}       
            </div>
        )
}

export default AlquilerContent