console.log(data);

// Variables globales
var addList = document.getElementById('main-students');

var salida = '';
for(var i = 0; i < data.CDMX['2017-2'].students.length; i++){
    salida += '<li>' + ("Nombre de Studiante: " + (data.CDMX['2017-2'].students[0].name)); + '</li>';
    break;
};
document.getElementById('Students').innerHTML = salida;