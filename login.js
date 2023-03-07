class Login
{
    #getCookies()
    {
        return document.cookie.split(';');
    }

    #createUser(uname)
    {
        document.cookie = `uname=${uname}`;
    }

    #existingUser()
    {
        let cookies = this.#getCookies();
        let unameCookie = null;
        for (let i = 0; i < cookies.length; i++)
        {
            if (cookies[i].includes("uname"))
            {
                unameCookie = cookies[i].split('=');
            }
        }

        return unameCookie[1];
    }

    static login()
    {
        const unameElem = document.getElementById('username')
        if (document.cookie != '')
        {
            let cookies = document.cookie.split(';');
            let unameCookie = null;
            for (let i = 0; i < cookies.length; i++)
            {
                if (cookies[i].includes("uname"))
                {
                    unameCookie = cookies[i].split('=');
                }
            }

            return unameCookie[1];
        }
        else
        {
            document.cookie = `uname=${unameElem.value}`;
        }
    }

    static getUser()
    {
        let cookies = this.#getCookies();
        let unameCookie = null;
        for (let i = 0; i < cookies.length; i++)
        {
            if (cookies[i].includes("uname"))
            {
                unameCookie = cookies[i].split('=');
            }
        }

        return unameCookie[1];
    }
}

function onLoginLoad()
{
    
}

function loginButton()
{
    Login.login();
}