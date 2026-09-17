import {useState} from 'react';
import Resultat from'./Resultat';

export default function User(){


       
        const [id,setId] = useState("");

        function handleChange(e)
        {
            const valorRebut = e.target.value;
            setId(valorRebut);
        }

        return (

            <div>
                <div>
                  <label>Identificador usuari:</label>
                  <input type='number' value={id} onChange={handleChange} />
                </div>
               
                <Resultat id={Number(id)}/>
            </div>
        );
}