let initialLoan = 0, downPayment = 0, months = 0;
let initialSlider = document.querySelector('#initial');
let initialField = document.querySelector('#initialField');
let downpaymentSlider = document.querySelector('#downpayment');
let downpaymentField = document.querySelector('#downpaymentField');
let monthsSlider = document.querySelector('#months');
let monthsField = document.querySelector('#monthsField');
let currentBank = null;
let availableBanks = document.querySelector('select#availableBanks');
let addList = document.querySelector('button#addList');
let clear = document.querySelector('button#clear');

availableBanks.addEventListener('change', function (e) {
    if (e.target.value == 'add') {
        document.querySelector('.add').classList.remove('none');
        document.querySelector('.banks').classList.add('none'); // !!!
    } else {
        currentBank = JSON.parse(localStorage.getItem(e.target.value));
        monthlyPayment();
    }
    // здесь дальше ставим границы на изменение вводов
});

addList.addEventListener('click', function(){
    document.querySelector('.add').classList.remove('none');
    document.querySelector('.banks').classList.add('none'); // !!!
});

clear.addEventListener('click', function(){ 
    localStorage.clear();
    document.location.reload();
});

function monthlyPayment() {
    if(!currentBank || availableBanks.value == 'add') {
        document.querySelector('#result h3').textContent = "Please choose the bank from dropdown above";
    } else {
    let P = initialLoan - downPayment;
    let rate = currentBank.rate / 100; 
    let monthlyRate = rate / 12;
    document.querySelector('h3').textContent = Math.round((P * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1) * 100) / 100;
    }
}

initialSlider.addEventListener('input', function(e){
    initialField.value = e.target.value;
    initialLoan = Number(e.target.value);
    monthlyPayment();
});

initialField.addEventListener('input', function(e){
    initialSlider.value = e.target.value;
    initialLoan = Number(e.target.value);
    monthlyPayment();
});

downpaymentSlider.addEventListener('input', function(e){
    downpaymentField.value = e.target.value;
    downPayment = Number(e.target.value);
    monthlyPayment();
});

downpaymentField.addEventListener('input', function(e){
    downpaymentSlider.value = e.target.value;
    downPayment = Number(e.target.value);
    monthlyPayment();
});

monthsSlider.addEventListener('input', function(e){
    monthsField.value = e.target.value;
    months = Number(e.target.value);
    monthlyPayment();
});

monthsField.addEventListener('input', function(e){
    monthsSlider.value = e.target.value;
    months = Number(e.target.value);
    monthlyPayment();
});