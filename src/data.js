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

let users = null;
let progress = null;
let cohorts = null;


fetch(cohortJson)
  .then(response => response.json())
  .then(data => {
    cohorts = data;
    stopLoading();
  });

fetch(userJson)
  .then(response => response.json())
  .then(data => {
    users = data;
    stopLoading();
  });

fetch(progressJson)
  .then(response => response.json())
  .then(data => {
    progress = data;
    stopLoading();
  });


const stopLoading = () => { //función que sincroniza el término de cada promesa...
  if (users && progress && cohorts) {//Cuando ya no tienen valor null
    // Termine de cargar

    renderUsers();
  }
};


const renderUsers = () => {
  cohortBtn.addEventListener("click", () =>{
    const render = users.forEach(element => {
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

/* it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  }); */
