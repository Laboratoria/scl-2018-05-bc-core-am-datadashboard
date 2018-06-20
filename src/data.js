function bddJason() {
    Promise.all([
      fetch(`../data/cohorts/lim-2018-03-pre-core-pw/users.json`),
      fetch(`../data/cohorts/lim-2018-03-pre-core-pw/progress.json`),
      fetch(`../data/cohorts.json`),

    ]).then((responses) => {
      return Promise.all(
        responses.map(
          (response) => {
            return response.json();
          }
        )
      );
    }).then((catesDogesJson) => {
      console.log("Respuesta en paralelo > " + JSON.stringify(catesDogesJson));
      const animalReceptor=document.getElementById('animalReceptor');
      catesDogesJson.forEach((jsonElement)=>{
          jsonElement.forEach((animal)=>{//esto es una url a la img de ese animalito
            const animalImg=document.createElement('img');
            animalImg.src=animal;
            animalReceptor.appendChild(animalImg);
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
