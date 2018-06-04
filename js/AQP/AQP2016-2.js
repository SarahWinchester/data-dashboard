console.log(data);

// Variables globales
var addList = document.getElementById('main-students');

var salida = '';
for(var i = 0; i < data.SCL['2016-2'].students.length; i++){
    salida += '<li>' + ("Nombre de Studiante: " + (data.SCL['2016-2'].students[1].name)); + '</li>';
    break;
};
document.getElementById('Students').innerHTML = salida;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//alumnas inscritas SCL 2016 II (students)
var studentsInscribed = function students(data) {
    var studentsNumber = data.students.length;
    return studentsNumber;
}
var totalStudents = data.SCL["2016-2"]; // cambiando esta parte de la data data.SCL["2017-2"]; la formula serviría para todas las sedes, no se integraron las demas por falta de tiempo
totalStudents = studentsInscribed(totalStudents);
console.log("cantidad de estudiantes inscritas SCL 2016 II" + " " + "=" + " " + ((totalStudents)));

var inscribed = '';
document.getElementById('students-active').innerHTML = inscribed;

// --------------------------------

//alumnas activas SCL2016, cambiando -data.SCL["2017-2"]- sirve para todas las sedes
function activeStudentsSCL(data) {
    var activeS = 0;
    for (var i = 0; i < data.students.length; i++) {
        if (data.students[i].active == true) {
            activeS++;
        }
    }
    return activeS;
};
// alumanas activas SCL
var totalTOTALSCL = data.SCL["2016-2"];
totalTOTALSCL = activeStudentsSCL(totalTOTALSCL);
document.getElementById('students-active').innerHTML = totalTOTALSCL;
console.log("cantidad de estudiantes activas SCL 2016 II" + " " + "=" + " " + ((totalTOTALSCL)));

// --------------------------------

//alumnas inactivas SCL 2016 II  
function dropoutStu(studentsnumber, activeS) { //(inscritas - activas = inactivas)
    var drops = ((studentsnumber - activeS)); 
    return drops;
}

var dropoutSCL = dropoutStu(totalStudents, totalTOTALSCL);
console.log("cantidad de estudiantes desertoras SCL 2016 II" + " " + "=" + " " + (dropoutSCL)); 

// --------------------------------

// % de deserción
var dropPercent = Math.round((dropoutSCL / totalStudents) * 100);
console.log("porcentaje de estudiantes desertoras SCL 2016 II" + " " + "=" + " %" + " " + (Math.round((dropoutSCL / totalStudents) * 100)));


///////////////////////////////////////////////////////////////////////////////////////////////////////

// activas   true false
// var cede = 'SCL';
// var generacion = '2016-2';

// function activasSCL(base){
//     var structura = data[cede][generacion].students;
//     var activasStudents = [];
//     for (var i = 0; i <structura.length; i++){
//         if(activasStudents[i].active == true){
//             activasStudents.push(structura[i]);
//         }
//     }
//     return activasStudents;
// }
// activasSCL(data);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// var active = [];
// for(var i = 0; i < data.SCL['2016-2'].students.length; i++){
//     if (data.SCL['2016-2'] === true){
//         active += '<li>' + ("Studiante Activas: " + (data.SCL['2016-2'].students.active)); + '</li>';
//         // break;
//     }
//     document.getElementById('students-active').innerHTML = active;
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// function activeStudents(data){
//     var activeSCL = 0;
//     for (var i = 0; i < data.students.length; i++) {
//         if (data.students[i].active == true) {
//             activeSCL++;
//         }
//     }
//     return activeSCL;
// };
// var activeTotal = data.AQP['2016-2'];
// activeTotal = activeStudents(activeTotal);

// var active = '';
// for(var i = 0; i < data.AQP['2016-2'].students.length; i++){
//     if(data.AQP['2016-2'].students === true){
//         active += '<li>' + ("Estudiantes activas " + "=" + " " + (data.AQP['2016-2'].students[i].active)); + '</li>';
//         document.getElementById('students-active').innerHTML = active;
//     }    

// };
// document.getElementById('students-active').innerHTML = active;
// // console.log("Estudiantes activas " + "=" + " " + (activeTotal));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


