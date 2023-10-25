//Bronze: Adds a header
//Header - [variable is header] --> goes to document, gets the id header from HTML
var header = document.getElementById('header');

//Uses the header variable then adds textContent to it.
header.textContent = 'JavaScript Made This!!';

//Uses header then uses classlist to search the css file to add the css class to the header
header.classList.add('header');

//Uses header, searches through styles, applies the fontsize property to the header 
header.style.fontSize = '24px';

//myName Variable
var myName = document.createElement('p');

myName.textContent = 'Matthew';

myName.classList.add('name');

//Moves the text inline with extraText
myName.style.display = 'inline';

//extraText Variable
var extraText = document.createElement('p');

extraText.textContent = ' wrote the JavaScript';

extraText.style.display = 'inline';

//nameContainer Variable - contains the 'myName' and 'extraText' variables
var nameContainer = document.createElement('span');

nameContainer.style.fontSize = '16px';

//Appending Variable - 
nameContainer.append(myName, extraText);
header.append(nameContainer);



//Silver: - word replacements and clear button
//messages Variable - querySelectorAll finds the class name from the html
var messages = document.querySelectorAll('.message');

//Replacement Object - objects have curly brackets
var wordReplacements = {
"serious": "fun",
"police": "coolest",
"simple": "happy",
"just": "now", 
};

//Replacement for...each loop function with text variables. For each message, words in the conversation are replaced with one of the words in the object
messages.forEach(function (message) {
var originalText = message.textContent;
for (var word in wordReplacements) {
    var replacement = wordReplacements[word];

//This is my first time learning regular expression.To explan "\\b" are boundary assertions. The are used to check the position of the input boundary.
//flags: 
// g is global flag (search) - matches the pattern multiple times
// i is case-insensitive - makes the regex case insensitive
// m is multline - enables multi-line mode("^" and "$" matches the start and end of entire strings)
// s is single line or dotall - causes the "." to match new line characters
// u is unicode - enables support for unicode (Unique numbers for every character)
// y is sticky - starts matching at the position the "lastIndex" propety indicates

var regex = new RegExp("\\b" + word + "\\b", "gi");
originalText = originalText.replace(regex, replacement);
}
message.textContent = originalText;
});



//Silver part two:
//Clear Button Variable
var clearButton = document.getElementById('clear-button');

//Message Container Variable
var messagesContainer = document.querySelector('.messages');

//Clear button loop function - creates an onclick function that will remove all text from the conversation
clearButton.addEventListener('click', function () {
    while (messagesContainer.firstChild) {
        messagesContainer.removeChild(messagesContainer.firstChild);
    }
});



//Gold: Adds a background function
//dropdown Variable
var dropdown = document.getElementById('theme-drop-down');

//Object
var themes = {
    'theme-one': ['lightblue', 'burlywood'],
    'theme-two': ['red', 'black']
};
//function - % is an operator that refers to the remainder when [index/themeColors.length]
//it's supposed to keep the index within the bounds of themeColors
dropdown.addEventListener('change', function() {
    var selectedTheme = dropdown.value;
    var themeColors = themes[selectedTheme];
    if (themeColors) {
    messages.forEach(function (message, index) {
        message.style.backgroundColor = themeColors[index % themeColors.length];
    });
}
});

