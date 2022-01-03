///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce(function(acc,curr){
 
    return acc + curr.price
  },0)
 console.log(`Total price is ${summedPrice}`)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal,couponValue,tax)=>{
    return cartTotal*(1+tax)-couponValue
}
console.log(`After taxes and aplied coupon due is: ${calcFinalPrice(100,10,0.08)}`)


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
name: "Customer's name"  //the best way is to identify customers is by their name. string, because it will be a text.
age: Age written as a number//knowing age helps us to pick products for the customer. number, because it is an age and will be changed each year.
phoneNumber: "number as a string"//In case we need to reach the customer. string, because it most likely will not change.
email: "email as a string"//To notify about updates. String, because won't change most likely.
goodCustomer: true or false statement//For us to know if this customer caused problems previously. Boolean,because either good or not.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "John Frise",
    age: 35,
    phoneNumber: "7072252385",
    emailAddress: "johnfrise@gmail.com",
    goodCustomer: true
}
