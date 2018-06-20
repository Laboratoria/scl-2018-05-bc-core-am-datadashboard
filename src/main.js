const container = document.getElementById("root")
const userJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/users.json"
const progressJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/users.json"
const cohortJson = "http://127.0.0.1:8887/data/cohorts.json"
const cohortBtn = document.getElementById("cohortBtn");

//creé las variables que utilizaremos como los objetos, aun no tienen valor puesto que aún no se cumple 
//la promesa que nos devolverá el JSON como datos
let users = null;
let progress = null;
let cohorts = null;


fetch(cohortJson)
  .then(response => response.json())
  .then(data => {
    cohorts = data;
    stopLoading();
  });

fetch(userJson)
  .then(response => response.json())
  .then(data => {
    users = data;
    stopLoading();
  });

fetch(progressJson)
  .then(response => response.json())
  .then(data => {
    progress = data;
    stopLoading();
  });


const stopLoading = () => { //función que sincroniza el término de cada promesa...
  if (users && progress && cohorts) {//Cuando ya no tienen valor null
    // Termine de cargar

    renderUsers();
  }
};


const renderUsers = () => {
  cohortBtn.addEventListener("click", () =>{
    const render = users.forEach(element => {
      return contentDiv.innerHTML += `<p>${element.name}</p>`  
    })
    return render;
  })

};


