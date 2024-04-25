// Global Variables


function match()
{
    let input = document.getElementById("input-text").value;
    let pattern = new RegExp(document.getElementById("regex-pattern").value);
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

    let array1;

    while ((array1 = pattern.exec(input)) !== null) {
        console.log(`Found ${array1[0]}. Next starts at ${pattern.lastIndex}.`);
    }
}