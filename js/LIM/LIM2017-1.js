console.log(data);

// Variables globales
var addList = document.getElementById('main-students');

var salida = '';
for(var i = 0; i < data.LIM['2017-1'].students.length; i++){
    salida += '<li>' + ("Nombre de Studiante: " + (data.LIM['2017-1'].students[1].name)); + '</li>';
    break;
};
document.getElementById('Students').innerHTML = salida;