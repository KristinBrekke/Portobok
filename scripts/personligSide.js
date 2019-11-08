// JavaScript Document

/*fetch("/personligInfo.json", { method: "GET" })
fetch("/personligInfo.json")
    .then(res => res.json())
    .then(data => console.log(data));*/

var obj = JSON.parse(personer);

document.getElementById("test").innerHTML = obj[0].name;

console.log(obj[1].name);


