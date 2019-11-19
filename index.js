// takeANumber welcomes a new guest and adds them to the line

// function takeANumber (katzDeliLine, name){
//   katzDeliLine.push(name);
//   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
// }


// nowServing returns the first person being served 

function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
  return `Currently serving ${katzDeliLine.shift()}.`;
  }
}


// currentLine returns whose in line and their spot 

function currentLine (katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
      var katzDeliLinePosition = [];
      for (var i=0;i<katzDeliLine.length;i++){
      katzDeliLinePosition.push(`${i+1}. ${katzDeliLine[i]}`);
       }
   return `The line is currently: ${katzDeliLinePosition.join(", ")}`;
  }
}
