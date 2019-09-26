/*Basic
Based on the following two Objects definitions:

var sandwiches = { "sandwich": "hamburger", "calories": "260" };
var fries = { "fries_size": "Large French Fries", "calories": "570" };
print the following message within the browser: My favorite sandwich is a Hamburger 
which has approximately 260 calories, along with it I enjoy eating Large French Fries 
which have about 570 calories.
*/

var sandwiches = { 
	"sandwich": "hamburger", 
	"calories": "260" 
};

var fries = { 
	"fries_size": "Large French Fries", 
	"calories": "570" 
};


document.write("My favorite sandwich is a " + sandwiches.sandwich + 
				" wich has approximately " + sandwiches.calories + 
				" calories, along with it I enjoy eating " + fries.fries_size + 
				" which have about " + fries.calories + "calories.");