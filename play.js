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

}

function continueSequence()
{

}

function playSequence()
{
    let sequenceArr = simonSequence.getSequence();
    for (let i = 0; i < sequenceArr.getSequence().length; i++)
    {
        switch (sequenceArr[i])
        {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }
}

function lightTL()
{
    set
}

function lightTR()
{

}

function lightBL()
{

}

function lightBR()
{

}