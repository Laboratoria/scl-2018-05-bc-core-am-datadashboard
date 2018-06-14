const elements = document.getElementsByClassName('element');

const toggle = (event) => {
  if (event.currentTarget.getElementsByClassName('active').length === 0) {
    event.currentTarget.children[1].classList.add('active'); 
  } else if (event.currentTarget.getElementsByClassName('active').length === 1) {
    event.currentTarget.children[1].classList.remove('active'); 
  }
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', toggle);
}
