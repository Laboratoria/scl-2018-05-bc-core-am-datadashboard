function bddJason() {
    Promise.all([
      fetch(`../data/cohorts/lim-2018-03-pre-core-pw/users.json`),
      fetch(`../data/cohorts/lim-2018-03-pre-core-pw/progress.json`),
      fetch(`../data/cohorts.json`),

    ]).then((responses) => { //cuando llegue la respuesta
      return Promise.all(
        responses.map(
          (response) => {
            return response.json();
          }
        )
      );
    }).then((respuesta) => {
      console.log("Respuesta en paralelo > " + JSON.stringify(respuesta));
      const animalReceptor=document.getElementById('animalReceptor');
      respuesta.forEach((Element)=>{
          Element.forEach((element2)=>{
            const leyendoJson=document.createElement('img');
            leyendoJson.textContent(element2);
            animalReceptor.appendChild(leyendoJson);
          });
      });
    }).catch((error) => {
      alert("Error, intente recargar la página");
    });
  }
  
window.computeUsersStats = (users, progress, courses) => {
    

};

window.sortUsers = (users, orderBy, orderDirection) =>{

};

window.filterUsers = (users, filterBy) => {

};

window.processCohortData = (cohortData, orderBy, orderDirection, filterBy) => {

};
