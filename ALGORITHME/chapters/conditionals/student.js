// Schrijf hier je code


function has30Days(month) {
    return month === 4 || month === 6 || month === 9 || month === 11;
}
function has31Days(month) {
    return month === 1 || month === 3 || month === 5 || month === 7 || month == 8 || month == 10 || month == 12;
}
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function has28Days(month, year) {

    return !isLeapYear(year) && month === 2
}
function has29Days(month, year) {
    return isLeapYear(year) && month === 2 && !has28Days(month, year)
}

function isValidDate(day, month, year) {
    return inRange(month, 1, 12) &&
        ((has31Days(month) && inRange(day, 1, 31)) ||
            (has30Days(month) && inRange(day, 1, 30)) ||
            (has28Days(month, year) && inRange(day, 1, 28)) ||
            (has29Days(month, year) && inRange(day, 1, 29)));
}




function min2(x,y){
    
}