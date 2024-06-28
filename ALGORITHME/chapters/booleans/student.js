
function isPositive(x){
   
    return x>=0
}

function isNegative(x){

    return x<=0
}

function isDivisibleBy(x,n){

    return x%n===0
}

function inRange(x,min,max){

    return x>=min && x<=max
}

function pingPong(score1,score2){

    return score1>=11 && score1>=2+score2
}

function freeTicket(age){

    return age<12 || age>=65
}

function has30Days(month){

    return [4,6,9,11].includes(month)
}

function has31Days(month){

    return ![2,4,6,9,11].includes(month)
}