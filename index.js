function shout (string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}

function logShout (string) {
  console.log(string.toUpperCase())
}

function logWhisper (string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()){
    return "I can't hear you!"
    
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
    
  } else if (string == 'I love you, Grandma.'){
<<<<<<< HEAD
    return "I love you, too."
=======
    return "I love you, too"
>>>>>>> d582437f42ea077f1c53e8d8f8c1bc6c2db3e8fe
  }
  
}