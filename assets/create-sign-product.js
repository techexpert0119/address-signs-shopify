// theme copy
"use strict";

var currentFontWidth = window.ballantineWidth;
var currentFontHeight = window.ballantineHeight;

const designBox = document.querySelector("#csp-design-box");
const displayDesignText = document.querySelector("#sign-text-overlay");
const cartPreDesignText = document.querySelector("#cart-prev-design-text");
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
const preModal = document.querySelector("#cart-pre-notification");

const rulerBtn = document.querySelector("#csp-ruler-btn");
const rateBox = document.querySelector("#rate");
const alertBox = document.querySelector("#alert");

const currentProduct = document.querySelector("#current-product");
const currentAddress = document.querySelector("#current-address");
const currentFont = document.querySelector("#current-font");
const currentAlign = document.querySelector("#current-align");
const currentColor = document.querySelector("#current-color");
const currentMaterial = document.querySelector("#current-material");
const currentCSize = document.querySelector("#current-size");

const radioColorBlack = document.querySelector("#color-radio-black");
const radioColorWhite = document.querySelector("#color-radio-white");
const radioMaterialMatte = document.querySelector("#material-radio-matte");
const radioMaterialGlossy = document.querySelector("#material-radio-glossy");

iconLeftA.parentNode.parentNode.style.backgroundColor = "#353eac";
iconLeftA.style.fill = "#68ffa8";

const breakTag = `<br>`;

let fontSizes = {
  ballantine: 130,
  seashore: 80,
  "brush-script": 100,
  "commercial-script": 110,
  parsley: 100,
  "petit-formal": 80,
  vivace: 110,
  scriptmtbold: 100,
  centurygothic: 80,
  plaza: 95,
  kanit: 90,
  oswald: 90,
};
let currencyStatus = 0;
let showMeasureBar = true;

const cartPreFontChange = () => {
  var cartPreImageContainer = document.querySelector(".cart-pre-img-container");
  var fontStr = cartPreDesignText.style.fontFamily;
  let modifiedStr = fontStr.split(",")[0].replaceAll('"', "");
  let fontSize = fontSizes[modifiedStr] / 3;
  cartPreDesignText.style.fontSize = fontSize + "px";

  while (
    cartPreDesignText.scrollWidth >
      (cartPreImageContainer.clientWidth - 20) * 0.8 &&
    fontSize > 0
  ) {
    fontSize--;
    cartPreDesignText.style.fontSize = fontSize + "px";
  }
};

document.querySelector("#done-btn").addEventListener("click", () => {
  const text = textInput.value;
  if (text === "") {
    alertBox.style.display = "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } else {
    preModal.style.display = "block";
    var cartPreImage = document.querySelector("#cart-pre-img");
    var cartPreDesignText = document.querySelector("#cart-prev-design-text");
    cartPreImage.src = backgroundImage.src;
    cartPreDesignText.innerHTML = text;
    cartPreFontChange();
  }
});
document
  .querySelector("#cancel-prev-modal-btn")
  .addEventListener("click", () => {
    preModal.style.display = "none";
    const comment = document.querySelector("#cart-pre-comment");
    const addToCartBtn = document.querySelector("#add-to-cart-btn");
    const viewCartbtn = document.querySelector("#view-cart-btn");

    comment.innerHTML = "";
    addToCartBtn.style.display = "block";
    viewCartbtn.style.display = "none";
  });
document.querySelector("#alert-closebtn").addEventListener("click", () => {
  alertBox.style.display = "none";
});
document.querySelector("#close-modal-xBtn").addEventListener("click", () => {
  preModal.style.display = "none";
  const comment = document.querySelector("#cart-pre-comment");
  const addToCartBtn = document.querySelector("#add-to-cart-btn");
  const viewCartbtn = document.querySelector("#view-cart-btn");

  comment.innerHTML = "";
  addToCartBtn.style.display = "block";
  viewCartbtn.style.display = "none";
});
document.querySelector("#alert-closebtn").addEventListener("click", () => {
  alertBox.style.display = "none";
});

setInterval(function () {
  let currency = document.querySelector("#currency_status");
  let priceStr = currency.textContent.trim();
  const newStatus = priceStr.slice(1, priceStr.length - 4);
  if (currencyStatus !== newStatus) {
    currencyStatus = newStatus;
    countValue();
  }
}, 100);

rulerBtn.addEventListener("click", () => {
  if (showMeasureBar === true) showMeasureBar = false;
  else showMeasureBar = true;
  changeRulerDisplay();
});

window.addEventListener("resize", () => {
  countValue();
  cartPreFontChange();
  changeRulerDisplay();
});

const changeRulerDisplay = () => {
  const verticalRuler = document.querySelector(".measure-height-cont");
  const horizontalRuler = document.querySelector(".measure-width-cont");

  if (showMeasureBar) {
    if (window.innerWidth > 990) {
      verticalRuler.style.display = "flex";
      horizontalRuler.style.display = "block";
    } else {
      verticalRuler.style.display = "none";
      horizontalRuler.style.display = "block";
    }
  } else {
    verticalRuler.style.display = "none";
    horizontalRuler.style.display = "none";
  }
};

// Function to handle keyup events
function countValue() {
  alertBox.style.display = "none";

  // Display Width/Height
  var inlineStrings = textInput.value.split("\n");
  var maxWidth = Math.max(
    ...inlineStrings.map((s) =>
      s.split("").reduce((save, item) => {
        return save + currentFontWidth[item];
      }, 0)
    )
  );

  var maxEachHeights = inlineStrings.map((s) =>
    Math.max(...s.split("").map((val) => currentFontHeight[val]))
  );
  var maxHeight = maxEachHeights.reduce((save, item) => {
    if (item !== -Infinity) return save + item;
    return save;
  }, 0.0);
  var lineCnt = maxEachHeights.filter((height) => height !== -Infinity).length;
  maxHeight += lineCnt ? (lineCnt - 1) * 3 : 0;

  var textWidthDislay = document.getElementById("widthDisplay");
  var textHeightDislay = document.getElementById("heightDisplay");
  var dynamicSize = document.getElementById("csp-design-static-size");
  var smallSizeDisplay = document.getElementById("size-small");
  var mediumSizeDisplay = document.getElementById("size-medium");
  var largeSizeDisplay = document.getElementById("size-large");
  var currentWidthHeight = document.getElementById("current-width-height");

  var rate = +rateBox.innerHTML;
  const height = (maxHeight * rate).toFixed(1);
  const width = (maxWidth * rate).toFixed(1);

  if (window.innerWidth > 990) {
    textHeightDislay.textContent = height;
    textWidthDislay.textContent = width;
  } else {
    if (maxWidth !== 0 && maxHeight !== 0) {
      textWidthDislay.textContent = `${height}×${width}`;
    } else {
      textWidthDislay.textContent = "0.0×0.0";
    }
  }
  dynamicSize.textContent = `${height} × ${width}in`;
  currentWidthHeight.textContent = `(${height} × ${width}in)`;
  smallSizeDisplay.textContent = `${(maxHeight * 0.8).toFixed(1)}×${(
    maxWidth * 0.8
  ).toFixed(1)}in`;
  mediumSizeDisplay.textContent = `${(maxHeight * 1).toFixed(1)}×${(
    maxWidth * 1
  ).toFixed(1)}in`;
  largeSizeDisplay.textContent = `${(maxHeight * 1.25).toFixed(1)}×${(
    maxWidth * 1.25
  ).toFixed(1)}in`;

  // Show Price
  var strlength = textInput.value
    .split("")
    .filter((str) => str !== "\n" && str !== " ").length;

  var quantityDisplay = document.getElementsByClassName("quantity__input")[0];
  quantityDisplay.value = 1;

  let premiumFlag = false;
  const currentFontText = currentFont.innerHTML;
  if (
    currentFontText == "Prestige" ||
    currentFontText == "Mode" ||
    currentFontText == "Chroma" ||
    currentFontText == "Espresso"
  )
    premiumFlag = true;

  currentAddress.innerHTML = textInput.value;
  currentProduct.innerHTML = `${strlength} letter${
    premiumFlag ? " premium" : ""
  }`;

  // Control Font Size
  var container = document.getElementsByClassName("height-text-box")[0];
  var fontStr = displayDesignText.style.fontFamily;
  let modifiedStr = fontStr.split(",")[0].replaceAll('"', "");
  let fontSize = fontSizes[modifiedStr];

  displayDesignText.style.fontSize = fontSize + "px";
  while (
    (displayDesignText.scrollWidth > container.clientWidth ||
      container.scrollHeight > designBox.clientHeight - 270) &&
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

[radioColorBlack, radioColorWhite].forEach((color) =>
  color.addEventListener("change", (e) => {
    if (e.target.checked) {
      currentColor.innerHTML = e.target.value;
      const valueLowCase = e.target.value.toLowerCase();
      displayDesignText.style.color = valueLowCase;
      cartPreDesignText.style.color = valueLowCase;
      if (valueLowCase === "white") {
        if (window.innerWidth >= 990) {
          displayDesignText.style.textShadow = "3px 1px 1px #000";
          cartPreDesignText.style.textShadow = "1px 1px 1px #000";
        } else {
          displayDesignText.style.textShadow = "1px 1px 0px #000";
          cartPreDesignText.style.textShadow = "1px 1px 1px #000";
        }
      } else {
        if (window.innerWidth >= 990) {
          displayDesignText.style.textShadow = "3px 1px 1px #fff";
          cartPreDesignText.style.textShadow = "1px 1px 1px #fff";
        } else {
          displayDesignText.style.textShadow = "1px 1px 0px #fff";
          cartPreDesignText.style.textShadow = "1px 1px 1px #fff";
        }
      }
    }
  })
);

[radioMaterialMatte, radioMaterialGlossy].forEach((material) =>
  material.addEventListener("change", (e) => {
    if (e.target.checked) {
      currentMaterial.innerHTML = e.target.value;
    }
  })
);

function filterInput() {
  var textInput = document.getElementById("textInput");
  var value = textInput.value;

  var filteredValue = "";
  for (var i = 0; i < value.length; i++) {
    // Check for character in currentFontWidth or newline
    if (currentFontWidth.hasOwnProperty(value[i]) || value[i] === "\n") {
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
const backgroundContainer = document.querySelector("#csp-background-img");
const backgroundImage = backgroundContainer.querySelector("img");

backgroundSwatches.forEach((swatch) => {
  swatch.addEventListener("click", (e) => {
    backgroundImage.src = e.currentTarget.querySelector(".csp-swatch-img").src;
  });
});

fontGrid.style.display = "none";
fontGridItem[0].style.backgroundColor = "#353eac";
fontGridItem[0].style.color = "#68ffa8";

fontSelector.addEventListener("click", function () {
  if (fontDropdownGrid.style.gridTemplateRows === "0fr") {
    fontGrid.style.display = "grid";
    fontDropdownGrid.style.gridTemplateRows = "1fr";
    iconCarat.style.transform = "rotate(180deg)";
  } else {
    iconCarat.style.transform = "rotate(0deg)";
    fontGrid.style.overflow = "hidden";
    fontDropdownGrid.style.gridTemplateRows = "0fr";
    fontGrid.style.display = "none";
  }
});

const isPremiumFont = (font) => {
  return (
    font == "centurygothic" ||
    font == "plaza" ||
    font == "kanit" ||
    font == "oswald"
  );
};

for (let i = 0; i < fontGridItem.length; i++) {
  fontGridItem[i].addEventListener("click", function (e) {
    let fontStr = e.currentTarget.style.fontFamily;
    let modifiedStr = fontStr.split(",")[0].replaceAll('"', "");

    for (let x = 0; x < fontGridItem.length; x++) {
      const fontStr = fontGridItem[x].style.fontFamily;
      const modifiedStr = fontStr.split(",")[0].replaceAll('"', "");
      if (isPremiumFont(modifiedStr))
        fontGridItem[x].style.color = "rgb(0, 0, 0)";
      else fontGridItem[x].style.color = "rgb(53, 62, 172)";
      fontGridItem[x].style.backgroundColor = "transparent";
    }
    if (isPremiumFont(modifiedStr)) {
      e.currentTarget.style.color = "#eeee33";
      e.currentTarget.style.backgroundColor = "#000000";
    } else {
      e.currentTarget.style.color = "#68ffa8";
      e.currentTarget.style.backgroundColor = "#353eac";
    }
    fontInput.setAttribute("value", modifiedStr);
    displayDesignText.style.fontFamily = e.currentTarget.style.fontFamily;
    cartPreDesignText.style.fontFamily = e.currentTarget.style.fontFamily;
    displayDesignText.style.fontSize = fontSizes[modifiedStr] + "px";
    if (modifiedStr === "brush-script" || modifiedStr === "parsley")
      displayDesignText.style.fontWeight = 500;
    else displayDesignText.style.fontWeight = 700;

    // THIS WORKS BUT NEED THE fontSizes TO BE THE CORRECT NAMES

    switch (modifiedStr) {
      case "ballantine":
        currentFontWidth = window.ballantineWidth;
        currentFontHeight = window.ballantineHeight;
        currentFont.innerHTML = "Baroque";
        fontSelector.textContent = "Baroque";
        displayDesignText.style.lineHeight = 0.9;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "-2px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "seashore":
        currentFontWidth = window.seashoreWidth;
        currentFontHeight = window.seashoreHeight;
        currentFont.innerHTML = "Gemstone";
        fontSelector.textContent = "Gemstone";
        displayDesignText.style.lineHeight = 1.5;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "-1px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "brush-script":
        currentFontWidth = window.brushScriptWidth;
        currentFontHeight = window.brushScriptHeight;
        currentFont.innerHTML = "Vintage";
        fontSelector.textContent = "Vintage";
        displayDesignText.style.lineHeight = 1.2;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "0px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "commercial-script":
        currentFontWidth = window.commercialWidth;
        currentFontHeight = window.commercialHeight;
        currentFont.innerHTML = "Radiant";
        fontSelector.textContent = "Radiant";
        displayDesignText.style.lineHeight = 1.2;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "-3px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "parsley":
        currentFontWidth = window.parsleyWidth;
        currentFontHeight = window.parsleyHeight;
        currentFont.innerHTML = "Regal";
        fontSelector.textContent = "Regal";
        displayDesignText.style.lineHeight = 1.0;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "0px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "petit-formal":
        currentFontWidth = window.petitFormalWidth;
        currentFontHeight = window.petitFormalHeight;
        currentFont.innerHTML = "Contemporary";
        fontSelector.textContent = "Contemporary";
        displayDesignText.style.lineHeight = 1.6;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "-2px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "scriptmtbold":
        currentFontWidth = window.scriptMTBoldWidth;
        currentFontHeight = window.scriptMTBoldHeight;
        currentFont.innerHTML = "Novel";
        fontSelector.textContent = "Novel";
        displayDesignText.style.lineHeight = 1.2;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "-2px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "vivace":
        currentFontWidth = window.vivaceWidth;
        currentFontHeight = window.vivaceHeight;
        currentFont.innerHTML = "Vivace";
        fontSelector.textContent = "Vivace";
        displayDesignText.style.lineHeight = 1.1;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "-2px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "centurygothic":
        currentFontWidth = window.centurygothicWidth;
        currentFontHeight = window.centurygothicHeight;
        currentFont.innerHTML = "Prestige";
        fontSelector.textContent = "Prestige";
        displayDesignText.style.lineHeight = 1.2;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "0px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "plaza":
        currentFontWidth = window.plazaWidth;
        currentFontHeight = window.plazaHeight;
        currentFont.innerHTML = "Mode";
        fontSelector.textContent = "Mode";
        displayDesignText.style.lineHeight = 1.1;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "0px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "kanit":
        currentFontWidth = window.kanitWidth;
        currentFontHeight = window.kanitHeight;
        currentFont.innerHTML = "Chroma";
        fontSelector.textContent = "Chroma";
        displayDesignText.style.lineHeight = 1.2;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "0px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
      case "oswald":
        currentFontWidth = window.oswaldWidth;
        currentFontHeight = window.oswaldHeight;
        currentFont.innerHTML = "Espresso";
        fontSelector.textContent = "Espresso";
        displayDesignText.style.lineHeight = 1.3;
        if (window.innerWidth <= 990) {
          displayDesignText.style.letterSpacing = "0px";
        } else {
          displayDesignText.style.letterSpacing = "normal";
        }
        break;
    }
    countValue();
    getPrice();
  });
}

// SELECT ALIGNMENT FUNCTIONALITY
leftAlignBox.addEventListener("click", function () {
  removeAlignBoxStyle(alignBoxes);
  displayDesignText.style.textAlign = "left";
  cartPreDesignText.style.textAlign = "left";
  alignBoxes[0].style.backgroundColor = "#353eac";
  iconLeftA.style.fill = "#68ffa8";
  currentAlign.innerHTML = "Left";
  console.log("box clicked");
});
centerAlignBox.addEventListener("click", function () {
  removeAlignBoxStyle(alignBoxes);
  displayDesignText.style.textAlign = "center";
  cartPreDesignText.style.textAlign = "center";
  alignBoxes[1].style.backgroundColor = "#353eac";
  iconCenterA.style.fill = "#68ffa8";
  currentAlign.innerHTML = "Center";
  console.log("box clicked");
});
rightAlignBox.addEventListener("click", function () {
  removeAlignBoxStyle(alignBoxes);
  displayDesignText.style.textAlign = "right";
  cartPreDesignText.style.textAlign = "right";
  alignBoxes[2].style.backgroundColor = "#353eac";
  iconRightA.style.fill = "#68ffa8";
  currentAlign.innerHTML = "Right";
  console.log("box clicked");
});

const removeAlignBoxStyle = function (alignBoxes) {
  alignBoxes.forEach((box) => {
    box.style.backgroundColor = "transparent";
    //box.style.color = '#353eac';
    box.querySelector(".align-icon").style.fill = "#353eac";
  });
};
