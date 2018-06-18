// remueve la clase active del elemento HTML y de sus hijos.
const cleanActives = (tag) => {
  // obtiene la lista de hijos que tienen la clase active.
  const activeChildren = tag.getElementsByClassName('active');
  // recorre a los hijos activos del tag.
  for (let i = 0; i < activeChildren.length; i++) {
    // para cada hijo activo se ejecuta la misma funcion cleanActives.
    cleanActives(activeChildren[i]);
  }
  tag.classList.remove('active'); // remueve la clase active del elemento HTML pasado como parametro
};


const toggle = (event) => {
  // se obtienen todos los nodos del mismo nivel del tag que disparo el evento.
  let brothers = event.currentTarget.parentNode.children;
  // se recorre los brothers para desactivar los hermanos que esten activos.
  for (let i = 0; i < brothers.length; i++) {
    // se crea una variable con el segundo hijo del hermano actual
    let whiteCard = brothers[i].children[1];
    // si el hermano no es el que recibio el click o ya tiene la clase active se le limpia la clase active del el y de todos sus hijos.
    if (brothers[i] !== event.currentTarget || whiteCard.classList.contains('active')) {
      cleanActives(whiteCard);
    } else { // si no le agrega la clase active.
      event.currentTarget.children[1].classList.add('active');
    }
  }
  // evita la propagacion del evento al los tags padres.
  event.stopPropagation();
};

const tags = document.getElementsByClassName('tag');
// asigna a todos los tags el evento click con la funcion toggle.
for (let i = 0; i < tags.length; i++) {
  tags[i].addEventListener('click', toggle);
}