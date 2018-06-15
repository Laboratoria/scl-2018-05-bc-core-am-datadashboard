const elements = document.getElementsByClassName('element');

const cleanActives = (element) => {
  const activeChildren = element.getElementsByClassName('active');
  for (let i = 0; i < activeChildren.length; i++) {
    cleanActives(activeChildren[i]);
  }
  element.classList.remove('active');
}

const toggle = (event) => {
  let brothers = event.currentTarget.parentNode.children;
  for (let i = 0; i < brothers.length; i++) {
    let whiteCard = brothers[i].children[1];
    if(brothers[i] !== event.currentTarget || whiteCard.classList.contains('active')) {
      cleanActives(whiteCard);
    } else {
      event.currentTarget.children[1].classList.add('active');
    }
  }

  event.stopPropagation();
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', toggle);
}