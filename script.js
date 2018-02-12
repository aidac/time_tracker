"use strict"

let activity = document.getElementById("activity");
let startTime, endTime;
let interval;
let myTable = document.getElementById('addAct');

function addActivity() {
    if (activity.value === "") {
        alert("please enter the name of activity");
    } else {
        var rows = document.getElementById("addAct").getElementsByTagName("tr").length;
        let table = document.getElementById("addAct");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = rows;
        cell2.innerHTML = activity.value;
        cell3.innerHTML = "0s";
        start();
        document.getElementById("form").reset();
    }
}

function start() {
    startTime = new Date();
    let myTable = document.getElementById('addAct');
    let row = document.getElementById("addAct").getElementsByTagName("tr").length;
    let minutes = startTime.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let hours = startTime.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    myTable.rows[row - 1].cells[3].innerHTML = `${hours}:${minutes}`;
    interval = setInterval(countTime, 1000);
}

function countTime() {
    endTime = new Date();
    let timeDiff = endTime - startTime;
    timeDiff /= 1000;
    let time = Number(Math.round(timeDiff));
    let myTable = document.getElementById('addAct');
    let row = document.getElementById("addAct").getElementsByTagName("tr").length;
    var hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    if (time < 60) {
        myTable.rows[row - 1].cells[2].innerHTML = `${seconds}s`;
    } else if (time < 3600) {
        myTable.rows[row - 1].cells[2].innerHTML = `${minutes}min ${seconds}s`;
    } else {
        myTable.rows[row - 1].cells[2].innerHTML = `${hours}h ${minutes}min ${seconds}s`
    }
}

function stopActivity() {
    clearInterval(interval);
}

function loadSession() {

}

function saveSession() {

}