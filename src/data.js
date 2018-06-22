const userJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/users.json"
const progressJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/progress.json"
const cohortJson = "http://127.0.0.1:8887/data/cohorts.json"

window.data = {//variable declarada como un objeto con 2 prop. loadin y contex q es un objeto
  loading: 3,//se tienen q cumplir las 3 promesas fetch, a medida q una se cumpla se le restará 1
  context: {
    cohorts: null,
    users: null,
    progresses: null,
  }
};

window.loadData = (loadComplete) => {//metodo loadData q recibe una función y ejecuta los 3 fetch
  fetch(cohortJson)
    .then(response => response.json())
    .then(data => {
      window.data.context.cohorts = data;//le asigno el valor de data a cohort
      window.data.loading--;//cada vez q se cumple un fetch le disminuye uno a la var loading q está dentro de data, dentro de windows

      if (window.data.loading == 0) completePromise(loadComplete);//ya finalizaron y llama a loadComplete
    });

  fetch(userJson)
    .then(response => response.json())
    .then(data => {
      window.data.context.users = data;
      window.data.loading--;

      if (window.data.loading == 0) completePromise(loadComplete);
    });

  fetch(progressJson)
    .then(response => response.json())
    .then(data => {
      window.data.context.progresses = data;
      window.data.loading--;

      if (window.data.loading == 0) completePromise(loadComplete);
    });

  var completePromise = (loadComplete) => {
      (window.data.context.users,
      window.data.context.progresses,
      window.data.context.cohorts
    );
    loadComplete(window.data.context);
  };
};

window.getCohortUsers = (users, cohort) => {//seleccion de usuarios por cohort
  var result = []; //Arr con el key que conecta user con cohort

  if (cohort && cohort.id && users) {//validación
    for (var i = 0; i < users.length; i++) {
      var user = users[i];

      if (user.signupCohort == cohort.id) {
        result.push(user);//como el usuario pertenece al cohort lo agrego al []
      }
    }
  }
  return result;
};

window.getCohortCourseKeys = (cohort) => {//funcion q saca todas las llaves en forma de un arreglo
  var result = [];

  if (cohort && cohort.coursesIndex) {//validacion del objeto y su propiedad
    for (var key in cohort.coursesIndex) {
      if (Object.prototype.hasOwnProperty.call(cohort.coursesIndex, key)) {//call(objeto<---llave)
        result.push(key);//guardo la llave en el arreglo
      }
    }
  }
  return result;
};



window.computeUsersStats = (users, progresses, courses) => {//Las llaves de los cursos se obtienen de la prop coursesIndex
  var result = [];

  if (users && progresses && courses) {//Validación
    for (var i = 0; i < users.length; i++) {
      var user = users[i];//cada usuario
      var progress = progresses[user.id];//por cada usuario saco su progreso, indexo en [] el id del usuario en la var progreso.

      user.stats = {//creo la prop. stats en usuarios  
        percent: 0,
        exercises: { total: 0, completed: 0, percent: 0 },
        reads: { total: 0, completed: 0, percent: 0 },
        quizzes: { total: 0, completed: 0, percent: 0, scoreSum: 0, scoreAvg: 0 },
      };
    };
  };  
};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};

