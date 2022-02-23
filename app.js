let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameOver = false;

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const winningScoreSelect = document.querySelector('#playTo');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector("#resetButton");

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetScore();
})

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.innerText = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.innerText = p2Score;
    }
})

resetButton.addEventListener('click', resetScore)

/**
 * Cette fonction permet de réinitialiser les résultats et les styles des scores
 */
function resetScore() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = '0';
    p2Display.textContent = '0';
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}