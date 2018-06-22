const container = document.getElementById("root")
const cohortBtn = document.getElementById("cohortBtn");

//creé las variables que utilizaremos como los objetos, aun no tienen valor puesto que aún no se cumple 
//la promesa que nos devolverá el JSON como datos
window.loadData(data => {//data devuelve el "contexto" de datos; cohort, users, datos
  
  loading.style.display = 'none';
  
});