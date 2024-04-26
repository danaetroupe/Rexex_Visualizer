// Global Variables


const ANIM_SECONDS = 5
  
function drawText(indexes)
{
    const canvas = document.getElementById("regex-canvas")
    
    const ctx = canvas.getContext("2d");
    ctx.font = "48px serif";
    let text = "";
    indexes.forEach(match => {
        text += match + " ";
    });

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(text, 5, canvas.height/2);
}

function match()
{
    let input = document.getElementById("input-text").value;
    let pattern = new RegExp(document.getElementById("regex-pattern").value);

    pattern.exec(input) == input
        ? console.log("Pattern matches.") :
        console.log("Pattern does not match.");
    
    let resultElement = document.getElementById("regex-canvas");

    let matches = input.match(pattern);

    if (matches !== null) {
        resultElement.innerHTML = "<strong>Pattern matches:</strong><br>";
        matches.forEach(match => {
            resultElement.innerHTML += `<p>"${match}" matches "${pattern}"</p>`;
        });
    } else {
        resultElement.textContent = "Pattern does not match.";
    }
}

function search()
{
    let input = document.getElementById("input-text").value;
    let pattern = new RegExp(document.getElementById("regex-pattern").value, 'gd');

    let array1 = input.match(pattern);
    drawText(array1)
}