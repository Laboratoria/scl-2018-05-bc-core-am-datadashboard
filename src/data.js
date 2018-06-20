//BOTÓN 1
const studentList = document.getElementById('names');
const container = document.getElementById('studentListBox');
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
      return container.innerHTML += `<p>${element.name}</p>`;
    })
    return render;
  });
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


