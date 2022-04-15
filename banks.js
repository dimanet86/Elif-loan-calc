//add bank block
class Bank { // Self-explanatory class
    constructor(name, rate, maxloan, downpayment, term) {
        this.name = name;
        this.rate = Number(rate); // percet
        this.maxloan = Number(maxloan); // absolute value
        this.downpayment = Number(downpayment); // percent
        this.term = Number(term); // integer value
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
    li.textContent = `${currentBank.name} Rate: ${currentBank.rate}% Max loan: ${currentBank.maxloan}$ Min downpayment: ${currentBank.downpayment}% Term: ${currentBank.term} months`;
    document.querySelector('.banks ol').append(li);
    setBankAttributes();
    downPayment = currentBank.downpayment;
    monthlyPayment();
    // making liders enabled
    initialSlider.disabled = false;  
    downpaymentSlider.disabled = false;
    monthsSlider.disabled = false; 
    downpaymentField.value = currentBank.downpayment;
});

document.getElementById('cancel').addEventListener('click', function() {
    document.querySelector('.add').classList.add('none');
    document.querySelector('.banks').classList.remove('none'); 
})