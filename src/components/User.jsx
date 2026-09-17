import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function User(){
    const {id} = useParams();

    const [usuari,setUsuari] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        axios.get('')
    },[id]
);

    return (
		<div>
            <h2>Dades Usuari</h2>
            <dl>
                <div>
                    <dt>Nom</dt>
                    <dd> </dd>
                </div>
                <div>
                    <dt>Password </dt>
                    <dd>  </dd>

                </div>
                <div>
                    <dt>Correu</dt>
                    <dd>  </dd>

                </div>
                <div>
                    <dt>Missatge</dt>
                    <dd>  </dd>
                </div>
            </dl>
        </div>
);
}