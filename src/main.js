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
 return seccionAlumna.style.display='inline';
});

