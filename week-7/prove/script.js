const creditForm = document.getElementById('cardForm');
const numInput = document.getElementById('cardNumber');
const nameInput = document.getElementById('cardHolder');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc');
const date = new Date();
const month = date.toLocaleString('default', { month: '2-digit' });
const year = date.getFullYear();

creditForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if(cardCheck()){
        let correctInfo = confirm(`Thank you, ${nameInput.value}!
Do You want to continue with this information:
CardNumber: ${numInput.value}
Expiration: ${monthInput.value}/${yearInput.value}
CVC: ${cvcInput.value}`);
        if (correctInfo) {
            alert('YOUCH! you j got swiped for $199.99 😬');
        }
        else {
            alert("Welp! There's always next time!");
        }
    }
    creditForm.reset();
});

function cardCheck() {
    if (!numInput.value == '1234123412341234')
    {
        alert('That card number is not valid, try again!');
        return false;
    }
    else if (parseInt(yearInput.value) + 2000 < parseInt(year) || parseInt(yearInput.value) + 2000 == parseInt(year) && parseInt(monthInput.value) < parseInt(month))
    {
        alert('Your card is expired, try again!');
        return false;
    } else {
        return true;
    }
}