console.log(data);
// Botones barra de Navegacion //
var btnHome = document.getElementById("home-btn");
var btnStudents = document.getElementById("students-btn");
var btnCoach = document.getElementById("coach-btn");
var btnChart = document.getElementById("chart-btn");

// Seccion Home //
var sectionHome = document.getElementsByClassName("home");

// Seccion Students //
var sectionStudents = document.getElementsByClassName("students");

// Seccion Coach //
var sectionCoach = document.getElementsByClassName("coach");

//Seccion Charts //
var sectionChart = document.getElementsByClassName("chart");

btnHome.addEventListener("click", showHome);

var showHome = function() {
    btnHome.style.display = "none";
    sectionCoach.style.display = "block";
}





