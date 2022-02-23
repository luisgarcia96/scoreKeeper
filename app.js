let p1Score = 0;
let p2Score = 0;

let winningScore = 5;
let isGameOver = false;

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector("#resetButton");

p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
        p1Display.innerText = p1Score;
    }
})

p2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
        p2Display.innerText = p2Score;
    }
})

resetButton.addEventListener('click', function() {
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = '0';
    p2Display.innerText = '0';
})