import {useState} from 'react';
import Resultat from'./Resultat';

export default function User(){


        const [buscador,setValor] = useState({
            id:0
        }) ;
        const [id,setId] = useState("");
      

        function handleChange(e)
        {
            const[name,value] = e.target;
            setValor((prev)=>({...prev,[name]:value}));
        }

        function handleChange(e)
        {
            const valorRebut = e.target.value;
            setId(valorRebut);
        }

        return (

            <div>
                <div>
                  <label>Identificador usuari:</label>
                  <input type='number' value={buscador.id} onChange={handleChange} />
                </div>
                <Resultat id={buscador.id}/>
            </div>
        );
}