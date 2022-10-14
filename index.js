// Write your solution in this file!

var customerName = 'bob'

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return customerName
}

function setBestCustomer(){
    window.bestCustomer = 'not bob'
   return bestCustomer
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    return bestCustomer
}

const leastFavoriteCustomer = 'Kamil'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Hakan'
    return leastFavoriteCustomer
}