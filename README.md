# Elif-loan-calc
Loan calculator test task made by Dima Reshetnikov
https://dimanet86.github.io/Elif-loan-calc/

## Overview

### Loan calculator is a one-page application for computing monthly payment charged by banks to pay the loan. UI consists of two sections: 

![image](https://user-images.githubusercontent.com/53656936/163622966-ff9a66cf-d83c-4694-8b71-64a6aa852e4b.png)

1. Left setion is devoted to display input of loan ammount, downpayment and number of months using sliders set to meet constraints put by chosen bank. Bank can be chosen using drop-down list above input block. In addition drop-down list contains an option to add a new bank to the list of banks. 
Dragging sliders left or right makes monthly payment amount to show at the bottom of the section, changing dynamically. Also, when user decides to select other bank using drop-down application will recalculate payment using data for previous chosen bank if applicable.

2. Section on the right at first displays a list of banks already available and offers two options: either to add a new bank (behaves similarly to drop-down add option) or clear the list and start fully from scratch, like at first use. 
After pressing "Add new bank" button user is offered to fill out a form and either submit it or reset. Cancel button returns user to the list of available banks. 
Submitting new bank sets newly created bank as a chosen bank in drop-down menu and immediately allows compute monthly payment with a data of this bank.  

![image](https://user-images.githubusercontent.com/53656936/163623929-7ddd8cfd-a546-409a-b734-aca3e849b37f.png)

### Deployed application can be found here: 
https://dimanet86.github.io/Elif-loan-calc/
