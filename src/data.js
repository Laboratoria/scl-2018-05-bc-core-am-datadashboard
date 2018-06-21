//BOTÓN 1
const studentList = document.getElementById('names');
const container = document.getElementById('studentListBox');
const container2 = document.getElementById('readings');
const container3 = document.getElementById('quizzes');
const container4 = document.getElementById('challenges');
const container5 = document.getElementById('time');
const container6 = document.getElementById('progress');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'

fetch(usersJSON)
//esto nunca cambia
.then(response => response.json())
.then(data => {
  console.log(data);
  //esta es la función que llamamos
  renderUsers(data);
})

fetch(progressJSON)
.then(response => response.json())
.then(progressJSON => {
  progress = progressJSON;
  console.log(progress);
})




//función
const renderUsers = data => {
  studentList.addEventListener('click', () => {
    //element representa cada uno de los elementos del arreglo
    const render = data.forEach(element => {
      //para imprimir todos los nombres dentro del container (root) de html, uno tras otro
     container.innerHTML += `<p>${element.name}</p>`;
     container2.innerHTML += `<p>${element.signupCohort}</p>`;
     container3.innerHTML += `<p>${element.role}</p>`;
     container4.innerHTML += `<p>${element.role}</p>`;
     container5.innerHTML += `<p>${element.role}</p>`;
     container6.innerHTML += `<p>${element.role}</p>`;


    
    })
    return render;
  });
}

const inputText = document.querySelector('input');
const containerStudent = document.getElementById('studentSearch');

inputText.addEventListener('keypress',(event) => {
  let key = event.which || event.keyCode; //which keyCodo son método que saca el código de la tecla
  if (key === 13) { //código 13 es enter
    let nameStudent = inputText.value; //punto value siempre con let
    inputText.value = '';
    const render = data.forEach(element => {
      //para imprimir todos los nombres dentro del container (root) de html, uno tras otro
      return container.innerHTML += `<p>${element.name.toUpperCase()}</p>`;
    })
    return render;
    console.log(nameStudent);
    //URL de api, más el key mandaron por correo:
    fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderInfo(data);

    })
  }
})

const renderInfo = (data) => {
  containerStudent.innerHTML = data.name;
} 













//PARA CREAR FUNCIÓN GLOBAL
window.computeUsersStats = (users, progress, courses) => {

  for (let i = 0; i < users.length; i++) {

  console.log(users.name);

  }
  return users.name;//nuevo arreglo



};


window.sortUsers = (users, orderBy, ordedDirection) => {
};


window.filterUsers = (users, filterBy) => {

};

window.processCohortData = () => {

};

/////CREAR FUNCIÓN PARA LOGIN (CON CONDICIONAL + ALERT() )

let go = () => {
  if (document.form.password.value ==='123' && document.form.login.value ==='Valentina'){ 
          window.open('index.html') 

      } 
      else{ 
           alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
      } 
  } 
