let homeP = document.getElementById("homePoints")
let guestP = document.getElementById("guestPoints") 
let pointsH = 0
let pointsG = 0

function checkWinner () {
    if (pointsG > pointsH) {
        document.getElementById("blackGuest").style.outline = "3px solid green";
        document.getElementById("blackHome").style.outline = "none";
    } else if (pointsH > pointsG) {
        document.getElementById("blackHome").style.outline = "3px solid green";
        document.getElementById("blackGuest").style.outline = "none";
    } else {
        document.getElementById("blackGuest").style.outline = "none";
        document.getElementById("blackHome").style.outline = "none";
    }
}

function reset() {
    pointsH = 0
    pointsG = 0
    homeP.textContent = pointsH
    guestP.textContent = pointsG
}

function plusOneH() {
    pointsH += 1
    homeP.textContent = pointsH
}

function plusTwoH() {
    pointsH += 2
    homeP.textContent = pointsH
}

function plusThreeH() {
    pointsH += 3
    homeP.textContent = pointsH
}

function plusOneG() {
    pointsG += 1
    guestP.textContent = pointsG
}

function plusTwoG() {
    pointsG += 2
    guestP.textContent = pointsG
}

function plusThreeG() {
    pointsG += 3
    guestP.textContent = pointsG
}

