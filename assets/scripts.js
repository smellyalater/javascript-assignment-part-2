// 1. Write a program that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, let the user know what the variable was and that it was greater than 10.

var number = 4
if (number < 10 ) {
  console.log('Hey, you\'re number is less than 10.  That\'s great!')
} else {
  console.log('Your number is ' + number + ' and not less than 10.')
};

// 2.  Declare a function that takes a name as an argument and tells the user what name they've entered, try invoking it after it has been declared

function theNameFunction(theName) {
  console.log("Your name is " + theName + ".");
}
theNameFunction("Bowie");

// 3. Declare a function that takes no arguments but prints something to the console, try invoking it after it has been declared

//AMC - I don't know how to do this. 


// 4.  Create a `for` loop that "sings" the classic song "99 Bottles of Root Beer on the Wall". The code it outputs to the console should look similar to this:
//"99 ttles of root beer on the wall, 99 bottles of root beer...take one down, pass it around 98 bottles of root beer on the wall, 98 bottles of root beer on the wall, 98 bottles of root beer...take one down, pass it around 97 bottles of root beer on the wall," etc., all the way to 0 bottles.


for (var i = 100; i >= 1; i--) {
console.log(i + ' bottles of beer on the wall. ' + i + ' bottles of beer.' + i + ' Take one down, pass it around ');
}



