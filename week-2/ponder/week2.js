let selectElem = document.getElementById('webdevlist');
let ogValue = {};

function functionMode() {
    console.log(ogValue)
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).textContent = "EVIL " + document.getElementById(codeValue).textContent;
    ogValue = document.getElementById(codeValue).textContent
    console.log(ogValue)
}
selectElem.addEventListener('change', functionMode);
                