function updateTime() {
//Chicago
let chicagoElement = document.querySelector("#chicago");
let chicagoDateElement = chicagoElement.querySelector(".date");
let chicagoTimeElement = chicagoElement.querySelector(".time");

let chicagoDate = moment().tz("America/Chicago");
chicagoDateElement.innerHTML = chicagoDate.format("dddd, MMMM Do");
chicagoTimeElement.innerHTML = chicagoDate.format("h:mm:ss [<small>]A[</small>]");

//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");

let parisDate = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisDate.format("dddd, MMMM Do");
parisTimeElement.innerHTML = parisDate.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);