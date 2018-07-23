const loading = document.getElementById("loading");
const cohortSelect = document.getElementById("cohorts-select");
const cohortTableContent = document.getElementById("cohort-table-content");
const cohortSearch = document.getElementById("cohort-search");
const nameColumn = document.getElementById("name-column");
const readColumn = document.getElementById("read-column");
const exerciseColumn = document.getElementById("exercise-column");
const quizColumn = document.getElementById("quiz-column");
const totalColumn = document.getElementById("total-column");

window.options = {//parametro para la función processCohortData
  cohort: null,
  cohortData: {
    users: null,
    progress: null
  },
  orderBy: "",
  orderDirection: "desc",
  search: ""
};

window.loadData(data => {
  
  loading.style.display = 'none';
  window.renderCohorts(data.cohorts);
});

window.renderCohorts = (cohorts) => {
  if (cohorts) {
    let innerHtml = "";

    for (let i = 0; i < cohorts.length; i++) {
      let cohort = cohorts[i];

      if (cohort) {
        innerHtml += "<option value='" + i + "'>" + cohort.id + "</option>";
      }
    }
    cohortSelect.innerHTML = innerHtml;

    cohortSelect.addEventListener("change", () => {
      let cohortIndex = cohortSelect.value;
      let cohortData = window.data.context.cohortDatas[cohortIndex];

      window.options.cohort = cohortData.cohort;
      window.options.cohortData.users = cohortData.users;
      window.options.cohortData.progress = cohortData.progress;

      window.updateTable();
    });

    cohortSearch.addEventListener("keypress", (event) => {
      let key = event.which || event.keyCode;

      if (key == 13) {
        window.options.search = cohortSearch.value;

        window.updateTable();
      }
    });

    nameColumn.addEventListener("click", () => {
      readColumn.innerHTML = "(-)";
      exerciseColumn.innerHTML = "(-)";
      quizColumn.innerHTML = "(-)";
      totalColumn.innerHTML = "(-)";
      
      switch (nameColumn.innerHTML) {
        case "(-)": nameColumn.innerHTML = "(A)"; window.options.orderDirection = "asc"; break;
        case "(A)": nameColumn.innerHTML = "(D)"; window.options.orderDirection = "desc"; break;
        case "(D)": nameColumn.innerHTML = "(A)"; window.options.orderDirection = "asc"; break;
      }
      window.options.orderBy = "name";
      window.updateTable();        
    });

    readColumn.addEventListener("click", () => {
      nameColumn.innerHTML = "(-)";
      exerciseColumn.innerHTML = "(-)";
      quizColumn.innerHTML = "(-)";
      totalColumn.innerHTML = "(-)";
      
      switch (readColumn.innerHTML) {
        case "(-)": readColumn.innerHTML = "(A)"; window.options.orderDirection = "asc"; break;
        case "(A)": readColumn.innerHTML = "(D)"; window.options.orderDirection = "desc"; break;
        case "(D)": readColumn.innerHTML = "(A)"; window.options.orderDirection = "asc"; break;
      }
      window.options.orderBy = "read";
      window.updateTable();        
    });

    exerciseColumn.addEventListener("click", () => {
      nameColumn.innerHTML = "(-)";
      readColumn.innerHTML = "(-)";
      quizColumn.innerHTML = "(-)";
      totalColumn.innerHTML = "(-)";
      
      switch (exerciseColumn.innerHTML) {
        case "(-)": exerciseColumn.innerHTML = "(A)"; window.options.orderDirection = "asc"; break;
        case "(A)": exerciseColumn.innerHTML = "(D)"; window.options.orderDirection = "desc"; break;
        case "(D)": exerciseColumn.innerHTML = "(A)"; window.options.orderDirection = "asc"; break;
      }
      window.options.orderBy = "exercise";
      window.updateTable();        
    });

    quizColumn.addEventListener("click", () => {
      nameColumn.innerHTML = "(-)";
      readColumn.innerHTML = "(-)";
      exerciseColumn.innerHTML = "(-)";
      totalColumn.innerHTML = "(-)";
      
      switch (quizColumn.innerHTML) {
        case "(-)": quizColumn.innerHTML = "(A)"; window.options.orderDirection = "asc"; break;
        case "(A)": quizColumn.innerHTML = "(D)"; window.options.orderDirection = "desc"; break;
        case "(D)": quizColumn.innerHTML = "(A)"; window.options.orderDirection = "asc"; break;
      }
      window.options.orderBy = "quiz";
      window.updateTable();     
    });

    totalColumn.addEventListener("click", () => {
      nameColumn.innerHTML = "(-)";
      readColumn.innerHTML = "(-)";
      exerciseColumn.innerHTML = "(-)";
      quizColumn.innerHTML = "(-)";

      switch (totalColumn.innerHTML) {
        case "(-)": totalColumn.innerHTML = "(A)"; window.options.orderDirection = "asc"; break;
        case "(A)": totalColumn.innerHTML = "(D)"; window.options.orderDirection = "desc"; break;
        case "(D)": totalColumn.innerHTML = "(A)"; window.options.orderDirection = "asc"; break;
      }
      window.options.orderBy = "total";
      window.updateTable();
    });
  }
};

window.updateTable = () => {

  let users = window.processCohortData(window.options);
  let innerHtml = "";

  for (let i = 0; i < users.length; i++) {
    let user = users[i];

    innerHtml += "<tr><td>"+user.name+"</td><td>"+user.stats.reads.percent+"</td><td>"+user.stats.exercises.percent+"</td><td>"+user.stats.quizzes.scoreAvg+"</td><td>"+user.stats.percent+"</td></tr>";
  }
  cohortTableContent.innerHTML = innerHtml;
}