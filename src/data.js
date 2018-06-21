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

};



window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};

