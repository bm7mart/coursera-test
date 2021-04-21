(function(window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i=0; i < names.length; i++) {
    var theName=names[i];
    var lowerCase=theName.toLowerCase(0);
    var firstLetter=lowerCase.charAt(0);
    if (firstLetter=="j") {
      byeSpeaker.speak (names[i]);
    }
    else {
      helloSpeaker.speak (names[i]);
    }
  }
})(window);