const container = document.getElementById("root")

idUser = (option) => {

    let id = Object.keys(options.cohort.coursesIndex);
    let userNewArray = computeUsersStats(options.cohortData.users, options.cohortData.progress, coursesCohortSelect);
    return userNewArray;
  };  



/* courses = Object.keys(data.cohorts.coursesIndex);
for (let i in courses) {
   let coursesIndex = courses[i]; }*/

const loadCompleteUsers = () => {
  cohortBtn.addEventListener("click", () =>{
    const render = users.forEach(element => {
      return contentDiv.innerHTML += `<p>${element.name}</p>`
    })
    return render;
  }) 

};




