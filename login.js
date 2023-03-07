class Login
{
    static login(uname)
    {
        if (document.cookie != '')
        {
            return this.#existingUser(uname);
        }
        else
        {
            this.#createUser(uname);
        }
    }

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
}