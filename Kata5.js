const urlEncode = function(text) {
  // Put your solution here
  let newText = "";
  if (text[0] !== " "){
    newText += text[0]
  }
  for (let i = 1; i < (text.length - 1); i++){
    if(text[i] === " "){
      newText += "%20";
    } else {
      newText += text[i];
    }
  }
  if (text[text.length - 1] !== " "){
    newText += text[text.length - 1];
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));