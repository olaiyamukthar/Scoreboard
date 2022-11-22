let hPoints = document.getElementById("h-points")
let gPoints = document.getElementById("g-points")

let count = 0

function newGame() {
    hPoints.textContent = count
    gPoints.textContent = count
    hCount = count
    gCount = count
}

let hCount = 0

function addOne() {
    hCount += 1
    hPoints.textContent = hCount
}

function addTwo() {
    hCount += 2
    hPoints.textContent = hCount
}

function addThree() {
    hCount += 3
    hPoints.textContent = hCount
}

let gCount = 0

function addOnee() {
    gCount += 1
    gPoints.textContent = gCount
}

function addTwoo() {
    gCount += 2
    gPoints.textContent = gCount
}

function addThreee() {
    gCount += 3
    gPoints.textContent = gCount
}