const LetterWidths = {">": 0,"<":0,"\n": 0,"0": 6.1,"1": 5.2,"2": 7,"3": 6.7,"4": 6.7,"5": 6.5,"6": 5.7,"7": 6.3,"8": 6,"9": 5.7,",": 2.1,".": 1.4,"A": 11.7,"a": 6.2,"'": 2.1,"B": 11.1,"b": 4.6,"C": 7.4,"c": 4.3,"D": 10.7,"d": 7.4,"-": 3.5,"E": 8,"e": 4.5,"F": 11.1,"f": 11,"G": 10,"g": 7.3,"H": 14.4,"h": 6.7,"I": 10,"i": 4,"J": 11.7,"j": 8.5,"K": 12.7,"k": 6.8,"L": 10.1,"l": 5,"M": 14.1,"m": 9.5,"N": 13.5,"n": 6.8,"O": 7.4,"o": 4.6,"P": 10.7,"p": 7.4,"Q": 8.5,"q": 5.6,"R": 11,"r": 3.4,"S": 8,"s": 3.4," ": 5,"T": 11.2,"t": 4.4,"U": 10,"u": 6.2,"V": 8.7,"v": 4.4,"W": 10.5,"w": 7,"X": 11.3,"x": 5.8,"Y": 11,"y": 7.4,"Z": 11.3,"z": 5.6};
const letterHeights = {"0": 6.5,"1": 6.4,"2": 6.5,"3": 6.5,"4": 6.6,"5": 6.7,"6": 6.7,"7": 6.5,"8": 6.6,"9": 6.7,",": 2.4,".": 1.4,"A": 7.6,"a": 3.8,"'": 2.4,"B": 7.5,"b": 6.6,"C": 7.6,"c": 3.8,"D": 7.3,"d": 6.6,"-": 1,"E": 7.6,"e": 3.9,"F": 7.5,"f": 9.3,"G": 10,"g": 9.3,"H": 7.5,"h": 6.6,"I": 7.4,"i": 6,"J": 9.1,"j": 9.3,"K": 7.5,"k": 6.6,"L": 7.5,"l": 6.6,"M": 7.7,"m": 3.8,"N": 8.1,"n": 6.8,"O": 7.6,"o": 3.9,"P": 7.6,"p": 9.3,"Q": 9,"q": 9.3,"R": 7.8,"r": 3.8,"S": 7.6,"s": 3.9," ": 1,"T": 7.5,"t": 5.4,"U": 7.5,"u": 3.8,"V": 7.5,"v": 3.9,"W": 7.5,"w": 3.8,"X": 7.5,"x": 3.8,"Y": 10,"y": 9.3,"Z": 7.6,"z": 3.9};
const displayDesignText = document.querySelector('#sign-text-overlay');
const textInput = document.querySelector('#textInput');
const fontSelector = document.querySelector('#csp-font-option');
const breakTag = `<br>`;

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

function filterInput() {
    var textInput = document.getElementById('textInput');
    var value = textInput.value;

    var filteredValue = '';
    for (var i = 0; i < value.length; i++) {
        // Check for character in LetterWidths or newline
        if (LetterWidths.hasOwnProperty(value[i]) || value[i] === '\n') {
            filteredValue += value[i];
        }
    }
    
    //filteredValue = filteredValue.replace(/\n/g, breakTag);
    textInput.value = filteredValue;
    displayDesignText.innerHTML = filteredValue;
}

// Add event listeners to the text input
document.getElementById('textInput').addEventListener('input', filterInput);
document.getElementById('textInput').addEventListener('keyup', countValue);

// BACKGROUND CHANGE ON CLICK FUNCTIONALITY
const backgroundSwatches = document.querySelectorAll('.csp-swatch-box');
const currentBackgroundImage = document.querySelector('#csp-material-background');

backgroundSwatches.forEach( swatch => {
    swatch.addEventListener('click', function(e) {
        currentBackgroundImage.src = e.currentTarget.querySelector('.csp-swatch-img').src;
    });
});

// FONT CHANGE ON FONT SELECT
// fontSelector.addEventListener('change', function(e) {
//     console.log(e.style.fontFamily);
// });

fontSelector.addEventListener('change', function(e) {
    // Get the selected option
    var selectedOption = e.target.options[e.target.selectedIndex];

    // Get the computed style of the selected option
    var style = window.getComputedStyle(selectedOption);

    // Get the font family of the selected option
    var fontFamily = style.getPropertyValue('font-family');

    displayDesignText.style.fontFamily = fontFamily;
    textInput.style.fontFamily = fontFamily;
    
});

