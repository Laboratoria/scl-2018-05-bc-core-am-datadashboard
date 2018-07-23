const userJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/users.json"
const progressJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/progress.json"
const cohortJson = "http://127.0.0.1:8887/data/cohorts.json"

window.data = {//variable declarada como un objeto con 2 prop. loadin y contex q es un objeto
  loading: 3,//se tienen q cumplir las 3 promesas fetch, a medida q una se cumpla se le restará 1
  context: {
    cohorts: null,//dato cargado por un fetch
    users: null,//idem
    progresses: null,//idem
    cohortDatas: null//datos precalculados
  }
};

window.loadData = (loadComplete) => {//metodo q recibe una función y ejecuta los 3 fetch
  fetch(cohortJson)
    .then(response => response.json())
    .then(data => {
      window.data.context.cohorts = data;//le asigno el valor de data a cohort
      window.data.loading--;//cada vez q se cumple un fetch le disminuye uno a la var loading q está dentro de data
      if (window.data.loading == 0) completePromise(loadComplete);//ya finalizaron y llama a loadComplete
    });

  fetch(userJson)
    .then(response => response.json())
    .then(data => {
      window.data.context.users = data;
      window.data.loading--;

      if (window.data.loading == 0) completePromise(loadComplete);//recibe el mismo param. de la f() loadCom.
    });

  fetch(progressJson)
    .then(response => response.json())
    .then(data => {
      window.data.context.progresses = data;
      window.data.loading--;

      if (window.data.loading == 0) completePromise(loadComplete);
    });

  let completePromise = (loadComplete) => {
    window.data.context.cohortDatas = window.calculateCohortDatas(//********** */
      window.data.context.users,
      window.data.context.progresses,
      window.data.context.cohorts
    );
    loadComplete(window.data.context);
  };
};

window.calculateCohortDatas = (users, progresses, cohorts) => {//transforma los datos de manera de que sea eficiente
  let result = [];

  if (cohorts) {//validar q existe, tiene valor
    for (let i = 0; i < cohorts.length; i++) {
      let cohort = cohorts[i];
      let courses = window.getCohortCourseKeys(cohort);//las llaves de los cursos del cohort
      let computedUsers = window.computeUsersStats(
        window.getCohortUsers(users, cohort),
        progresses,
        courses);

      result.push({//objeto con los datos ya precalculados
        cohort: cohort,
        progresses: progresses,
        users: computedUsers,//ya calculada la prop stats
        courses: courses
      });
    }
  }
  return result;
};

window.getCohortUsers = (users, cohort) => {//seleccion de usuarios por cohort
  let result = [];

  if (cohort && cohort.id && users) {//validación
    for (let i = 0; i < users.length; i++) {
      let user = users[i];

      if (user.signupCohort == cohort.id) {
        result.push(user);//como el usuario pertenece al cohort lo agrego al []
      }
    }
  }
  return result;
};

window.getCohortCourseKeys = (cohort) => {//funcion q saca todas las llaves en forma de un arreglo
  let result = [];

  if (cohort && cohort.coursesIndex) {//validacion del objeto y su propiedad
    for (let key in cohort.coursesIndex) {
      if (Object.prototype.hasOwnProperty.call(cohort.coursesIndex, key)) {//call(objeto, llave)
        result.push(key);//guardo la llave en el arreglo
      }
    }
  }
  return result;
};

window.computeUsersStats = (users, progresses, courses) => {//Las llaves de los cursos se obtienen de la prop coursesIndex
  let result = [];

  if (users && progresses && courses) {//Validación
    for (let i = 0; i < users.length; i++) {
      let user = users[i];//cada usuario
      let progress = progresses[user.id];//por cada usuario saco su progreso, indexo en [] el id del usuario en la var progreso.

      user.stats = {//creo la prop. stats en usuarios con valores por defecto...
        percent: 0,
        exercises: { total: 0, completed: 0, percent: 0 },
        reads: { total: 0, completed: 0, percent: 0 },
        quizzes: { total: 0, completed: 0, percent: 0, scoreSum: 0, scoreAvg: 0 },
      };
      if (progress) {//validación, si no está dará los valores por defecto q le di
        for (let j = 0; j < courses.length; j++) {//recorro llave de los cursos
          let key = courses[j];
          let course = progress[key];//busco en el progreso q estoy tal curso...

          if (course) {//validacion, y declaro vars q me serivrán para rellenar las stats
            let totalParts = 0;//partes q existen en total en todo el progreso de tal usuario
            let completedParts = 0;//partes q se han completado para este usuario
            let totalReads = 0;//lecturas q ha tenido
            let completedReads = 0;//lecturas terminadas
            let totalExercises = 0;//ejercicios q tiene
            let completedExercises = 0;//ejercicios q ha terminado
            let totalQuizzes = 0;//retos q tiene
            let completedQuizzes = 0;//retos completados
            let scoreQuizzes = 0;//suma de todas las puntuaciones

            for (let unitKey in course.units) {//itero en las llaves de las unidades
              if (Object.prototype.hasOwnProperty.call(course.units, unitKey)) {//valido si la llave pertenece al objeto
                let unit = course.units[unitKey];//saco el valor no la llave...

                totalParts += unit.totalParts;//Todas las partes q existen en total de tal usuario
                completedParts += unit.completedParts;//Tendré todas las unidades completadas de todos los cursos

                for (let partKey in unit.parts) {//itero en las key de las partes
                  if (Object.prototype.hasOwnProperty.call(unit.parts, partKey)) {
                    let part = unit.parts[partKey];//guardo el objeto parts q estoy iterando

                    switch (part.type.toLowerCase()) {//Parte tiene 3 tipos, read, exercise y quiz. 
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
      
      for(let i = 0; i < users.length - 1; i++) {
        let user1 = users[i];

        for(let j = i + 1; j < users.length; j++) {
          let user2 = users[j];

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

window.filterUsers = (users, search) => {
  if (search) {//validacion
    let result = [];//almacenos a los usuarios q cumplen con el criterio de búsqueda

    if (users) {
      search = search.toLowerCase();

      for (let i = 0; i < users.length; i++) {//recorro usuarios
        let user = users[i];

        if (user && user.name && user.name.toLowerCase().indexOf(search) >= 0) {//validación y pasar todo a minúsculas, pregunto el índice en q se encuentra el criterio de búsqueda. Si es menor a 0 no existe
          result.push(user);//lo adiciono al arrelgo si se encuentra (>=0)
        }
      }
    }
    return result;//arreglo vacío
  }
  return users;
};

window.processCohortData = (options) => {
  if (options && options.cohortData && options.cohortData.users) {
    let filteredUsers = window.filterUsers(options.cohortData.users, options.search);
    
    return window.sortUsers(filteredUsers, options.orderBy, options.orderDirection);//usuarios ya filtrados para organizar más rápido
  }
  return [];//devuelvo todos los usuarios si no hay q filtrar
};


/* it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  }); */