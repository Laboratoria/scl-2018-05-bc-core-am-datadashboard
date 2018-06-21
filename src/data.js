//BOTÓN 1
const studentList = document.getElementById('names');
const container = document.getElementById('studentListBox');
const containerRole = document.getElementById('roleBox');
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
    //para imprimir todos los nombres dentro del container (root) de html, uno tras otro
      if (element.role === 'student') {  //para que solo imprima las estudiantes
        container.innerHTML += `<p>${element.name}</p>`;
        containerRole.innerHTML += `<p>${element.role}</p>`;
      }
    })
    return render;
  });
}
