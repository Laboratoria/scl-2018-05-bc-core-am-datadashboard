const userJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/users.json"
const progressJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/progress.json"
const cohortJson = "http://127.0.0.1:8887/data/cohorts.json"


window.data = {//variable declarada como un objeto con 1 prop. contex q es un objeto
  context: {
    cohorts: null,
    users: null,
    progresses: null,
    cohortDatas: null
  }
};

  fetch(cohortJson)
    .then(response => response.json())
    .then(data => {
      window.data.context.cohorts = data;
      stopLoading();
    });

  fetch(userJson)
    .then(response => response.json())
    .then(data => {
      window.data.context.users = data;
      stopLoading();
    });

  fetch(progressJson)
    .then(response => response.json())
    .then(data => {
      window.data.context.progress = data;
      stopLoading();
    });

  const stopLoading = () => { //función que sincroniza el término de cada promesa...
    if (window.data.context.users && window.data.context.users && window.data.context.users) {//Cuando ya no tienen valor null
      // Termine de cargar

      loadCompleteUsers();
    }
  };

const loadCompleteUsers = () => {
  cohortBtn.addEventListener("click", () => {
    const render = window.data.context.users.forEach(element => {
      return contentDiv.innerHTML += `<p>${element.name}</p>`
    })
    return render;
  })
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

window.computeUsersStats = (users, progress, courses) => {
  //Las llaves de los cursos se obtienen de la prop coursesIndex
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
                var unit = course.units[unitKey];

                totalParts += unit.totalParts;
                completedParts += unit.completedParts;//Tendré todas las unidades completadas de todos los cursos

                for (var partKey in unit.parts) {
                  if (Object.prototype.hasOwnProperty.call(unit.parts, partKey)) {
                    var part = unit.parts[partKey];

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
            user.stats = {//actualizacion del dato de los stats utilizando las variables .
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

// orderby: total, read, exercise, quiz, avg, ( name <--- default )

window.sortUsers = (users, orderBy, orderDirection) => {
  if (orderBy) {
    if (users) {
      orderBy = orderBy.toLowerCase();
      orderDirection = orderDirection && orderDirection.toLowerCase() == "asc"
                          ? "asc"
                          : "desc";
      
      for(var i = 0; i < users.length - 1; i++) {
        var user1 = users[i];

        for(var j = i + 1; j < users.length; j++) {
          var user2 = users[j];

          switch (orderBy) {
            case "total": if (orderDirection == "desc") {
              if (user1.stats.percent < user2.stats.percent) {
                users[j] = user1;
                users[i] = user1 = user2;
              }
            }
            else if (user1.stats.percent > user2.stats.percent) {
              users[j] = user1;
              users[i] = user1 = user2;
            }
            break;

            case "read": if (orderDirection == "desc") {
              if (user1.stats.reads.percent < user2.stats.reads.percent) {
                users[j] = user1;
                users[i] = user1 = user2;
              }
            }
            else if (user1.stats.reads.percent > user2.stats.reads.percent) {
              users[j] = user1;
              users[i] = user1 = user2;
            }
            break;

            case "exercise": if (orderDirection == "desc") {
              if (user1.stats.exercises.percent < user2.stats.exercises.percent) {
                users[j] = user1;
                users[i] = user1 = user2;
              }
            }
            else if (user1.stats.exercises.percent > user2.stats.exercises.percent) {
              users[j] = user1;
              users[i] = user1 = user2;
            }
            break;

            case "quiz": if (orderDirection == "desc") {
              if (user1.stats.quizzes.percent < user2.stats.quizzes.percent) {
                users[j] = user1;
                users[i] = user1 = user2;
              }
            }
            else if (user1.stats.quizzes.percent > user2.stats.quizzes.percent) {
              users[j] = user1;
              users[i] = user1 = user2;
            }
            break;

            case "avg": if (orderDirection == "desc") {
              if (user1.stats.quizzes.scoreAvg < user2.stats.quizzes.scoreAvg) {
                users[j] = user1;
                users[i] = user1 = user2;
              }
            }
            else if (user1.stats.quizzes.scoreAvg > user2.stats.quizzes.scoreAvg) {
              users[j] = user1;
              users[i] = user1 = user2;
            }
            break;

            default: if (orderDirection == "desc") {
              if (user1.name < user2.name) {
                users[j] = user1;
                users[i] = user1 = user2;
              }
            }
            else if (user1.name > user2.name) {
              users[j] = user1;
              users[i] = user1 = user2;
            }
            break;
          }
        } 
      }
    }
  }
  return users;
  

};



window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {
  
};

/* it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  }); */
