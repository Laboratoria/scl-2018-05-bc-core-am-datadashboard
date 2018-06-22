const userJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/users.json"
const progressJson = "http://127.0.0.1:8887/data/cohorts/lim-2018-03-pre-core-pw/progress.json"
const cohortJson = "http://127.0.0.1:8887/data/cohorts.json"


window.data = {//variable declarada como un objeto con 2 propiedades loading y context (un objeto)
  loading: 3,
  context: {
    cohorts: null,
    users: null,
    progresses: null,
    cohortDatas: null
  }
};
window.loadData = (loadComplete) => {
  fetch(cohortJson)
    .then(response => response.json())
    .then(data => {
      window.data.context.cohorts = data;
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

  const completePromise = (loadComplete) => {
    window.data.context.cohortDatas = window.calculateCohortDatas(
      window.data.context.users,
      window.data.context.progresses,
      window.data.context.cohorts
    );
    loadComplete(window.data.context);
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
