// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}

//var bestCustomer = 'jay';
function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'dad'
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'mom'
}