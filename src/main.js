window.onload = (()=>{
//Declaracion de botones y funciones de llamado
const btnHome = document.getElementById('btnHome');
const seccionHome =document.getElementById('home');

const btnAlumna = document.getElementById('btnAlumnas');
const seccionAlumna =document.getElementById('alumnas');

const btnCohorts = document.getElementById('btnCohorts');
const seccionCursos =document.getElementById('cohorts');

btnAlumna.addEventListener('click', function(event){
  event.preventDefault();
 // seccionAlumna.innerHTML=href='#alumnas';
 return seccionAlumna.style.display='none';
});

btnCohorts.addEventListener('click', function(event){
  event.preventDefault();
 return seccionAlumna.style.display='block';
});
});
//Haciendo conexion a JSON
const btn = document.getElementById('conect');
const container = document.getElementById('root');

fetch('../data/cohorts.json')
.then(response => response.json())
.then(data =>{
	console.log(data);
	renderUsers(data);
})

const renderUsers = data =>{ //for in si fuera un arreglo de objetos
	btn.addEventListener('click',()=>{
		const render = data.forEach(element =>{
			//element.name === arrelo[i].name
			return container.innerHTML += `<p>${element.id}</p>`
		})
	return render;
	});
}
