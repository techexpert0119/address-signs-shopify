// theme copy
"use strict";
const LetterWidths = {
  ">": 0,
  "<": 0,
  "\n": 0,
  0: 6.1,
  1: 5.2,
  2: 7,
  3: 6.7,
  4: 6.7,
  5: 6.5,
  6: 5.7,
  7: 6.3,
  8: 6,
  9: 5.7,
  ",": 2.1,
  ".": 1.4,
  A: 11.7,
  a: 6.2,
  "'": 2.1,
  B: 11.1,
  b: 4.6,
  C: 7.4,
  c: 4.3,
  D: 10.7,
  d: 7.4,
  "-": 3.5,
  E: 8,
  e: 4.5,
  F: 11.1,
  f: 11,
  G: 10,
  g: 7.3,
  H: 14.4,
  h: 6.7,
  I: 10,
  i: 4,
  J: 11.7,
  j: 8.5,
  K: 12.7,
  k: 6.8,
  L: 10.1,
  l: 5,
  M: 14.1,
  m: 9.5,
  N: 13.5,
  n: 6.8,
  O: 7.4,
  o: 4.6,
  P: 10.7,
  p: 7.4,
  Q: 8.5,
  q: 5.6,
  R: 11,
  r: 3.4,
  S: 8,
  s: 3.4,
  " ": 5,
  T: 11.2,
  t: 4.4,
  U: 10,
  u: 6.2,
  V: 8.7,
  v: 4.4,
  W: 10.5,
  w: 7,
  X: 11.3,
  x: 5.8,
  Y: 11,
  y: 7.4,
  Z: 11.3,
  z: 5.6,
};
const letterHeights = {
  0: 6.5,
  1: 6.4,
  2: 6.5,
  3: 6.5,
  4: 6.6,
  5: 6.7,
  6: 6.7,
  7: 6.5,
  8: 6.6,
  9: 6.7,
  ",": 2.4,
  ".": 1.4,
  A: 7.6,
  a: 3.8,
  "'": 2.4,
  B: 7.5,
  b: 6.6,
  C: 7.6,
  c: 3.8,
  D: 7.3,
  d: 6.6,
  "-": 1,
  E: 7.6,
  e: 3.9,
  F: 7.5,
  f: 9.3,
  G: 10,
  g: 9.3,
  H: 7.5,
  h: 6.6,
  I: 7.4,
  i: 6,
  J: 9.1,
  j: 9.3,
  K: 7.5,
  k: 6.6,
  L: 7.5,
  l: 6.6,
  M: 7.7,
  m: 3.8,
  N: 8.1,
  n: 6.8,
  O: 7.6,
  o: 3.9,
  P: 7.6,
  p: 9.3,
  Q: 9,
  q: 9.3,
  R: 7.8,
  r: 3.8,
  S: 7.6,
  s: 3.9,
  " ": 1,
  T: 7.5,
  t: 5.4,
  U: 7.5,
  u: 3.8,
  V: 7.5,
  v: 3.9,
  W: 7.5,
  w: 3.8,
  X: 7.5,
  x: 3.8,
  Y: 10,
  y: 9.3,
  Z: 7.6,
  z: 3.9,
};
const designBox = document.querySelector("#csp-design-box");
const displayDesignText = document.querySelector("#sign-text-overlay");
const measurementTexBox = document.querySelector(".measurement-text-box");
const textInput = document.querySelector("#textInput");
const fontSelector = document.querySelector("#csp-font-option");
const fontInput = document.querySelector(".csp-font-input");
const iconCarat = document.querySelector(".icon-carat-box");
const fontDropdownGrid = document.querySelector(".csp-grid-dropdown");
const fontGrid = document.querySelector(".csp-font-grid");
const fontGridItem = document.querySelectorAll(".csp-font-item");
const iconLeftA = document.querySelector(".icon-left-align");
const iconCenterA = document.querySelector(".icon-center-align");
const iconRightA = document.querySelector(".icon-right-align");
const alignIcons = document.querySelectorAll(".align-icon");
const leftAlignBox = document.querySelector(".left-align-box");
const centerAlignBox = document.querySelector(".center-align-box");
const rightAlignBox = document.querySelector(".right-align-box");
const alignBoxes = document.querySelectorAll(".csp-text-align-box");
const rulerBtn = document.querySelector("#csp-ruler-btn");
const rateBox = document.querySelector("#rate");
const currencyBox = document.querySelector("#currency");

iconLeftA.parentNode.parentNode.style.backgroundColor = "#353eac";
iconLeftA.style.fill = "#68ffa8";

//const widthMeasure = document.querySelector('#csp-measure-hr');
const colorVariant = document.querySelectorAll(".csp-color-input");
//let calcWidth;
const breakTag = `<br>`;

let fontSizes = {
  ballantine: 130,
  seashore: 80,
  "brush-scri": 100,
  commercial: 110,
  parsley: 100,
  "petit-form": 80,
  vivace: 110,
};

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

/*********************************ROMEO'S WORK**********************************/
rulerBtn.addEventListener("click", (event) => {
  const horizontalRuler = document.querySelector(".measure-height-cont");
  const verticalRuler = document.querySelector(".measure-width-cont");
  const viewStatus = horizontalRuler.style.display;

  if (viewStatus !== "none") {
    horizontalRuler.style.display = "none";
    verticalRuler.style.display = "none";
  } else {
    horizontalRuler.style.display = "flex";
    verticalRuler.style.display = "block";
  }
});

window.addEventListener("resize", function () {
  countValue();
});

// Function to handle keyup events
function countValue() {
  var textInput = document.getElementById("textInput");
  var inlineStrings = textInput.value.split("\n");
  var maxWidth = Math.max(
    ...inlineStrings.map((s) =>
      s.split("").reduce((save, item) => {
        return save + LetterWidths[item];
      }, 0)
    )
  );

  var maxEachHeights = inlineStrings.map((s) =>
    Math.max(...s.split("").map((val) => letterHeights[val]))
  );
  var maxHeight = maxEachHeights.reduce((save, item) => {
    if (item !== -Infinity) return save + item;
    return save;
  }, 0.0);
  var lineCnt = maxEachHeights.filter((height) => height !== -Infinity).length;
  maxHeight += lineCnt ? (lineCnt - 1) * 3 : 0;

  var textWidthDislay = document.getElementById("widthDisplay");
  var textHeightDislay = document.getElementById("heightDisplay");

  var rate = +rateBox.innerHTML;
  textWidthDislay.textContent = (maxWidth * rate).toFixed(1); // display total to 2 decimal places
  textHeightDislay.textContent = (maxHeight * rate).toFixed(1); // display total to 2 decimal places

  var container = document.getElementsByClassName("height-text-box")[0];
  var fontStr = displayDesignText.style.fontFamily;
  let modifiedStr = fontStr.split(",")[0].split("").slice(0, 10).join("");
  let fontSize = fontSizes[modifiedStr];

  var totalPrice = document.querySelector("#csp-design-static-currency");
  var strlength = textInput.value
    .split("")
    .filter((str) => str !== "\n" && str !== " ").length;
  var currentCurrency = +currencyBox.innerHTML;
  if (strlength > 4)
    totalPrice.textContent = (
      4 * currentCurrency +
      (strlength - 4) * 0.7 * currentCurrency
    ).toFixed(1);
  else totalPrice.textContent = (strlength * currentCurrency).toFixed(1);

  var quantityDisplay = document.getElementsByClassName("quantity__input")[0];
  quantityDisplay.value = strlength;

  displayDesignText.style.fontSize = fontSize + "px";
  while (
    displayDesignText.scrollWidth > container.clientWidth &&
    fontSize > 0
  ) {
    fontSize--;
    displayDesignText.style.fontSize = fontSize + "px";
  }
  if (fontSize > fontSizes[modifiedStr]) {
    fontSize = fontSizes[modifiedStr];
    displayDesignText.style.fontSize = fontSize + "px";
  }
}
/*******************************************************************************/

function filterInput() {
  var textInput = document.getElementById("textInput");
  var value = textInput.value;

  var filteredValue = "";
  for (var i = 0; i < value.length; i++) {
    // Check for character in LetterWidths or newline
    if (LetterWidths.hasOwnProperty(value[i]) || value[i] === "\n") {
      filteredValue += value[i];
    }
  }

  //filteredValue = filteredValue.replace(/\n/g, breakTag);
  if (filteredValue === "") {
    measurementTexBox.style.display = "none";
  } else {
    measurementTexBox.style.display = "flex";
    textInput.value = filteredValue;
    displayDesignText.innerHTML = filteredValue;
    //calcWidth = displayDesignText.offsetWidth;
  }
}

// Add event listeners to the text input
document.getElementById("textInput").addEventListener("input", filterInput);
document.getElementById("textInput").addEventListener("keyup", countValue);

// BACKGROUND CHANGE ON SWATCH CLICK FUNCTIONALITY
const backgroundSwatches = document.querySelectorAll(".csp-swatch-box");
const currentBackgroundImage = document.querySelector("#csp-background-img");

backgroundSwatches.forEach((swatch) => {
  swatch.addEventListener("click", function (e) {
    currentBackgroundImage.style.backgroundImage =
      "url(" + e.currentTarget.querySelector(".csp-swatch-img").src + ")";
  });
});
console.log(fontSizes);
fontGrid.style.display = "none";
fontSelector.addEventListener("click", function () {
  console.log("font selector clicked!");
  if (fontDropdownGrid.style.gridTemplateRows === "0fr") {
    fontGrid.style.display = "grid";
    fontDropdownGrid.style.gridTemplateRows = "1fr";
    iconCarat.style.transform = "rotate(180deg)";
    for (let i = 0; i < fontGridItem.length; i++) {
      fontGridItem[i].addEventListener("click", function (e) {
        let fontStr = e.currentTarget.style.fontFamily;
        let modifiedStr = fontStr.split(",")[0].split("").slice(0, 10).join("");
        fontSelector.textContent =
          modifiedStr.charAt(0).toUpperCase() + modifiedStr.slice(1);
        fontInput.setAttribute("value", modifiedStr);
        displayDesignText.style.fontFamily = e.currentTarget.style.fontFamily;
        displayDesignText.style.fontSize = fontSizes[modifiedStr] + "px";
        if (modifiedStr === "brush-scri" || modifiedStr === "parsley")
          displayDesignText.style.fontWeight = 500;
        else displayDesignText.style.fontWeight = 700;

        // THIS WORKS BUT NEED THE fontSizes TO BE THE CORRECT NAMES
        console.log("Modified String: " + modifiedStr);
        // console.log(fontSizes[modifiedStr]);

        iconCarat.style.transform = "rotate(0deg)";
        fontGrid.style.overflow = "hidden";
        fontDropdownGrid.style.gridTemplateRows = "0fr";
        fontGrid.style.display = "none";

        /**********************ROMEO'S WORK*************************/
        countValue();
        /***********************************************************/
      });
    }
  } else {
    iconCarat.style.transform = "rotate(0deg)";
    fontGrid.style.overflow = "hidden";
    fontDropdownGrid.style.gridTemplateRows = "0fr";
    fontGrid.style.display = "none";
  }
});

// CHANGES THE FONT ON THE TEXT DISPLAYED OVER BACKGROUND MATERIAL
//  fontSelector.addEventListener('change', function(e) {
//      console.log('Font Changed!');
//      var selectedOption = e.target.options[e.target.selectedIndex];
//      var fontStyle = selectedOption.getAttribute('value');
//      console.log('Selected font:', fontStyle);

//     if (fontStyle.includes('font7') ) {
//         displayDesignText.style.fontSize = fontSizes.font7 + 'px';
//     } else if (fontStyle.includes('ballantine')) {
//         displayDesignText.style.fontSize = fontSizes.ballantine + 'px';
//     } else if (fontStyle.includes('plaza')) {
//         displayDesignText.style.fontSize = fontSizes.plaza + 'px';
//     } else if (fontStyle.includes('seashore')) {
//         displayDesignText.style.fontSize = fontSizes.seashore + 'px';
//     } else if (fontStyle.includes('scriptmtbold')) {
//         displayDesignText.style.fontSize = fontSizes.scriptmtbold + 'px';
//     } else if (fontStyle.includes('commercial script')) {
//         displayDesignText.style.fontSize = fontSizes["commercial script"] + 'px';
//     } else if (fontStyle.includes('parsley')) {
//         displayDesignText.style.fontSize = fontSizes.parsley + 'px';
//     } else if (fontStyle.includes('petit formal')) {
//         displayDesignText.style.fontSize = fontSizes["petit formal"] + 'px';
//     }

//     displayDesignText.style.fontFamily = "'" + fontStyle + "'";
//     // textInput.style.fontFamily = fontStyle;

// });

// LISTEN FOR COLOR VARIANT CHANGE
colorVariant.forEach((color) => {
  color.addEventListener("click", function (e) {
    const valueLowCase = color.value.toLowerCase();
    displayDesignText.style.color = valueLowCase;
  });
});

// FUNCTION DETECTS WHEN A NUMBER IS 60% OF SCREEN WIDTH
// function checkScreenPercentage(num, percent) {
//   let screenWidth = designBox.offsetWidth;
//   let decimalPercent = percent / 100;
//   let limit = screenWidth * decimalPercent;
//   if (num >= limit) {
//     // Execute your code here
//     console.log(num + " has reached " + percent + "% of the design width.");
//   } else {
//     console.log(num + " has NOT reached " + percent + "% of the design width.");
//   }
// }

// SELECT ALIGNMENT FUNCTIONALITY
leftAlignBox.addEventListener("click", function () {
  removeAlignBoxStyle(alignBoxes);
  displayDesignText.style.textAlign = "left";
  alignBoxes[0].style.backgroundColor = "#353eac";
  iconLeftA.style.fill = "#68ffa8";
  console.log("box clicked");
});
centerAlignBox.addEventListener("click", function () {
  removeAlignBoxStyle(alignBoxes);
  displayDesignText.style.textAlign = "center";
  alignBoxes[1].style.backgroundColor = "#353eac";
  iconCenterA.style.fill = "#68ffa8";
  console.log("box clicked");
});
rightAlignBox.addEventListener("click", function () {
  removeAlignBoxStyle(alignBoxes);
  displayDesignText.style.textAlign = "right";
  alignBoxes[2].style.backgroundColor = "#353eac";
  iconRightA.style.fill = "#68ffa8";
  console.log("box clicked");
});

const removeAlignBoxStyle = function (alignBoxes) {
  alignBoxes.forEach((box) => {
    box.style.backgroundColor = "transparent";
    //box.style.color = '#353eac';
    box.querySelector(".align-icon").style.fill = "#353eac";
  });
};
