function updateScore(team, points) {
    const scoreElement = document.getElementById(team + 'Score');
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}

function resetScores() {
    document.getElementById('homeScore').textContent = 0; // Set home score to 0
    document.getElementById('guestScore').textContent = 0; // Set guest score to 0
}