//add bank block
class Bank { // Self-explanatory class
    constructor(name, rate, maxloan, downpayment, term) {
        this.name = name;
        this.rate = Number(rate);
        this.maxloan = Number(maxloan);
        this.downpayment = Number(downpayment);
        this.term = Number(term);
    }
};

document.querySelector('#add').addEventListener('click', function(e) {
    e.preventDefault();
    let form = document.querySelector('form');
    let args = Array.from(form.elements, v => v.value);
    let bank = new Bank(...args);
    let option = document.createElement('option');
    localStorage.setItem(bank.name, JSON.stringify(bank));
    option.value = option.textContent = bank.name;
    availableBanks.add(option, availableBanks.length - 1);
    availableBanks.value = option.value;
    currentBank = JSON.parse(localStorage.getItem(option.value));
    form.reset();
    document.querySelector('.add').classList.add('none'); // ATTENTION!!!
    document.querySelector('.banks').classList.remove('none'); // ATTENTION!!
    let li = document.createElement('li');
    li.textContent = bank.name;
    document.querySelector('.banks ol').append(li);
    monthlyPayment();
});