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
    return isLeapYear(year) && month === 2 
}
function isValidDate(day, month, year) {
    return inRange(month, 1, 12) &&
        ((has31Days(month) && inRange(day, 1, 31)) ||
            (has30Days(month) && inRange(day, 1, 30)) ||
            (has28Days(month, year) && inRange(day, 1, 28)) ||
            (has29Days(month, year) && inRange(day, 1, 29)));
}




function min2(x,y){
    if(x>y){
        return y
    } else 
        return x 
    

    
}

function abs(x){
        if(x<0){
            return x *-1
        } else return x
    }

function sign(x){
    if(x>0){
        return 1
    } else if(x==0){
        return 0
    } else return -1
}
function inRange(x,min,max){

    return x>=min && x<=max
}

function daysInMonth(month,year){
   if(isValidDate(2,month,year)== false){
    return -1
   }
    if(has30Days(month)){
        return 30
    } else if(has31Days(month)){
        return 31
    } else if(has29Days(month,year)){
        return 29
    } else if(has28Days(month,year)){
        return 28
    }
}

function passPercentage(a,b,c){
    let result = 0;

    if(a>=10){
        result++
    }
    if(b>=10){
        result++
    }
    if(c>=10){
        result++
    }
    return Math.round(result/3*100) 
}


function democracy(a, b, c, d, e) {
    let pro = 0;
    if (a)
        pro++;
    if (b)
        pro++;
    if (c)
        pro++;
    if (d)
        pro++;
    if (e)
        pro++;
    return pro >= 3;
}