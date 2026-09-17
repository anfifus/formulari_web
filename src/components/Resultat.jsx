import {useEffect, useState} from 'react';
import axios from 'axios';

 export default function Resultat({id})
 {
   

        const [usuari,setUsuari] = useState(null);
        const [error,setError] = useState(null);

        useEffect(() => {
            axios.get(`https://formulari-5r2j.onrender.com/usuari/${id}`)
            .then((resposta) =>{
                setUsuari(resposta.data);
                
            })
            .catch((err)=>{
                console.error("Error recuperant l'usuari",err);
                setError("No s'ha pogut trobar l'usuari amb la id corresponent");
            })
        },[id]);

        if(error) return <p style={{color:'red'}}>{error}</p>;
        if(!usuari) return <p>Carregant dades de l'usuari...</p>;
        if(usuari)
        return (
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
            </div>);
}