import React from 'react';
import {useParams} from 'react-router-dom';

import AlquilerContent from './alquiler-content';

function Alquiler() {

    const { id } = useParams();

    return (
        <div>
            <AlquilerContent id={id} />
        </div>
    )
    
}

export default Alquiler;