function scuberGreetingForFeet(length){
  let message  
  if (length <= 400) {
      message = 'This one is on me!'
    }
  else if (length <= 2000) {
    message = 'That will be twenty bucks.'
  }
  else if (length <= 2500) {
    message = 'I will gladly take your thirty bucks.'
  }
  else {
    message = 'No can do.'
  }
  return message;
}

function ternaryCheckCity(city){
  let message
  if (city === 'NYC') {
    message = 'Ok, sounds good.'
  }
  else {
    message = 'No go.'
  }
  return message
}

function switchOnCharmFromTip(tip){
  let message;
  switch (tip) {
    case 'generous':
      message = 'Thank you so much.'
      return message;
    case 'not as generous':
      message = 'Thank you.'
      return message;
    default:
      message = 'Bye.'
      return message;
  }
}
