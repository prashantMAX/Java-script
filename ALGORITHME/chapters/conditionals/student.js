// Schrijf hier je code


function min2(x, y) {
    if (x < y) {
        return x;

    } else {
        return y;
    }
}
function abs(n) {
    if (n > 0) {
        return n
    } else {
        n *= -1
        return n
    }
}
function sign(n) {
    if (n > 0) {
        return 1
    } else if (n < 0) {
        return -1
    } else {
        return 0
    }

}

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


function daysInMonth(month, year) {
    if (has28Days(month, year)) {
        return 28;
    } else if (has29Days(month, year)) {
        return 29
    } else if (has30Days(month)) {
        return 30
    } else if (has31Days(month)) {
        return 31
    } else {
        return -1;
    }

}

function passPercentage(a, b, c) {
    let pass = 0
    if (a >= 10) {
        pass++
    }
    if (b >= 10) {
        pass++
    }
    if (c >= 10) {
        pass++
    }

    return Math.round((pass / 3) * 100)
}


function democracy(a, b, c, d, e) {
    let juist = 0
    if (a) {
        juist++
    }
    if (b) {
        juist++
    }
    if (c) {
        juist++
    }
    if (d) {
        juist++
    }
    if (e) {
        juist++
    }

    return juist >= 3


}
function totalOrderCost(n) {
    if (n >= 200) {
        return n * 0.9
    }

    if (n >= 100) {
        return n
    }
    else return n + 10
}

function quadrants(x, y) {

    if (x === 0 || y=== 0 ) {
        return 0
    }
    if (x > 0) {
        if (y > 0) {
            return 1
        }
        else return 2
    }
    else if (y > 0) {
        return 4
    }
   
    else return 3
}


