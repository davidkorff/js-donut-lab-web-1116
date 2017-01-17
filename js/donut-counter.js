//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.


var guests = prompt("Please enter amount of guests");
var donuts = prompt("Please enter amount of donuts");
parseInt(guests, 10);
parseInt(donuts, 10);

("There are "+ donuts + " donuts, and " + guests + " guests.")
if (guests < donuts){alert("There are "+ donuts + " donuts, and " + guests + " guests. There are enough for everyone!")}
else {
  alert("There are "+ donuts + " donuts, and " + guests + " guests. There are not enough for everyone!")
}
