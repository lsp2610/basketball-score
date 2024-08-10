let homeScore = document.getElementById("score-home")
let awayScore = document.getElementById("score-away")


function home_1() {
    homeScore.textContent = Number(homeScore.textContent) + 1;
}

function home_2() {
    homeScore.textContent = Number(homeScore.textContent) + 2;
}

function home_3() {
    homeScore.textContent = Number(homeScore.textContent) + 3;
}

function away_1() {
    awayScore.textContent = Number(awayScore.textContent) + 1;
}

function away_2() {
    awayScore.textContent = Number(awayScore.textContent) + 2;
}

function away_3() {
    awayScore.textContent = Number(awayScore.textContent) + 3;
}

function reset() {
    awayScore.textContent = 0
    homeScore.textContent = 0
}