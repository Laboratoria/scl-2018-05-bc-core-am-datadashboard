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
      return container.innerHTML += `<p>${element.name.toUpperCase()}</p>`;
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


