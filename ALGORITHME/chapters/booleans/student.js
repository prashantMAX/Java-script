// Schrijf hier je code
function isPositive(x){
  
   return x>=0
}
function isNegative(x){
    return x<=0

}

function isDivisibleBy(x,y) {
     
    return 0===x%y
}

function inRange(x,min,max){
    return min<=x  &&  x<=max
}

function pingPong(x,y){
    return x>=11 && x>=y+2
}
function freeTicket(age){


    return age>=65 || age<12
}

function has30Days(month) {
    return month === 4 || month === 6 || month === 9 || month === 11;
}
function has31Days(month) {
    return month === 1 || month === 3 || month === 5 || month === 7 || month == 8 || month == 10 || month == 12;
}
function isLeapYear(year){
return year%4 === 0 && year%100!==0 || year % 400 ===0 ;
}

function has28Days(month,year){

    return !isLeapYear(year) && month===2
}
function has29Days(month,year){
    return isLeapYear(year) && month===2 && !has28Days(month,year)
}

function isValidDate(day, month, year) {
    return inRange(month, 1, 12) &&
        ((has31Days(month) && inRange(day, 1, 31)) ||
            (has30Days(month) && inRange(day, 1, 30)) ||
            (has28Days(month, year) && inRange(day, 1, 28)) ||
            (has29Days(month, year) && inRange(day, 1, 29)));
}
function majority(x,y,z){
    return (x===true && y===true&& z===true)|| (x===false && y===true&& z===true)||(x===true && y===false&& z===true)||(x===true && y===true&& z===false)
}

function isHigherCard(x,y){


    return    (x>y || x===1) && y!=1 
}
function isInteger(x){

return x%1===0
}

function isPerfectSquare(x){
    return isInteger(x**0.5)
}

function earlier(a,b,c,d)
{

return  (a===c && b<d) || a<c
}

