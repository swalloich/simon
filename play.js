class ColorSequence
{
    #sequence = null;
    #sequenceLength = null;

    constructor()
    {
        this.#sequence = [];
        this.#sequenceLength = 0;
    }

    addRandomColor()
    {
        let colorVal = Math.floor(Math.random() * (3 - 0 + 1) + 0);
        this.#sequence.push(colorVal);
        this.#sequenceLength++;
    }

    getSequence()
    {
        return this.#sequence;
    }

    clearSequence()
    {
        this.#sequence = [];
        this.#sequenceLength = 0;
    }

    getSequenceLength()
    {
        return this.#sequenceLength;
    }
}

let simonSequence = new ColorSequence();
let clickedSequence = [];
let clicked = 0;

function initiateSimon()
{
    simonSequence.addRandomColor();
    playSequence();
}

async function playSequence()
{
    const tlButton = document.getElementById("simon-tl");
    const trButton = document.getElementById("simon-tr");
    const blButton = document.getElementById("simon-bl");
    const brButton = document.getElementById("simon-br");

    tlButton.disabled = true;
    trButton.disabled = true;
    blButton.disabled = true;
    brButton.disabled = true;

    let sequenceArr = simonSequence.getSequence();
    for (let i = 0; i < sequenceArr.length; i++)
    {
        switch (sequenceArr[i])
        {
            case 0:
                await doTL();
                break;
            case 1:
                await doTR();
                break;
            case 2:
                await doBL();
                break;
            case 3:
                await doBR();
                break;
        }
    }

    tlButton.disabled = false;
    trButton.disabled = false;
    blButton.disabled = false;
    brButton.disabled = false;
}

async function doTL()
{
    return new Promise((resolve) => {
        setTimeout(async () => {
            resolve(await lightTL());
        }, 500);
    });
}

function lightTL()
{
    const simonTL = document.getElementById('simon-tl');
    simonTL.style.backgroundColor = "var(--simon-tl-light)";
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(simonTL.style.backgroundColor = "var(--simon-tl-dark)");
        }, 1000);
    });

    /*setTimeout(() => {
        simonTL.style.backgroundColor = "var(--simon-tl-dark)";
    }, 1000);*/
}

async function doTR()
{
    return new Promise((resolve) => {
        setTimeout(async () => {
            resolve(await lightTR());
        }, 500);
    });
}

function lightTR()
{
    const simonTR = document.getElementById('simon-tr');
    simonTR.style.backgroundColor = "var(--simon-tr-light)";
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(simonTR.style.backgroundColor = "var(--simon-tr-dark)");
        }, 1000);
    });

    /*setTimeout(() => {
        simonTR.style.backgroundColor = "var(--simon-tr-dark)";
    }, 1000);*/
}

async function doBL()
{
    return new Promise((resolve) => {
        setTimeout(async () => {
            resolve(await lightBL());
        }, 500);
    });
}

function lightBL()
{
    const simonBL = document.getElementById('simon-bl');
    simonBL.style.backgroundColor = "var(--simon-bl-light)";
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(simonBL.style.backgroundColor = "var(--simon-bl-dark)");
        }, 1000);
    });

    /*setTimeout(() => {
        simonBL.style.backgroundColor = "var(--simon-bl-dark)";
    }, 1000);*/
}
async function doBR()
{
    return new Promise((resolve) => {
        setTimeout(async () => {
            resolve(await lightBR());
        }, 500);
    });
}

function lightBR()
{
    const simonBR = document.getElementById('simon-br');
    simonBR.style.backgroundColor = "var(--simon-br-light)";
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(simonBR.style.backgroundColor = "var(--simon-br-dark)");
        }, 1000);
    });

    /*setTimeout(() => {
        simonBR.style.backgroundColor = "var(--simon-br-dark)";
    }, 1000);*/
}

function sequenceAdd(btn)
{
    clickedSequence.push(btn);
    clicked++;

    console.log(clickedSequence);

    let match = true;
    if (clicked == simonSequence.getSequenceLength())
    {
        let tempSequence = simonSequence.getSequence();
        for (let i = 0; i < tempSequence.length; i++)
        {
            if (tempSequence[i] != clickedSequence[i])
            {
                match = false;
                console.log("sequences don't match");
                break;
            }
        }

        if (match)
        {
            simonSequence.addRandomColor();
            playSequence();
            console.log("added new color:");
            console.log(simonSequence.getSequence());
        }
        else
        {
            // store score
            // set score to 0
            // clear sequences
        }

        clickedSequence = [];
        clicked = 0;
        console.log("reset clicked");
    }
}