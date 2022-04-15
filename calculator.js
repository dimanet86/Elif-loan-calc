let initialLoan = 0, downPayment = 0, months = 1;
let initialSlider = document.querySelector('#initial');
let initialField = document.querySelector('#initialField');
let downpaymentSlider = document.querySelector('#downpayment');
let downpaymentField = document.querySelector('#downpaymentField');
let monthsSlider = document.querySelector('#months');
let monthsField = document.querySelector('#monthsField');
let availableBanks = document.querySelector('select#availableBanks');
let currentBank = null;
let addList = document.querySelector('button#addList');
let clear = document.querySelector('button#clear');

availableBanks.addEventListener('input', function (e) {
    if (e.target.value == 'add') {
        document.querySelector('.add').classList.remove('none');
        document.querySelector('.banks').classList.add('none'); 
        document.querySelector('#result h3').textContent = "Add a bank in a dialog to the right";
    } else if (e.target.value != 'choose') {
        document.querySelector('.add').classList.add('none');
        document.querySelector('.banks').classList.remove('none'); 
        currentBank = JSON.parse(localStorage.getItem(e.target.value));
        initialSlider.disabled = false; // changing attributes for some kind of validation
        downpaymentSlider.disabled = false; // like we cannot have downpayment larger than
        monthsSlider.disabled = false; // initial loan
        setBankAttributes();
        monthlyPayment(); // recalculating for another bank
    } else {
        document.querySelector('#result h3').textContent = "Please choose the bank from dropdown above";
        document.querySelector('.add').classList.add('none');
        document.querySelector('.banks').classList.remove('none'); 
    }
});

function monthlyPayment() {
    if (!currentBank || availableBanks.value == 'choose') {
        document.querySelector('#result h3').textContent = "Please choose the bank from dropdown above";
    } else {
        let P = initialLoan - (downPayment/100)*initialLoan;
        let rate = currentBank.rate / 100;
        let monthlyRate = rate / 12;
        let money = Math.round((P * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1) * 100) / 100;
        document.querySelector('#result h3').textContent = (Number.isFinite(money) || Number.isNaN(money)) ? money : "Please check inputs.";
    }
}

function setBankAttributes() {
    initialSlider.max = currentBank.maxloan;
    downpaymentSlider.min = currentBank.downpayment;
    downpaymentSlider.value = currentBank.downpayment;
    downpaymentField.value = currentBank.downpayment;
    monthsSlider.max = currentBank.term;
}

addList.addEventListener('click', function(){
    document.querySelector('.add').classList.remove('none');
    document.querySelector('.banks').classList.add('none'); 
});

clear.addEventListener('click', function(){ 
    localStorage.clear();
    document.location.reload(true);
});

initialSlider.addEventListener('input', function(e){
    initialLoan = Number(e.target.value);
    initialField.value = initialLoan;
    monthlyPayment();
});

downpaymentSlider.addEventListener('input', function (e) {
    downPayment = Number(e.target.value);
    downpaymentField.value = downPayment;
    monthlyPayment();
});

monthsSlider.addEventListener('input', function(e){
    months = Number(e.target.value);
    monthsField.value = months;
    monthlyPayment();
});