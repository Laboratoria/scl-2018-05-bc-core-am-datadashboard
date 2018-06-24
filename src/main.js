const container = document.getElementById("root")
const cohortBtn = document.getElementById("cohortBtn");

//creé las variables que utilizaremos como los objetos, aun no tienen valor puesto que aún no se cumple 
//la promesa que nos devolverá el JSON como datos
window.options = {//var para actualizar e ingresar como parametro en processCohortData
  cohort: null,
  cohortData: {
    users: null,
    progress: null
  },
  orderBy: "",
  orderDirection: "desc",
  search: ""
};

window.loadData(data => {//data devuelve el "contexto" de datos que cargué loadComplete; cohort, users, datos
  
  loading.style.display = 'none';
  
});