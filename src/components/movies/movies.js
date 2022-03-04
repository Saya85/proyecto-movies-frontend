import React from "react";
import { Link} from "react-router-dom";

const Movies = () => {
    const movies = [
        {"id":1,"title":"Accident","image":"https://pics.filmaffinity.com/Accidente-134378809-large.jpg"},
        {"id":2,"title":"Easy Money","image":"https://pics.filmaffinity.com/Accidente-134378809-large.jpg"},
        {"id":3,"title":"I Want Candy","image":"https://pics.filmaffinity.com/Accidente-134378809-large.jpg"},
        {"id":4,"title":"Battle Hymn","image":"https://pics.filmaffinity.com/Accidente-134378809-large.jpg"},
        {"id":5,"title":"King and I","image":"https://pics.filmaffinity.com/Accidente-134378809-large.jpg"},
        {"id":6,"title":"Green Slime","image":"https://pics.filmaffinity.com/Accidente-134378809-large.jpg"},
    ]
    
    return (
        <div className="container-fluid vh-100">
            <div className="inner-margin">
                <div className="rounded d-flex justify-content-center">
                     <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                        <ul className="col-12 " >
                            {movies.map(movie => (
                                <li className="d-flex align-items-center justify-content-center flex-column mb-5">
                                    <img src={movie.image}></img>
                                    <Link to={`/alquiler/${movie.id}`} className='col-3'>{movie.title}</Link>       
                                </li>
                            ))}
                        </ul>
                        <Link to='/alquileres'>mirar tus alquileres</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Movies