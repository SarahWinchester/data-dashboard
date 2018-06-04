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


////////////////////////////////////////////////////////////////////////////////////////////////7
// section coach
function coach(data) {
    var coachnumber = data;
    return coachnumber;
};
var coachCalif = data.AQP["2016-2"].ratings["1"].teacher; // cambiando esta parte de la data data.SCL["2017-2"]; la formula serviría para todas las sedes, no se integraron las demas por falta de tiempo
coachCalif = coach(coachCalif);
console.log("calificacion del coach de AQP 2016 II es" + " " + coachCalif); //menos 2 poque hay un 2 arrays vacío

var coachAQP = "";
for(var i = 0; i < data.AQP["2016-2"].length; ++i){
    coachAQP += "<li>" + ("calificacion del coach de AQP 2016 II es" + " " + coachCalif); + "</li>";
    document.getElementById("main-coach-AQP").innerHTML = coachAQP;
}

////////////////////////////////////////////////////////////////////////////////////////
// Jedi

function jedi(data) {
    var jediNumber = data;
    return jediNumber;
};
var jediCalif = data.AQP["2016-2"].ratings["1"].jedi; // cambiando esta parte de la data data.SCL["2017-2"]; la formula serviría para todas las sedes, no se integraron las demas por falta de tiempo
jediCalif = jedi(jediCalif);
console.log("calificacion del jedi de AQP 2016 II es" + " " + jediCalif); 

////////////////////////////////////////////////////////////////////////////////////////////////7





