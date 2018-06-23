const userJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/users.json"
const progressJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/progress.json"
const cohortJson = "http://127.0.0.1:8887/data/cohorts.json"

window.data = {//variable declarada como un objeto con 2 prop. loadin y contex q es un objeto
  loading: 3,//se tienen q cumplir las 3 promesas fetch, a medida q una se cumpla se le restará 1
  context: {
    cohorts: null,
    users: null,
    progresses: null,
    cohortDatas: null //arr de la f(computeUsersStats), tendré el listado de usuarios
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
    window.data.context.cohortDatas = window.calculateCohortDatas(//
      window.data.context.users,
      window.data.context.progresses,
      window.data.context.cohorts
    );
    loadComplete(window.data.context);
  };
};//hacer un enganche antes de llamar a la promesa


//Obtener todos los usuarios que tienen un cohort
window.getCohortUsers = (users, cohort) => {
  var result = [];

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

//Le pasaré el arr q acabo de obtener...

window.computeUsersStats = (users, progresses, courses) => {//Las llaves de los cursos se obtienen de la prop coursesIndex
  var result = [];

  if (users && progresses && courses) {//Validación
    for (var i = 0; i < users.length; i++) {
      var user = users[i];//cada usuario
    var progress = progresses[user.id];//por cada usuario saco su progreso, indexo en [] el id del usuario en la var progreso.

      user.stats = {//creo la prop. stats en usuarios con valores por defecto...
        percent: 0,
        exercises: { total: 0, completed: 0, percent: 0 },
        reads: { total: 0, completed: 0, percent: 0 },
        quizzes: { total: 0, completed: 0, percent: 0, scoreSum: 0, scoreAvg: 0 },
      };
      if (progress) {//validación, si no está dará los valores por defecto q le di
        for (var j = 0; j < courses.length; j++) {//recorro los cursos que me dieron por parámetro
          var key = courses[j];
          var course = progress[key];//busco en el progreso q estoy tal curso...

          if (course) {//validacion, y declaro vars q me serivrán para rellenar las stats
            var totalParts = 0;//partes q existen en total en todo el progreso de tal usuario
            var completedParts = 0;//partes q se han completado para este usuario
            var totalReads = 0;//lecturas q ha tenido
            var completedReads = 0;//lecturas terminadas
            var totalExercises = 0;//ejercicios q tiene
            var completedExercises = 0;//ejercicios q ha terminado
            var totalQuizzes = 0;//retos q tiene
            var completedQuizzes = 0;//retos completados
            var scoreQuizzes = 0;//suma de todas las puntuaciones

            for (var unitKey in course.units) {//itero en las llaves de las unidades
              if (Object.prototype.hasOwnProperty.call(course.units, unitKey)) {//valido si la llave pertenece al objeto
                var unit = course.units[unitKey];//saco el valor no la llave...

                totalParts += unit.totalParts;//Todas las partes q existen en total de tal usuario
                completedParts += unit.completedParts;//Tendré todas las unidades completadas de todos los cursos

                for (var partKey in unit.parts) {//itero en las key de las partes
                  if (Object.prototype.hasOwnProperty.call(unit.parts, partKey)) {
                    var part = unit.parts[partKey];//guardo el objeto parts q estoy iterando

                    switch (part.type) {//Parte tiene 3 tipos, read, exercise y quiz. 
                      case "read": {
                        totalReads++;//si hay un read le sumo 1
                        completedReads += part.completed ? part.completed : 0;//validacion, si part tiene la completed, incremento la parte completada. Si no, 0, no suma.
                      }
                        break;
                      case "practice": {//ejercicio, el mismo proceso anterios
                        totalExercises++;
                        completedExercises += part.completed ? part.completed : 0;
                      }
                        break;
                      case "quiz": {
                        totalQuizzes++;
                        completedQuizzes += part.completed ? part.completed : 0;
                        scoreQuizzes += part.score ? part.score : 0;
                      }
                        break;
                    }
                  }
                }
              }
            }
            //actualizacion del dato de los stats utilizando las variables .
            user.stats = {
              percent: totalParts > 0//no se puede dividir por 0
                          ? completedParts / totalParts * 100//formula de %
                          : 0,
              exercises: {
                total: totalExercises,
                completed: completedExercises,
                percent: totalExercises > 0
                            ? completedExercises / totalExercises * 100
                            : 0
              },
              reads: {
                total: totalReads,
                completed: completedReads,
                percent: totalReads > 0
                            ? completedReads / totalReads * 100
                            : 0
              },
              quizzes: {
                total: totalQuizzes,
                completed: completedQuizzes,
                percent: totalQuizzes > 0
                            ? completedQuizzes / totalQuizzes * 100
                            : 0,
                scoreSum: scoreQuizzes,//la suma de todos los score
                scoreAvg: completedQuizzes > 0
                            ? scoreQuizzes / completedQuizzes
                            : 0
              },
            };
          }
        }
      }
      result.push(user);
    }
  }
  return result;
};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};

