window.onload = (()=>{
//Declaracion de botones del menú del sidebar y secciones a donde mostraran
const btnHome = document.getElementById('btnHome');
const seccionHome =document.getElementById('home');

const btnAlumna = document.getElementById('btnAlumnas');
const seccionAlumna =document.getElementById('datosAlumnas');

const btnCohort = document.getElementById('btnCohorts');
const seccionCohort =document.getElementById('datosCohortsAll');


//funcionalidad botones del menú del sidebar

btnHome.addEventListener('click', function(event){
  event.preventDefault();
	seccionAlumna.style.display='none'
	seccionCohort.style.display='none'
	return seccionHome.style.display='block';
});

btnAlumna.addEventListener('click', function(event){
  event.preventDefault();
	seccionHome.style.display='none'
	seccionCohort.style.display='none'
	return seccionAlumna.style.display='block';
});

btnCohort.addEventListener('click', function(event){
	event.preventDefault();
	seccionAlumna.style.display='none'
	seccionHome.style.display='none';
	return seccionCohort.style.display='block';
}); 

}); //fin de window onload

//Haciendo conexion a JSON Cohorts 
/**
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

//Boton buscador de alumna por nombre

const btnSearch=document.getElementById('btnBuscar');

fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
.then(response => response.json())
.then(data =>{
	console.log(data);
	renderUsers(data);
})

const renderUsers = data =>{ //for in si fuera un arreglo de objetos

//si el usuario elige de una lista el nombre
	lista.addEventListener('click',()=>{
		const render = data.forEach(element =>{
			let option = document.createElement("option");
			option.text=element.name;
			return lista.add(option);
		})
	return render;
	});

//si el usuario ingresa en el buscador el nombre
	btnSearch.addEventListener('click',function(event){
		event.preventDefault();
		const search = document.getElementById('buscarAlumna').value;
		const nombreA = document.getElementById('nombre');
		search.value=' ';
		let alumna = buscarAlumna(search,data);
		//console.log('esto'+alumna);
		return nombreA.innerHTML = '<h2>'+alumna+'</h2>';
	});

} //fin de renderUser

const buscarAlumna = (busca , bdd ) => {
	let result='';
	const find = bdd.forEach(element =>{
		if(busca === element.name){
			result += element.name;
		}else{
			result='La alumna no se encuentra en la base de datos';
		}
	})
	return result;
	
};

//seccion de cohorts
 */