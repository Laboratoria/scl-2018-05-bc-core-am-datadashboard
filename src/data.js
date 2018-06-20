//CARGA USER.JSON (ALUMNAS)
//funcionalidad del btn
document.getElementById('btnAlumnas').addEventListener('click', cargarAlumnas);
//llamando la funcion
function cargarAlumnas() {
	fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
	.then(function(resAlumnas){
		//retorna el valor en formato json
		return resAlumnas.json();
	}).then(function(alumnas){
		let html = '';
		alumnas.forEach(function(alumnasId){
			html += `<p>Nombre Alumna: ${alumnasId.name}</p> <p>Id Alumna: ${alumnasId.id}</p> <p>Rol: ${alumnasId.role}</p>`;
		})
		document.getElementById('resultado').innerHTML = html;
	})
}

//CARGA PROGRESS.JSON (CURSOS)
document.getElementById('btnCursos').addEventListener('click', cargarCursos);
function cargarCursos(){
	fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
	.then(function(resCursos){
		return resCursos.json();
	})
	.then(function(cursosProgress){
		console.log(cursosProgress);
		// let html = '';
		// cursosProgress.forEach(function(cursos){
		// 	html += `<p>Intro : ${cursos.intro}</p>`;
		// })
		// document.getElementById('resultado').innerHTML = html;
	})
}








window.computeUsersStats = (users, progress, courses) =>{
}
window.sortUsers = (users, orderBy, orderDirection) =>{
}
window.filterUsers = (users, search) =>{
}
window.processCohortData = (options) =>{
}