function updateTime() {
//Buenos Aires
let buenosAiresElement = document.querySelector("#buenos-aires");
if (buenosAiresElement) {
let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");

let buenosAiresDate = moment().tz("America/Buenos_Aires");
buenosAiresDateElement.innerHTML = buenosAiresDate.format("dddd, MMMM Do");
buenosAiresTimeElement.innerHTML = buenosAiresDate.format("h:mm:ss [<small>]A[</small>]");
}
//New York
let newYorkElement = document.querySelector("#new-york");
if (newYorkElement) {
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");

let newYorkDate = moment().tz("America/New_York");
newYorkDateElement.innerHTML = newYorkDate.format("dddd, MMMM Do");
newYorkTimeElement.innerHTML = newYorkDate.format("h:mm:ss [<small>]A[</small>]");
}
//Paris
let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");

let parisDate = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisDate.format("dddd, MMMM Do");
parisTimeElement.innerHTML = parisDate.format("h:mm:ss [<small>]A[</small>]");
}
//Tokyo
let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement) {
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");

let tokyoDate = moment().tz("Asia/Tokyo");
tokyoDateElement.innerHTML = tokyoDate.format("dddd, MMMM Do");
tokyoTimeElement.innerHTML = tokyoDate.format("h:mm:ss [<small>]A[</small>]");
}
}

updateTime();
setInterval(updateTime, 1000);

function updateCityDetail(event) {
    let citySelectedTimeZone = event.target.value;
    if (citySelectedTimeZone === "current_location") {
        citySelectedTimeZone = moment.tz.guess(); 
    }
    let cityTime = moment().tz(citySelectedTimeZone);
    let cityName = citySelectedTimeZone.replace("_", " ").split("/")[1];
    let cityDetails = document.querySelector("#cityDetails");
    cityDetails.innerHTML = 
        `<div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("dddd, MMMM Do")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/" class="return-link">All cities</a>
    `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCityDetail);