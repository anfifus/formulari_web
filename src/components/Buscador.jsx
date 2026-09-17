import {useState} from 'react';
import Resultat from'./Resultat';

export default function User(){


        const [buscador,setValor] = useState({
            id:0
        }) ;

      

        function handleChange(e)
        {
            console.log(e.target.value)
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