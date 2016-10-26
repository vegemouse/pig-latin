var pigLatin = function(string) {
  var letters = string.toLowerCase().split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var vowelsLocation = [];

  if (vowels.indexOf(letters[0]) > -1 ) {
    letters.push("ay");
  }

  consonants.forEach(function(consonant) {
    if (consonant = letters[0]) {
      letters.shift(letters.push(letters[0]));
    }
  })
  // for (i = 0; i < letters.length; i++) {
  //   if (vowels.indexOf(letters(i)) > -1) {
  //     vowelsLocation.push(vowels[i]);
  //   }
  // }
    console.log(vowelsLocation);
    console.log(letters);
}



$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    originalString = $("#input input").val();
    pigLatin(originalString);
  })
});
