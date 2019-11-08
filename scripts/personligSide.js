// JavaScript Document

/*fetch("/personligInfo.json", { method: "GET" })
fetch("/personligInfo.json")
    .then(res => res.json())
    .then(data => console.log(data));*/

var obj = JSON.parse(personer);

console.log(obj[0].name);

