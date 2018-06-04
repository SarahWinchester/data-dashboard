console.log(data);

// Variables globales
var addList = document.getElementById('main-students');

var salida = '';
for(var i = 0; i < data.SCL['2016-2'].students.length; i++){
    salida += '<li>' + ("Nombre de Studiante: " + (data.SCL['2016-2'].students[1].name)); + '</li>';
    break;
};
document.getElementById('Students').innerHTML = salida;