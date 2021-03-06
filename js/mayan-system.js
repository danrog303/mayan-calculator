'use strict';
/*
    Author: Daniel Rogowski [danrog000@pbs.edu.pl]
    Bydgoszcz University of Science and Technology, 16.11.2021
*/

/**
    Convers specified number (like 2020) to base 20 digits array (like [4, 19, 19])
**/
function convertToBase20(toConvert) {
    let output = [];
    if(toConvert < 0) {
        throw new Error('Function does not support negative numbers.')
    }

    if(toConvert == 0) {
        output.unshift(0);
    }
    else {
        while(toConvert > 0) {
            output.unshift(toConvert % 20);
            toConvert = Math.floor(toConvert / 20);
        }
    }

    return output;
}

/**
    Generates HTML code for a given Mayan digit
**/
function getDigitHtml(digit) {
    let output = "";
    if(digit > 19 || digit < 0) {
        throw new Error('Mayan digit must be between 0 and 19.');
    }

    if(digit == 0) {
        output = "<img src='img/digit-0.png' class='digit-point' />"; 
    }
    else {
        while(digit >= 5) {
            output = output + "<img src='img/digit-5.png' class='digit-line' /><br />";
            digit -= 5;
        }
    
        while(digit > 0) {
            output = "<img src='img/digit-1.png' class='digit-point' />" + output;
            digit--;
        }
    }

    output = "<div class='digit'>" + output + "</div>";
    return output;
}
