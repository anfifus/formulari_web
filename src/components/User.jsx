import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function User(){


        const [buscador,setValor] = useState({
            id:0
        }) ;

        const [usuari,setUsuari] = useState(null);
        const [error,setError] = useState(null);

        useEffect(() => {
            axios.get('https://formulari-5r2j.onrender.com/usuari/{buscador.id}')
            .then((resposta) =>{
                setUsuari(resposta.data);
            })
            .catch((err)=>{
                console.error("Error recuperant l'usuari",err);
                setError("No s'ha pogut trobar l'usuari amb la id corresponent");
            })
        },[handleChange]);

        if(error) return <p style={{color:'red'}}>{error}</p>;
        if(!usuari) return <p>Carregant dades de l'usuari...</p>;

        return (

            <div>
                <form>
                  <label>Identificador usuari</label>
                  <input type='number' onChange={handleChange} />
                </form>
                

                <div>
                <h2>Dades Usuari</h2>
                <dl>
                    <div>
                        <dt>Nom</dt>
                        <dd>{usuari.nom}</dd>
                    </div>
                    <div>
                        <dt>Password </dt>
                        <dd>{usuari.password}</dd>

                    </div>
                    <div>
                        <dt>Correu</dt>
                        <dd>{usuari.email}</dd>

                    </div>
                    <div>
                        <dt>Missatge</dt>
                        <dd>{usuari.missatge}</dd>
                    </div>
                </dl>
            </div>

            </div>
        );
    

    function handleChange(e){
        const[name,value] = e.target;
        setValor((prev)=>({...prev,[name]:value}));
    }


    
}