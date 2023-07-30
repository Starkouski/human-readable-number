module.exports = function toReadable (number) {
  let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let b = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let answer;  
  if(number > 99) {
    let hund = Math.floor(number /100);
    let c = number % 100;
    let dec = Math.floor(c / 10);    
    let units = c % 10;
    if (c === 0){
        answer = a[hund] + ' hundred'
    } else if ( c < 20){
        answer = a[hund] + ' hundred ' + a[c];
    } else if (units === 0){
        answer = a[hund] + ' hundred ' + b[dec - 2];
    } else {
        answer = a[hund] + ' hundred ' + b[dec - 2] + ' ' + a[units];
    }   
  } else {
    let dec = Math.floor(number / 10);
    let units = number % 10;
    if ( number < 20){
        answer = a[number];
    } else if (units === 0){
        answer =b[dec - 2]
    } else {
        answer =b[dec - 2] + ' ' + a[units];
    }
  };
  return answer;
}
