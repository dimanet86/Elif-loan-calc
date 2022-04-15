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

document.getElementById('required').addEventListener('submit', function(e) {
    e.preventDefault();
    // Adding new bank to the local storage 
    let form = document.querySelector('form');
    let args = Array.from(form.elements, v => v.value);
    let bank = new Bank(...args);
    localStorage.setItem(bank.name, JSON.stringify(bank));
    currentBank = JSON.parse(localStorage.getItem(bank.name)); // set current bank chosen in the dropdown list
    // Adding new bank to the dropdown 
    let option = document.createElement('option');
    option.value = option.textContent = bank.name;
    availableBanks.add(option, availableBanks.length - 1);
    availableBanks.value = option.value;
    form.reset();
    document.querySelector('.add').classList.add('none'); 
    document.querySelector('.banks').classList.remove('none'); 
    // Adding to the list of availablebanks
    let li = document.createElement('li');
    li.textContent = `${currentBank.name} Rate: ${currentBank.rate} Max loan: ${currentBank.maxloan} Min downpayment: ${currentBank.downpayment} Term: ${currentBank.term}`;
    document.querySelector('.banks ol').append(li);
    setBankAttributes();
    monthlyPayment();
    // making liders enabled
    document.getElementById('initial').disabled = false;  
    document.getElementById('downpayment').disabled = false;
    document.getElementById('months').disabled = false; 
});

document.getElementById('cancel').addEventListener('click', function() {
    document.querySelector('.add').classList.add('none');
    document.querySelector('.banks').classList.remove('none'); 
})