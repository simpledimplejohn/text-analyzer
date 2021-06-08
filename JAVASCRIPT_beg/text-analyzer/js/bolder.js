console.log("js works");

$(document).ready(function(){
  $("form#word-bolder").submit(function(event){
    event.preventDefault();
    console.log("submit works")
    const text = $("#text-passage").val();
    const word = $("#word").val();
    const boldedPassage = boldPassage(text);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#boldedPassage").html(boldPassage);
  });
});

function boldPassage(word, text) {
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    htmlString = htmlString.concat(" ");
  });
  return htmlString + "</p>";
}

