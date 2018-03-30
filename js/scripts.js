//Problem: Create web app that takes a number from user and returns a rnge of numbers from 0 to the choosen number.

// Exceptions:
// Numbers that contain 0, replace all digits with "Beep!"
// Numbers that contain a 1 replace all digits with "Boop!"
//Numbers divisible by 3 replace with "I'm sorry, Dave. I'm afraid I can't do that."

// Exceptions are listed from least to most important
// first exception applies unless second does, and the same with the second & third

//user should be able to enter a new number and see new results over & over again

var numberZero = "0";
var wordBeep = numberZero.replace("0", "Beep!");
console.log(wordBeep);

var numberOne = "1";
var wordBoop = numberOne.replace("1", "Boop!");
console.log(wordBoop);

var numberThree = "3";
var wordImSorry = numberThree.replace("3", "I'm sorry, Dave. I'm afraid I can't do that.");
console.log(wordImSorry);

// User Interface Logic
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();

    $("#list").text();
    if (userInput === 0) {
      return "Beep!"
    } else {
      return userInput
    }

/*
    $("#list").show();
    if ("#userInput" === 0) {
    $("#list").append("<li>Beep!</li>");
    } else {
    $("#list").append("Beep!");
    }
*/

  });
});
