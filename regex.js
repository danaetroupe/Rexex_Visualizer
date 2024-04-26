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

function match() {
    let input = document.getElementById("input-text").value;
    let pattern = document.getElementById("regex-pattern").value;
    let canvas = document.getElementById("regex-canvas");
    let context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);  // clear

    let regex = new RegExp(pattern, 'g');
    let match;
    let offsetY = 20;
    let matchesFound = false;

    // match
    while ((match = regex.exec(input)) !== null) {
        if (!matchesFound) {
            context.font = "14px Arial";
            context.fillStyle = "black";
            context.fillText("Pattern matches: \n", 10, offsetY);

            let patternWidth = context.measureText("Pattern matches: ").width;
            context.fillStyle = "blue";
            context.fillText(`"${pattern}" \n`, patternWidth + 10, offsetY);

            matchesFound = true;
        }

        let matchedText = match[0];
        context.fillStyle = "green";
        context.fillText(`"${input.substring(match.index, (match.index + matchedText.length))}" \n`, patternWidth + context.measureText(`"${pattern}"`).width + 20, offsetY);
        offsetY += 40; // next line
    }

    // no matches found
    if (!matchesFound) {
        context.font = "14px Arial";
        context.fillStyle = "black";
        context.fillText("No matches found. \n", 10, offsetY);
    }
}

function search()
{
    let input = document.getElementById("input-text").value;
    let pattern = new RegExp(document.getElementById("regex-pattern").value, 'gd');

    let array1 = input.match(pattern);
    drawText(array1)
}