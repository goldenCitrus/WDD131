const button1 = document.getElementById("button1");
const main = document.querySelector('main');
let gradeSelection = document.getElementById('mystery');
let students = [
    {last: 'Andrus', first: 'Aaron', points: 0},
    {last: 'Masa', first:'Manny', points: 0},
    {last: 'Tanda', first: 'Tamanda', points: 0}
]; 
let magicIndex = 0;
let gradeText = `= ${students[magicIndex].points}`;
let isThereAnInput = false;

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
for (let i = 0; i < words.length; i++)
{
    console.log(words[i]);
}

button1.addEventListener('mousedown', clickEffect);
button1.addEventListener('mouseup', clickEffect);
button1.addEventListener('click', activate);

function clickEffect() {
    button1.classList.toggle('click');
}

function activate() {
    words.push('zombo');
    console.log('shhhh... 🤫');
    button1.style.display = 'none';
    let section = document.createElement('section');
    section.id = 'mysteriousSection';

    let selectionMenu = document.createElement('select');
    const option = document.createElement('option');
    option.textContent = '???????????????';
    selectionMenu.style.display = 'inline-block';
    selectionMenu.appendChild(option);
    selectionMenu.id = 'mystery';
    selectionMenu.ariaLabel = 'student selection menu';
    section.appendChild(selectionMenu);

    let p = document.createElement('p');
    p.textContent = gradeText;
    p.style.display = 'inline-block';
    p.style.paddingLeft = '4px';
    p.id = 'mysteriousText';
    section.appendChild(p);

    studentIndex = 0;
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = studentIndex;
        option.textContent = `${student.first} ${student.last}`;
        // console.log(option.textContent);
        selectionMenu.appendChild(option);
        studentIndex++;
    })

    selectionMenu.addEventListener('change', givePurpose);
    
    main.appendChild(section);
}

function givePurpose(e) {
    if (isThereAnInput == false)
    {
        isThereAnInput = true;
        let input = document.createElement('input');
        input.id = 'mysteriousInput';
        input.type = 'text';
        input.placeholder = 'Enter a letter A-F';
        input.style.display = 'block';
        
        let label = document.createElement('label');
        label.textContent = "Input a letter between A and F"
        label.setAttribute('for', 'mysteriousInput');
        
        let submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.id = 'submit';
        submitButton.style.display = 'inline-block';

        // section.appendChild(input, label);
        submitButton.addEventListener('click', function() {
            convert(input.value.toUpperCase(), students[magicIndex]);
            if (magicIndex >= 10)
            {
                console.log('ZOMBO');
            }
            input.value = '';
        });
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter')
            {
                convert(input.value.toUpperCase(), students[magicIndex]);
                if (students[magicIndex].points >= 10)
                {
                    console.log('ZOMBO');
                }
                input.value = '';
            }
        });

        let section = document.getElementById("mysteriousSection");
        section.appendChild(input);
        // section.appendChild(label);
        section.appendChild(submitButton);

    }

    magicIndex = document.getElementById('mystery').value;
    gradeText = `= ${students[magicIndex].points}`;
    document.getElementById("mysteriousText").textContent = gradeText;

}

function convert(grade, student) {
    console.log(`grade:${grade}, student:${student.first} ${student.last} points:${student.points}`);
    switch (grade){
        case 'A':
            student.points += 4;
            break;
        case 'B':
            student.points += 3;
            break;
        case 'C':
            student.points += 2;
            break;
        case 'D':
            student.points += 1;
            break;
        case 'F':
            student.points += -1;
            break;
        case 'ZOMBO':
            window.open("https://web.archive.org/web/20210731103454/https://zombo.com/");
            break;
        case 'WATERMELON':
            window.open("https://www.watermelon.com/");
            break;
        case 'PEACH':
            window.open("https://www.youtube.com/watch?v=FEFNUbNJwzU");
            break;
        case 'APPLE':
            window.open("https://www.apple.com/");
            break;
        case 'TOMATO':
            window.open("https://www.eelslap.com");
            break;
        case 'GRAPE':
            window.open("https://www.ayntec.com/products/ayn-thor?variant=46692546642112");
            break;
        default:
            alert('invalid input.');
    }
    gradeText = `= ${students[magicIndex].points}`;
    document.getElementById("mysteriousText").textContent = gradeText;
}
