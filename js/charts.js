
//alumnas inscritas AQP 2016 II (students)
var studentsInscribed = function students(data) {
    var studentsNumber = data.students.length;
    return studentsNumber;
}
var totalStudents = data.AQP["2016-2"]; // cambiando esta parte de la data data.Arequipa
totalStudents = studentsInscribed(totalStudents);
var inscribed = '';

function activeStudentsAQP(data) {
    var activeS = 0;
    for (var i = 0; i < data.students.length; i++) {
        if (data.students[i].active == true) {
            activeS++;
        }
    }
    return activeS;
};
// alumanas activas AQP
var totalTOTALAQP = data.AQP["2016-2"];
totalTOTALAQP = activeStudentsAQP(totalTOTALAQP);

//alumnas inactivas AQP 2016 II
function dropoutStu(studentsnumber, activeS) { //(inscritas - activas = inactivas)
    var drops = ((studentsnumber - activeS));
    return drops;
}
var dropoutAQP = dropoutStu(totalStudents, totalTOTALAQP);

function drawChart() {
    var data = new google.visualization.DataTable();

      data.addColumn("number", "studentsInscribed")
      data.row(
      [
      ["Activas", activeStudentsAQP(data.AQP)]
      ["Inactivas", dropoutAQP(data.AQP)]
      ])
      var chart = new google.visualization.BarChart(document.getElementById('chart-aqp2016-2-active-students'));
      chart.draw(data, null);
}
