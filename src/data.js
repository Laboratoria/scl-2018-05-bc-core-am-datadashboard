//BOTÓN 1
const studentList = document.getElementById('names');
const container = document.getElementById('studentListBox');
const container2 = document.getElementById('readings');
const container3 = document.getElementById('quizzes');
const container4 = document.getElementById('challenges');
const container5 = document.getElementById('time');
const container6 = document.getElementById('progress');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
//esto nunca cambia
.then(response => response.json())
.then(data => {
  console.log(data);
  //esta es la función que llamamos
  renderUsers(data);
})

//función
const renderUsers = data => {
  studentList.addEventListener('click', () => {
    //element representa cada uno de los elementos del arreglo
    const render = data.forEach(element => {
      //para imprimir todos los nombres dentro del container (root) de html, uno tras otro
     container.innerHTML += `<p>${element.name}</p>`;
     container2.innerHTML += `<p>${element.role}</p>`;
     container3.innerHTML += `<p>${element.role}</p>`;
     container4.innerHTML += `<p>${element.role}</p>`;
     container5.innerHTML += `<p>${element.role}</p>`;
     container6.innerHTML += `<p>${element.role}</p>`;


    
    })
    return render;
  });
}







//PARA CREAR FUNCIÓN GLOBAL
window.computeUsersStats = (users, progress, courses) => {



};


window.sortUsers = (users, orderBy, ordedDirection) => {
};


window.filterUsers = (users, filterBy) => {

};

window.processCohortData = () => {

};

/////CREAR FUNCIÓN PARA LOGIN (CON CONDICIONAL + ALERT() )


