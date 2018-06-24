const loading = document.getElementById("loading");
const cohortSelect = document.getElementById("cohorts-select");
const cohortTableContent = document.getElementById("cohort-table-content");
const cohortSearch = document.getElementById("cohort-search");
const nameColumn = document.getElementById("name-column");
const readColumn = document.getElementById("read-column");
const exerciseColumn = document.getElementById("exercise-column");
const quizColumn = document.getElementById("quiz-column");
const totalColumn = document.getElementById("total-column");

//creé las variables que utilizaremos como los objetos, aun no tienen valor puesto que aún no se cumple 
//la promesa que nos devolverá el JSON como datos
window.loadData(data => {//data devuelve el "contexto" de datos que cargué loadComplete; cohort, users, datos
  loading.style.display = 'none';
  window.renderCohorts(data.cohorts);
});

//DOM
window.renderCohorts = (cohorts) => {
  
  nameColumn.addEventListener("click", () => {
    readColumn.innerHTML = "(-)";
    exerciseColumn.innerHTML = "(-)";
    quizColumn.innerHTML = "(-)";
    totalColumn.innerHTML = "(-)";

    switch (nameColumn.innerHTML) {

    }
    

  readColumn.addEventListener("click", () => {

  }

  exerciseColumn.addEventListener("click", () => {

  }

  quizColumn.addEventListener("click", () => {

  }

  totalColumn.addEventListener("click", () => {

  }
};

window.updateTable = () => {

}



