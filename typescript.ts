

document.getElementById("app").innerText =  `its my Calculator!`;

function addd() {
    var code1  = document.getElementById("name1");
var code2  = document.getElementById("name2");
    document.getElementById("app").innerText =   Number(code1["value"]) + Number(code2["value"]);   
}
function subb() {
    var code1  = document.getElementById("name1");
    var code2  = document.getElementById("name2");
    document.getElementById("app").innerText =    Number(code1["value"]) - Number(code2["value"]);   
}
function mull() {
    var code1  = document.getElementById("name1");
    var code2  = document.getElementById("name2");
    document.getElementById("app").innerText =    Number(code1["value"]) * Number(code2["value"]);   
}
function divv() {
    var code1  = document.getElementById("name1");
    var code2  = document.getElementById("name2");
    document.getElementById("app").innerText =    Number(code1["value"]) / Number(code2["value"]);   
}