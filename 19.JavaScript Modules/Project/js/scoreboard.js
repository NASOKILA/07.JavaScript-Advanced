let scoreboard = function () {

    let results = [];

    function addResult(newResult) {
        results.push(newResult);
    }

    function updateScoreboard() {

        let output = `<h2>Scoreboard</h2>`;

        for (let result of results) {
            output += `<h4>${result.name}: ${result.score}/${result.problems} for factor ${result.factor}</h4>`
        }

        let scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    }

    return {
        addResult: addResult,
        updateScoreboard: updateScoreboard
    }

}();