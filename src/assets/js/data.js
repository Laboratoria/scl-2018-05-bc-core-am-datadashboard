//llamando al JSON con fetch
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
fetch(usersJSON) 
.then(response => response.json())
.then(data => { 
	usersFull(data);
})
const usersFull = data => {
	let users = [];
	data.forEach(elem => {
	//mostrar nombre de almunas
		users.push(elem.name);
		 
	});
	//obtene id de alumna
	let id = [];
	data.forEach(elem => {
		id.push(elem.id)
		
	})
	//transforme a texto los nombres
	let userNameText = JSON.stringify(users);
	
	//mostrar nombres y listarlos con innerHTML  
	document.getElementById("showNames").innerHTML = userNameText;
}

//llamando al  JSON progress
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
fetch(progressJSON) 
.then(response => response.json())
.then(data => { 
	progressFull(data);
})
//mostrar progreso por alumna
const progressFull = data => {
	let progress = [];	
	// recorre el arreglo id y buscar el id que coincide con cada objeto de progress
	for (let i = 0; i <id.length; i++){
		if(id[i] === elem.id){
			progress.push(elem.id);
			console.log(progress) 
		}
	}
		
}
 
/*
	window.computeUsersStats = (users, progress, courses) => {
		
	}

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};

*/
//hola// probando si se sincronizan bien