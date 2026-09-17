import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Resultat from'./components/Resultat';
export default function User(){


        const [buscador,setValor] = useState({
            id:0
        }) ;

      

        function handleChange(e)
        {
            const[name,value] = e.target;
            setValor((prev)=>({...prev,[name]:value}));
        }

        return (

            <div>
                <div>
                  <label>Identificador usuari:</label>
                  <input type='number' onChange={handleChange} />
                </div>
                <Resultat id={buscador.id}/>
            </div>
        );
}