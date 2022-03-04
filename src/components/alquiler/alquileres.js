import React from "react";
import { Link, useParams } from "react-router-dom";




const CitasMascota = () => {
    const citas = [
        { fecha:'21/12/2022'}, 
        { fecha:'21/8/2022'},
        { fecha:'20/12/2022'}
    ]
    const {nombre} = useParams()
    return (
        <div>
            
                <h2>Citas de {nombre}</h2>
                <ul>
                    {citas.map(cita => (
                        <li className="d-flex align-items-center mb-6">
                        <p className='col-3'>{cita.fecha}</p>
                        <Link className="col-3" to='/perfil/modCita'>modificar</Link>
                        <Link className="col-3" to='/perfil/cancelarCita'>cancerlar</Link> 
                         
                        </li>
                    ))}
                </ul>
           
        </div>
    )
}

export default CitasMascota