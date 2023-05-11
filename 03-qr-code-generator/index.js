let btn = document.querySelector(".gen-btn");
let qrCodeElem = document.querySelector(".qr-code");
let downloadBtn = document.querySelector(".dl-btn");
const userInput = document.querySelector(".input-text");

userInput.addEventListener("focus", () => {
  userInput.style.borderColor = '#000';
  userInput.setAttribute("placeholder", "");
});

userInput.addEventListener("blur", () => {
  userInput.setAttribute("placeholder", "Enter the text to be encoded...");
});

btn.addEventListener("click", () => {
  if (userInput.value != "") {
    if (qrCodeElem.childElementCount == 0) {
      generate(userInput);
    } else {
      // clear the existing QR code elem before re-generating
      qrCodeElem.innerHTML = "";
      generate(userInput);
    }
  } else {
    userInput.style.borderColor = '#FF43A4';
    qrCodeElem.style = "display: none";
    downloadBtn.style = "display: none";
  }
});

function generate(userInput) {
  qrCodeElem.style = "";
  downloadBtn.style = "";

  var qrcode = new QRCode(qrCodeElem, {
    text: `${userInput.value}`,
    width: 180,
    height: 180,
    colorDark: "#000000", // TODO: allow user to select colors?
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  let dlBtnLinkElem = downloadBtn.firstChild;

  let qrCodeImg = document.querySelector(".qr-code img");
  let qrCodeCanvas = document.querySelector("canvas");

  if (qrCodeImg.getAttribute("src") == null) {
    setTimeout(() => {
      dlBtnLinkElem.setAttribute("href", `${qrCodeCanvas.toDataURL()}`);
    }, 300);
  } else {
    setTimeout(() => {
      dlBtnLinkElem.setAttribute("href", `${qrCodeImg.getAttribute("src")}`);
    }, 300);
  }
}