//guardando en variables las url
const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJson = '../data/cohorts.json';
//guardando las llamadas
var usersData = fetch(usersJson)
.then(response => response.json())
.then(users => {
	usersData = users;
	recolector();
	nameUsers(users);
});
//guardando en un arreglo y pushando
const nameUsers = (users) =>{
	let usersArray = [];
	users.forEach(element => {
		usersArray.push(element.name);
	});
	console.log(usersArray);
}

var progressData = fetch(progressJson)
.then(response => response.json())
.then(progressJson => {
	const progress = Object.entries(progressJson);
	progressData = progress;
	recolector();
});


var cohortsData = fetch(cohortsJson)
.then(response => response.json())
.then(courses => {
	cohortsData = courses;
	recolector();
	nameCourse(courses);
});

const nameCourse = (courses) =>{
	let coursesArray = [];
	courses.forEach(element => {
		coursesArray.push(element.coursesIndex);
	});
	console.log(coursesArray);
}



function recolector(){
	if(usersData && progressData && cohortsData){
		computeUsersStats(usersData, progressData, ["curso"]);
	}
}

window.computeUsersStats = (users, progress, courses) =>{

}
window.sortUsers = (users, orderBy, orderDirection) =>{
}
window.filterUsers = (users, search) =>{
}
window.processCohortData = (options) =>{
}