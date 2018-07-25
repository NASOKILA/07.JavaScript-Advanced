let game = function () {

    let factorElement = document.getElementById('factor');
    let problemsPerGame = 3;

    function printGame() {

        player.logPlayer();

        setProblemCount(document.getElementById('problemCount').value);

        let gameForm = '';

        for (let i = 1; i <= problemsPerGame; i++) {
            gameForm += `<div class="form-group">`;
            gameForm += `<label for="answer${i}" class="col-sm-2 control-label">`;
            gameForm += `${factorElement.value} x ${i} = </label>`;
            gameForm += `<div class="col-sm-1"><input type="text" class="form-control" id="answer${i}">`;
            gameForm += `</div>`;
        }

        let gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    }

    function calculateScore() {

        let problemsInGame = getProblemCount();
        let score = 0;

        for (let i = 1; i <= problemsInGame; i++) {
            let answer = document.getElementById(`answer${i}`).value;
            if (i * factorElement.value == answer) {
                score++;
            }
        }

        let result = {
            name: player.getName(),
            score: score,
            problems: problemsInGame,
            factor: factorElement.value
        };

        scoreboard.addResult(result);
        scoreboard.updateScoreboard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }

    function setProblemCount(newProblemCount) {
        problemsPerGame = newProblemCount;
    }

    function getProblemCount() {
        return problemsPerGame;
    }

    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };

}();