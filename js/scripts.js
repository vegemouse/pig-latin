var pigLatin = function(input) {

  var lowercaseInput = input.replace(/[^a-z\s]/g, "").toLowerCase();
  var splitInput = lowercaseInput.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  var firstChecker = function(splitInput) {
    if (consonants.indexOf(splitInput[0]) > -1) {
      splitInput.shift(splitInput.push(splitInput[0]));
      firstChecker(splitInput);
    }
  }

  if (vowels.indexOf(splitInput[0]) > -1) {
    splitInput.push("ay");
  } else {
    firstChecker(splitInput);
    splitInput.push("ay")
  }
    console.log(splitInput);
}


// Front end
$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var originalString = $("#input input").val();
    pigLatin(originalString);
  })
});
