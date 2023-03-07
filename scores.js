class Scores
{
    static getScores()
    {
        let cookies = document.cookie.split(';');
        let hasScores = false;

        for (let i = 0; i < cookies.length; i++)
        {
            if (cookies[i].includes('scores'))
            {
                hasScores = true;
                return cookies[i].split('=')[1];
            }
        }
    }

    static writeScore(score)
    {
        let cookies = document.cookie.split(';');
        let hasScores = false;

        for (let i = 0; i < cookies.length; i++)
        {
            if (cookies[i].includes('scores'))
            {
                hasScores = true;
            }
        }

        if (hasScores == true)
        {
            // get json
            // decode into object array
            // add new score
            // write it
        }
        else
        {
            // encode scores as json array
            // write json array as cookie
        }
    }
}

function writeScore()
{
    const scoreElem = document.getElementById('score');
    Scores.writeScore(scoreElem.value);
}

function displayScores()
{
    const displayElem = document.getElementById('score-table');
    // use json to make a table containing scores
}