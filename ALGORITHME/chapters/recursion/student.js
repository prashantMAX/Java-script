// Schrijf hier je code

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
function sum(ns){
    if (ns.length ===0){
        return 0
    }
else {
const first = ns[0]
const rest = ns.slice(1)
return first+sum(rest);

}
}

function minimum(ns){
if (ns.length===1){
    return ns[0]
}else {

       const  eerste = ns[0]
      const      rest= ns.slice(1)
    const     restminimum=minimum(rest)
       if (eerste<restminimum){
           return ns[0]  
        
        }else 
        return restminimum
        
    }
    
}

function maximum(ns) {
    if (ns.length === 1) {
        return ns[0];
    } else {
        const [first, ...rest] = ns;
        const maximumOfRest = maximum(rest);
        if (first > maximumOfRest) {
            return first;
        } else {
            return maximumOfRest;
        }
    }
}
function isIncreasing(ns) {
    if (ns.length <= 1) {
        return true;
    } else {
        const [first, second, ...rest] = ns;
        return first <= second && isIncreasing([second, ...rest]);
    }
}
