$(document).ready(function () {

    // TURNING LIGHTS ON
    $("#ll-on").click(function () {
        console.log("Light State: ON");
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT", 'https://192.168.0.83/api/-M-f97LmvvyfP0kYSd3b1GL-8N0ND2UWldbIKLUG/lights/3/state');
        xmlhttp.send('{"on": true}');
    });

    // TURNING LIGHTS OFF
    $("#ll-off").click(function () {
        console.log("Light State: OFF");
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT", 'https://192.168.0.83/api/-M-f97LmvvyfP0kYSd3b1GL-8N0ND2UWldbIKLUG/lights/3/state');
        xmlhttp.send('{"on": false}');

    });


    setRgba();

});

function setRgba () {
    var red = document.querySelector('.rgba-picker .red-slider input').value;
    var green = document.querySelector('.rgba-picker .green-slider input').value;
    var blue = document.querySelector('.rgba-picker .blue-slider input').value;
    var alpha = document.querySelector('.rgba-picker .silver-slider input').value / 100;
    var color = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
    document.querySelector(".rgba-picker .color-preview .color").style.backgroundColor = color;
    console.log(color);
}
