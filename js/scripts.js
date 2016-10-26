var pigLatin = function(string) {
  var lowerCaseString = string.toLowerCase();
  var splitString = lowerCaseString.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  if (vowels.indexOf(splitString[0]) > -1 ) {
    splitString.push("ay");
  } else if (consonants.indexOf(splitString[0]) > -1 ) {
    splitString.push(splitString.shift());
  }

  console.log(splitString);
}


$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    originalString = $("#input input").val();
    pigLatin(originalString);
  })
})
