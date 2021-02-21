const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
//i - flaga i ignoruje duze czy male litery
const letters = /[a-z]/i;
//czy podal cyfry od 0-9
const numbers = /[0-9]/;
//czy zawiera znaki specjalne
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkInput = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special) && pass.value !== " ") {
        p.innerHTML = "Twoje hasło jest bardzo silne!";
        p.style.color = 'yellowGreen';
    }
    else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value !== " "){
        p.innerHTML = "Twoje hasło jest silne!";
        p.style.color = 'seaGreen';
    }
    else{
        p.innerHTML = "Niestety, twoje hasło jest za słabe lub zawiera spację!";
        p.style.color = 'crimson';
    }
}



pass.addEventListener('keyup', function(){
    if (pass.value !== ''){
checkInput();
    }
    else
    {
        p.innerHTML = "Pole hasło nie jest wypełnione. Wpisz hasło";
        p.style.color = '';
    }
});































