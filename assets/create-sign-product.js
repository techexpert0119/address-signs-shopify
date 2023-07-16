const LetterWidths = {
    "0": 6.1,
    "1": 5.2,
    "2": 7,
    "3": 6.7,
    "4": 6.7,
    "5": 6.5,
    "6": 5.7,
    "7": 6.3,
    "8": 6,
    "9": 5.7,
    ",": 2.1,
    ".": 1.4,
    "A": 11.7,
    "a": 6.2,
    "'": 2.1,
    "B": 11.1,
    "b": 4.6,
    "C": 7.4,
    "c": 4.3,
    "D": 10.7,
    "d": 7.4,
    "-": 3.5,
    "E": 8,
    "e": 4.5,
    "F": 11.1,
    "f": 11,
    "G": 10,
    "g": 7.3,
    "H": 14.4,
    "h": 6.7,
    "I": 10,
    "i": 4,
    "J": 11.7,
    "j": 8.5,
    "K": 12.7,
    "k": 6.8,
    "L": 10.1,
    "l": 5,
    "M": 14.1,
    "m": 9.5,
    "N": 13.5,
    "n": 6.8,
    "O": 7.4,
    "o": 4.6,
    "P": 10.7,
    "p": 7.4,
    "Q": 8.5,
    "q": 5.6,
    "R": 11,
    "r": 3.4,
    "S": 8,
    "s": 3.4,
    " ": 5,
    "T": 11.2,
    "t": 4.4,
    "U": 10,
    "u": 6.2,
    "V": 8.7,
    "v": 4.4,
    "W": 10.5,
    "w": 7,
    "X": 11.3,
    "x": 5.8,
    "Y": 11,
    "y": 7.4,
    "Z": 11.3,
    "z": 5.6
  };
  
// Create a mapping of letters to decimal values
// var letterValues = {};
// var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// for (var i = 0; i < letters.length; i++) {
//     var letter = letters[i];
//     var value = Math.random() * 2 + 1.5;  // random number between 1.5 and 3.5
//     letterValues[letter] = value;
// }
console.log(LetterWidths);
// Function to calculate the total value of a string
function calculateValue(str) {
    var total = 0;
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        if (LetterWidths.hasOwnProperty(letter)) {
            total += LetterWidths[letter];
        }
    }
    return total;
}

// Function to handle keyup events
function countValue() {
    var textInput = document.getElementById('textInput');
    var countDisplay = document.getElementById('countDisplay');
    var total = calculateValue(textInput.value);
    countDisplay.textContent = total.toFixed(2);  // display total to 2 decimal places
}
