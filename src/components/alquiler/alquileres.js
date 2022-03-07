import { React, useState, useEffect } from 'react';
import { Link,  } from "react-router-dom";
import AlquilarService from "../../services/alquiler-service";



function Alquileres(props) {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            AlquilarService.alquilarlist().then(response => {
                if (response === false) {
                    alert('No se puede mostrar los pedidos');
                } else {
                    console.log(response);
                    setItems(response);
                    setIsLoaded(true)
                }
            }).catch(error => {
                setIsLoaded(false);
            })
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <div>
            <h2>tus alquileres</h2>
            <ul>
            <li className="d-flex align-items-center mb-6">
                    <p className="col-4" >idMovie</p>    
                    <p className='col-4'>calidad</p>
                    <p className='col-4'>fechaDevolucion</p>
                    </li>
            {
            isLoaded && (
                items.map(alquiler => (
                    <li className="d-flex align-items-center mb-6">
                    <p className="col-4" >{alquiler.idMovie}</p>    
                    <p className='col-4'>{alquiler.calidad}</p>
                    <p className='col-4'>{alquiler.fechaDevolucion}</p>
                    </li>
                )))}
            </ul>
        
        </div>
    )
}

export default Alquileres