import {useEffect, useState} from 'react';
import axios from 'axios';

export default function FormulariContacte(){
	const [form, setForm] = useState({
	nom: "",
	email: "",
	missatge: "",
	});
	/*useEffect(()=>{
		axios.post('http://localhost:3000/api/usuari',form)
		.then(response => {alert("Dades enviades");})
		.catch(error => {console.log("Error",error);});
	},[]);*/
	const [errors, setErrors] = useState({});

	const [missatge, setMissatge] = useState('');

	function validate(){
	  const newErrors = {};
	  if(!form.nom.trim()) newErrors.nom = "Requereix d'un nom";
	  if(!form.email.includes("@")) newErrors.email = "Correu invalid";
	  if(form.missatge.trim().length < 10) newErrors.missatge = "Has de posar un missatge de més de 10 caràcters";

	  setErrors(newErrors);
	  return Object.keys(newErrors).length === 0;
	}

	function handleChange(e){
	  const {name, value}  = e.target;
	  setForm((prev) => ( {...prev, [name]: value}));
	}

	function handleSubmit(e){
	  e.preventDefault();
	  if(!validate()){return;}
	  console.log("Submitting",form);
	  axios.post('http://localhost:8080/usuari',form)
		.then(response => {alert("Dades enviades");})
		.catch(error => {console.log("Error",error);});
		
 	  setForm({name:"",email:"",message:""});
	  setErrors({});
	}
	
        

	return (
	  <form onSubmit={handleSubmit}>
		<div>
			<label>Nom</label>
			<input name="nom"  onChange={handleChange} />
			{errors.nom && <div style={{color:"red"}}>{errors.nom}</div>}
		</div>
		<div>
			<label>Correu</label>
			<input name="email"  onChange={handleChange} />
			{errors.email && <div style={{color:"red"}}>{errors.email}</div>}
		</div>
		<div>
			<label>Missatge</label>
			<input name="missatge"  onChange={handleChange} />
			{errors.missatge && <div style={{color:"red"}}>{errors.missatge}</div>}
		</div>

		<button type="submit">Submit</button>
	</form>
);
}