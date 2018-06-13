// el primer for esta funcionando
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
//este for no esta funcionando
const sub1 = document.getElementsByClassName("submenu1");

for (let i = 0; i < acc.length; i++) {
    sub1[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content1 = this.nextElementSibling;
        if (content1.style.display === "block") {
            content1.style.display = "none";
        } else {
            content1.style.display = "block";
        }
    });
}



window.computeUsersStats = (users, progress, courses) => {

};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};