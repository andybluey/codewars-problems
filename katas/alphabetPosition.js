function alphabetPosition(text) {
  var result = "";
    for (var i = 0; i < text.length; i++){
      var letter = text.toUpperCase().charCodeAt(i);
      if (letter > 64 && letter < 91) {
        result += (letter - 64)  + " ";
      }
  }console.log(result);
  return result.slice(0, result.length-1);
}

alphabetPosition("aksjdhasd kjhaskdjh");
