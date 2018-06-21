//Para login con alert

let go = () => { //solo funciona con este nombre y contrasela
  if (document.form.password.value ==='123' && document.form.login.value ==='Valentina'){ 
          window.open('index.html') //abre página index si se pone correcto

      } 
      else{ 
           alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
      } 
  } 

//Para buscar alumna: NO FUNCIONA
function searchStudent() {
  let user = [];
  const containerName = document.getElementById('nameStu');
  const input = document.getElementById('searchStudent').value;
  const users = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  fetch(users)
    .then(response => response.json())
    .then(info => {
      renderUsers(info);
    });
  const renderUsers = info => {
    input.addEventListener('keypress', (event) => {
      let key = event.which || event.keyCode;
      if (key === 13) { //código 13 es enter
        const render = info.forEach(element => {
          if (input === element.name) {
            return containerName.innerHTML += `<p>${element.name}</p>`;
          }

        })
      };
      return render;
    });
  };

}
const render = (element) => {
  containerName.innerHTML = element.name;
  
} 
