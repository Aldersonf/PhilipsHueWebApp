$(document).ready(function () {
    $("#ll-on").click(function () {
        console.log("Light State: ON");
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT", 'https://192.168.0.83/api/-M-f97LmvvyfP0kYSd3b1GL-8N0ND2UWldbIKLUG/lights/3/state');
        xmlhttp.send('{"on": true}');
    });

    $("#ll-off").click(function () {
        console.log("Light State: OFF");
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT", 'https://192.168.0.83/api/-M-f97LmvvyfP0kYSd3b1GL-8N0ND2UWldbIKLUG/lights/3/state');
        xmlhttp.send('{"on": false}');

    });
});
