
window.onload = () => {
	
	//llamando al JSON con fetch
	const cohortsJSON = '../data/cohorts.json';
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
		console.log(cohortsID) } 
	});
	//transforme a texto los ids 
	let cohortsIdText = JSON.stringify(cohortsID);
	
	//mostrar id de esos cohort y listarlos con innerHTML  
	document.getElementById("showCohorts").innerHTML = cohortsIdText;
	}

}





