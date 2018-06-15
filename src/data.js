// el primer for esta funcionando
const acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
  // se cambia function ES5 a arrow function de ES6
  acc[i].addEventListener('click', (event) => {
    // se cambia la pseudo-variable this por el currentTarget del evento el cual contiene el elemento sobre le cual se disparo el evento
    event.currentTarget.classList.toggle('active');
    const content = event.currentTarget.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

const sub1 = document.getElementsByClassName('submenu1');

for (let i = 0; i < sub1.length; i++) {
  sub1[i].addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    const content1 = event.currentTarget.nextElementSibling;
    if (content1.style.display === 'block') {
      content1.style.display = 'none';
    } else {
      content1.style.display = 'block';
    }
  });
}



window.computeUsersStats = (users, progress, courses) => {

};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};