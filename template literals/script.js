
let output = document.getElementById("output");

function processText() {
    let text = document.getElementById("code").value;
    let processedText = `You entered: ${text}`;
    output.innerText = processedText;
}