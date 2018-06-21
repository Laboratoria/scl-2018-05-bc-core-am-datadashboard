//BOTÓN 1
const studentList = document.getElementById('names');
const container = document.getElementById('studentListBox');
const container2 = document.getElementById('readings');
const container3 = document.getElementById('quizzes');
const container4 = document.getElementById('challenges');
const container5 = document.getElementById('time');
const container6 = document.getElementById('progress');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';


fetch(progressJSON)
.then(response => response.json())
.then(progressJSON => {
  progress = progressJSON;
  console.log(progress);
})

const progress = Object.entries(obj).map((value)=>(value));

console.log(progress);

//función
const renderProgress = data => {
  studentList.addEventListener('click', () => {
    //element representa cada uno de los elementos del arreglo
    const render = data.forEach(element => {
      //para imprimir todos los nombres dentro del container (root) de html, uno tras otro
     container.innerHTML += `<p>${element.name}</p>`;
     container2.innerHTML += `<p>${element.id}</p>`;
     container3.innerHTML += `<p>${element.end}</p>`;
     container4.innerHTML += `<p>${element.role}</p>`;
     container5.innerHTML += `<p>${element.role}</p>`;
     container6.innerHTML += `<p>${element.role}</p>`;


    
    })
    return render;
  });
}
