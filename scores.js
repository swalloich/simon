class Scores
{
    static getScores(uname)
    {
        return false;
    }

    static writeScore(uname, score)
    {
        
    }

    #getScoreCookie()
    {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++)
        {
            if (cookies[i].includes('scores'))
            {
                return cookies[i].split('=');
            }
        }
    }

    #scoreJson(jsonString)
    {
        return JSON.parse(jsonString);
    }
}