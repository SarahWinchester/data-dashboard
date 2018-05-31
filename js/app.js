console.log(data);
// Botones barra de Navegacion //
var btnHome = document.getElementById("homeB");
var btnStudents = document.getElementById("studentsB");
var btnCoach = document.getElementById("coachB");
var btnChart = document.getElementById("chartB");

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





