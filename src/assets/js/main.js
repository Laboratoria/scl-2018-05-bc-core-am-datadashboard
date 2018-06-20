
window.onload = () => {

	//llamando al JSON con fetch
	const cohortsJSON = 'data/cohorts.json';
	fetch(cohortsJSON) 
	.then(response => response.json())
	.then(data => { 
		
		cohortsFull(data);
	})
	
	const cohortsFull = data => {
		let cohortsID = [];
		data.forEach(elem => {
			//comparar id para sacar solo los de lima con  if 	
			if (elem.sede === "lima"){
				//mostrar id de esos cohort	
				cohortsID.push(elem.id);
			} 
		});
		//transforme a texto los ids 
		let cohortsIdText = JSON.stringify(cohortsID);
		
		//mostrar id de esos cohort y listarlos con innerHTML  
		/*document.getElementById("showCohortList").innerHTML = cohortsIdText; */

		//seccion botones
		//area de busqueda
		const btnSearch = document.getElementById('btnSearch').addEventListener('click', () => {
			const searchA = document.getElementById('searchAlumnas').value;
			//aqui deberia ir la funcion que permite imprimir el nombre de las alumnas
			document.getElementById('cohorts').style.display = 'block';
			document.getElementById('loader').style.display = 'block';
			console.log(searchA);
			document.getElementById('loader').innerText = cohortsIdText;
			console.log(cohortsIdText);
				
		})
		//seccion sedes

		const lima = document.getElementById('btnLima');lima.addEventListener('click', () => {
			document.getElementById('cohorts').style.display = 'block';
			document.getElementById('nameCohort').innerText = cohortsIdText;

		})
		
	}
	
}


//

