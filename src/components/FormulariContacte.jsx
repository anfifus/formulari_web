import {useEffect, useState} from 'react';
import axios from 'axios';

export default function FormulariContacte(){
	const [form, setForm] = useState({
	nom: "",
	password: "",
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
	  if(!form.password.trim()) newErrors.password = "Requereix d'un password";
	  else if(form.password.trim().length < 10) newErrors.password = "La longitud ha de ser major a 10 caràcters";
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
		
 	  setForm({name:"",password:"",email:"",message:""});
	  setErrors({});
	}
	
        

	return (
	  <form onSubmit={handleSubmit}>
		<div>
			<label>Nom</label>
			<input name="nom"  onChange={handleChange} />
			{errors.nom && <span style={{color:"red"}}>{errors.nom}</span>}
		</div>
        <div>
        	<label> Password </label>
        	<input name="password" type="password" onChange={handleChange} />
        	{errors.password && <span style={{color:"red"}}>{errors.password}</span>}
 		</div>
		<div>
			<label>Correu</label>
			<input name="email"  onChange={handleChange} />
			{errors.email && <span style={{color:"red"}}>{errors.email}</span>}
		</div>
		<div>
			<label>Missatge</label>
			<input name="missatge"  onChange={handleChange} />
			{errors.missatge && <span style={{color:"red"}}>{errors.missatge}</span>}
		</div>

		<button type="submit">Submit</button>
	</form>
);
}