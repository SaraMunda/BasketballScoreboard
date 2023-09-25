let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let hScore = 0 
let gScore = 0

function incrementHome1() {
    hScore = hScore + 1;
    homeScore.textContent = hScore;
}

function incrementHome2() {
    hScore = hScore + 2;
    homeScore.textContent = hScore;
}

function incrementHome3() {
    hScore = hScore + 3;
    homeScore.textContent = hScore;
}



function incrementGuest1() {
    gScore = gScore + 1;
    guestScore.textContent = gScore;
}

function incrementGuest2() {
    gScore = gScore + 2;
    guestScore.textContent = gScore;
}

function incrementGuest3() {
    gScore = gScore + 3;
    guestScore.textContent = gScore;
}
