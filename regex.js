// Global Variables


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
    let pattern = new RegExp(document.getElementById("regex-pattern").value, 'g');

    let array1;

    while ((array1 = pattern.exec(input)) !== null) {
        console.log(`Found ${array1[0]}. Next starts at ${pattern.lastIndex}.`);
    }
}