class ColorSequence
{
    #sequence = null;

    constructor()
    {
        this.#sequence = [];
    }

    addRandomColor()
    {
        let colorVal = Math.floor(Math.random() * (3 - 0 + 1) + 0);
        this.#sequence.push(colorVal);
    }

    getSequence()
    {
        return this.#sequence;
    }

    clearSequence()
    {
        this.#sequence = [];
    }
}

let simonSequence = new ColorSequence();

function initiateSimon()
{
    simonSequence.addRandomColor();
    playSequence();
}

function playSequence()
{
    let sequenceArr = simonSequence.getSequence();
    for (let i = 0; i < sequenceArr.length; i++)
    {
        switch (sequenceArr[i])
        {
            case 0:
                setTimeout(lightTL, 500);
                break;
            case 1:
                setTimeout(lightTR, 500);
                break;
            case 2:
                setTimeout(lightBL, 500);
                break;
            case 3:
                setTimeout(lightBR, 500);
                break;
        }
    }
}

function lightTL()
{
    const simonTL = document.getElementById('simon-tl');
    simonTL.style.backgroundColor = "var(--simon-tl-light)";
    setTimeout(() => {
        simonTL.style.backgroundColor = "var(--simon-tl-dark)";
    }, 1000);
}

function lightTR()
{
    const simonTR = document.getElementById('simon-tr');
    simonTR.style.backgroundColor = "var(--simon-tr-light)";
    setTimeout(() => {
        simonTR.style.backgroundColor = "var(--simon-tr-dark)";
    }, 1000);
}

function lightBL()
{
    const simonBL = document.getElementById('simon-bl');
    simonBL.style.backgroundColor = "var(--simon-bl-light)";
    setTimeout(() => {
        simonBL.style.backgroundColor = "var(--simon-bl-dark)";
    }, 1000);
}

function lightBR()
{
    const simonBR = document.getElementById('simon-br');
    simonBR.style.backgroundColor = "var(--simon-br-light)";
    setTimeout(() => {
        simonBR.style.backgroundColor = "var(--simon-br-dark)";
    }, 1000);
}