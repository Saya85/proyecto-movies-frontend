import React from "react";
import { Link, useParams } from "react-router-dom";




const Alquileres = () => {
    const alquileres = [
        {nombre:'Accident', fecha:'21/12/2022'}, 
        {nombre:'King and I', fecha:'21/8/2022'},
        {nombre:'Green slime', fecha:'20/12/2022'}
    ]
    return (
        <div>
            
                <h2>tus alquileres</h2>
                <ul>
                    {alquileres.map(alquiler => (
                        <li className="d-flex align-items-center mb-6">
                        <p className="col-6" >{alquiler.nombre}</p>    
                        <p className='col-6'>{alquiler.fecha}</p>
                        </li>
                    ))}
                </ul>
           
        </div>
    )
}

export default Alquileres