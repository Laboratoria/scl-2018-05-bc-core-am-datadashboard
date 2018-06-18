//Declaracion de botones y funciones de llamado
const btnHome = document.getElementById('btnHome');
const seccionHome =document.getElementById('home');

const btnAlumna = document.getElementById('btnAlumnas');
const seccionAlumna =document.getElementById('alumnas');

const btnCursos = document.getElementById('btnCursos');
const seccionCursos =document.getElementById('cursos');

btnAlumna.addEventListener('click', function(event){
  event.preventDefault();
 // seccionAlumna.innerHTML=href='#alumnas';
 return seccionAlumna.style.display='none';
});

btnCursos.addEventListener('click', function(event){
  event.preventDefault();
 return seccionAlumna.style.display='block';
});

//Haciendo conexion a JSON
const btn = document.getElementById('conect');
const container = document.getElementById('root');
const usersJSON='../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
.then(response => response.json())
.then(data =>{
	console.log(data);
	renderUsers(data);
})

const renderUsers = data =>{ //for in si fuera un arreglo de objetos
	btn.addEventListener('click',()=>{
		const render = data.forEach(element =>{
			//element.name === arrelo[i].name
			return container.innerHTML += `<p>${element.name}</p>`
		})
	return render;
	});
}
