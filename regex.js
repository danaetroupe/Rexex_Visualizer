// Global Variables


const ANIM_SECONDS = 5
  
function drawText(indexes)
{
    const canvas = document.getElementById("regex-canvas")
    if (canvas)
    {
        const ctx = canvas.getContext("2d");
        ctx.font = "48px serif";
        let xPos = 0
        let yPos = 0
        let val;
        let index = 0;
        var id;
        var outId;
        while (index < indexes.length)
        {
            var outId = setInterval(runLoop, 60);
            xPos += 50;
            index ++;
        }
        

        function runLoop() 
        {
            if (index < indexes.length) {
                val = indexes[index];
                id = setInterval(animate, 5);
            } else
            {
                clearInterval(outId);
            }
            
        }

        function animate()
        {
            if (yPos == canvas.height/2) { clearInterval(id);}
            else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillText(val, xPos, yPos);
                yPos++;
            }
        }
    }
}




function match()
{
    let input = document.getElementById("input-text").value;
    let pattern = new RegExp(document.getElementById("regex-pattern").value);

    pattern.exec(input) == input
        ? console.log("Pattern matches.") :
        console.log("Pattern does not match.");
    
}

function search()
{
    let input = document.getElementById("input-text").value;
    let pattern = new RegExp(document.getElementById("regex-pattern").value, 'gd');

    let array1 = input.match(pattern);
    drawText(array1)
}