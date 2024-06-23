// Schrijf hier je code
function sum(n) {
    let total = 0
    let i = 1
    while (i <= n) {
        total = total + i
        i += 1
    }
    return total
}

function sumRange(from, to) {
    let i = from
    let sum = 0
    while (i <= to) {
        sum = sum + i

        i += 1
    }
    return sum
}

function factorial(n) {
    let i = 1
    let som = 1
    while (i <= n) {
        som = i * som
        i++
    }
    return som
}

function multiply(a, b) {
    let i = 1
    let maal = 0
    while (i <= b) {
        maal = maal + a
        i++
    }
    return maal
}
function power(a, b) {

    let i = 1
    let maal = 0
    while (i <= b) {
        maal = maal + a
        i++
    }
    return maal
}

function power(a, b) {
    let totaal = 1
    while (b > 0) {
        totaal = a * totaal
        b--
    }
    return totaal
}
function thanos(population, target) {
    let count = 0
    while (population > target) {
        population = Math.ceil(population / 2)
        count++
    }
    return count

}
function amazon(n) {
    let
        a = 50
    b = 50
    while (n > 0) {
        const prijs1 = b * 0.95
        const prijs2 = a * 1.10
        a = prijs1
        b = prijs2
        n--
    }



    return b
}

function sum2(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
function factorial2(n) {
    let totaal = 1
    for (let i = 1; i <= n; i++) {
        totaal = i * totaal
    }
    return totaal
}

function fibonacci(n) {
    let getal1 = 0
    let getal2 = 1
    for (let i = 1; i < n; i++) {
        next = getal1 + getal2
        getal1 = getal2;
        getal2 = next;
    }
    return getal1
}

function countDivisors(n) {
    let result = 0
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            result++
        }

    }
    return result
}
function gcd(x, y) {
    let result = 0
    for (let i = 0; i <= x || i <= y; i++) {
        if (x % i === 0 && y % i === 0) {
            result = i
        }
    }
    return result
}
function lcm(x, y) {
    let i = Math.max(x, y)

    while (!(i % x === 0 && i % y === 0)) {

        i++
    }
    result = i

    return result

   
}

function dice2(targetsum) {
    let result = 0;
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
            if (i + j === targetsum) {
                result++
            }

        }

    }
    return result

}
function dice3(targetsum) {
    let result = 0;
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
            for (let k = 1; k <= 6; k++) {
                if (i + j + k === targetsum) {
                    result++
                }

            }

        }
    }
    return result
}

function isPrime(n) {
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

function countPrimes(n) {
    let result = 0
    for (let i = 0; i<=n;i++){
        if(isPrime(i)) {
        result++
    }

}return result
}
