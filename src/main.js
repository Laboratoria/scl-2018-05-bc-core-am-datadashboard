window.onload = (()=>{
//Declaracion de botones del menú del sidebar y secciones a donde mostraran
const btnHome = document.getElementById('btnHome');
const seccionHome =document.getElementById('home');

const btnAlumna = document.getElementById('btnAlumnas');
const seccionAlumna =document.getElementById('alumnas');

const btnCohorts = document.getElementById('btnCohorts');
const seccionCursos =document.getElementById('cohorts');


//funcionalidad botones del menú del sidebar
btnAlumna.addEventListener('click', function(event){
  event.preventDefault();
 // seccionAlumna.innerHTML=href='#alumnas';
 return seccionAlumna.style.display='none';
});

btnCohorts.addEventListener('click', function(event){
  event.preventDefault();
 return seccionAlumna.style.display='block';
});

}); //fin de window onload

//Haciendo conexion a JSON Cohorts
const btn = document.getElementById('buscarAlumna');
const container = document.getElementById('root');

fetch('../data/cohorts.json')
.then(response => response.json())
.then(data =>{
	console.log(data);
	renderCohort(data);
})

const renderCohort = data =>{ //for in si fuera un arreglo de objetos
	btn.addEventListener('click',()=>{
		const render = data.forEach(element =>{
			//element.name === arrelo[i].name
			return container.innerHTML += `<p>${element.id}</p>`
		})
	return render;
	});
}


//Haciendo conexion a JSON Users para mostrar el listado de todas las alumnas

const lista = document.getElementById('nombreAlumna');

fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
.then(response => response.json())
.then(data =>{
	console.log(data);
	renderUsers(data);
})

const renderUsers = data =>{ //for in si fuera un arreglo de objetos
	lista.addEventListener('click',()=>{
		const render = data.forEach(element =>{
			let option = document.createElement("option");
			option.text=element.name;
			return lista.add(option);
		})
	return render;
	});
}