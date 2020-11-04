const input = document.querySelector('.calculator__input');
let value = [];
let primer = {};

document.querySelector('.calculator__buttons').addEventListener('click', function(e) {
    if (e.target.classList.contains('button__number') && e.target.textContent == 'AC') {
        input.value = '';
        value = [];
        primer = {};
    } else if (e.target.classList.contains('button__number')) {
        const number = e.target.textContent;
        if(value.length < 9 && number == 1 || number == 2 || number == 3 || number == 4 || number == 5 || number == 6 || number == 7 || number == 8 || number == 9 || number == 0 || number == ',') {
            if(number == ',') {
                let number = '.';
                value.push(number);
            } else {
                value.push(number); 
            }
        }
        input.value = value.join('');
    } else if (e.target.classList.contains('math_calculate') && e.target.classList.contains('math_percent')) {
        value = [];
        primer.number2 = input.value;
        primer.calculate_type = e.target.querySelector('.math_calculate_child').textContent;
        calculate(primer.number1, primer.number2);
    } else if (e.target.classList.contains('math_percent_child')) {
       
        value = [];
        primer.number2 = input.value;
        primer.calculate_type = e.target.textContent;
        calculate(primer.number1, primer.number2);
    } else if (e.target.classList.contains('math_calculate')) {
        value = [];
        primer.number1 = input.value;
        primer.calculate_type = e.target.querySelector('.math_calculate_child').textContent;
    } else if (e.target.classList.contains('math_calculate_child')) {
        value = [];
        primer.number1 = input.value;
        primer.calculate_type = e.target.textContent;
    }
    else if (e.target.classList.contains('math_count')) {
        value = [];
        primer.number2 = input.value;
        calculate(primer.number1, primer.number2);
    }  else {
        const number = e.target.querySelector('.button__number').textContent;
        if(value.length < 9  && number == 1 || number == 2 || number == 3 || number == 4 || number == 5 || number == 6 || number == 7 || number == 8 || number == 9 || number == 0 || number == ',') {
            if(number == ',') {
                let number = '.';
                value.push(number);
            } else {
                value.push(number); 
            }
        }
        input.value = value.join('');
    }
})

document.addEventListener('keydown', function(e) {
    if(Number(e.key)) {
        value.push(e.key);
        input.value = value.join('');
    }
})

function valueFormat(number) {
    let clearNumber = number.join('');
    if(clearNumber.length > 3) {
        var n = clearNumber.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    } else {
        return clearNumber;
    }
}

function calculate(a,b) {
    if(primer.calculate_type === '+') {
        let amount = Number(a) + Number(b);
        input.value = amount.toFixed(2);
    }
    if(primer.calculate_type === 'X') {
        let amount = Number(a) * Number(b);
        input.value = amount.toFixed(2);
    }
    if(primer.calculate_type === '-') {
        let amount = Number(a) - Number(b);
        input.value = amount.toFixed(2);
    }
    if(primer.calculate_type === '/') {
        let amount = Number(a) / Number(b);
        input.value = amount.toFixed(2);
    }
    if(primer.calculate_type === '%') {
        let amount = Number(a) * Number(b) / 100;
        input.value = amount.toFixed(2);
    }
}