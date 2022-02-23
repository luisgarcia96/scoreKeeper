const p1 = {
    score : 0,
    button : document.querySelector('#p1Button'), 
    display : document.querySelector('#p1Display')
}

const p2 = {
    score : 0,
    button : document.querySelector('#p2Button'), 
    display : document.querySelector('#p2Display')
}


let winningScore = 3;
let isGameOver = false;
const winningScoreSelect = document.querySelector('#playTo');
const resetButton = document.querySelector("#resetButton");



winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetScore();
})

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
})

resetButton.addEventListener('click', resetScore)

/**
 * Cette fonction permet de mettre à jour le score pour un joueur ou l'autre
 * 
 * @param {*} player Un joueur
 * @param {*} opponent Le joueur contraire
 */
function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

/**
 * Cette fonction permet de réinitialiser les résultats et les styles des scores
 */
function resetScore() {
    isGameOver = false;
    for (const p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = '0';
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}