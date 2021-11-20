'use strict';
document.getElementById("form-number").addEventListener("submit", event => {
    event.preventDefault();

    let toConvert = parseInt(document.getElementById("form-number-input").value);
    let base20 = convertToBase20(toConvert);
    let numberContainer = document.getElementById("mayan-number-container");

    numberContainer.innerHTML = "";

    base20.forEach(element => {
        numberContainer.innerHTML += getDigitHtml(element);
    });
});