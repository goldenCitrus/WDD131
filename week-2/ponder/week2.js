let selectElem = document.getElementById('webdevlist');

const ogText = {
    'html': document.getElementById('html').textContent,
    'css': document.getElementById('css').textContent,
    'js': document.getElementById('js').textContent
};

let changedItemID = '';

function functionMode() {
    if (changedItemID !== '') {
        document.getElementById(changedItemID).textContent = ogText[changedItemID];
        document.getElementById(changedItemID).style.color = 'black';
    }
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).textContent = "EVIL " + document.getElementById(codeValue).textContent;
    document.getElementById(codeValue).style.color = 'red';
    // document.getElementById('thunder').play();
    document.getElementsByClassName(codeValue)[0].play();
    changedItemID = codeValue;
}
selectElem.addEventListener('change', functionMode);
                