// Schrijf hier je code
function first(xs) {
    return xs[0]
}
function last(xs) {
    return xs[xs.length - 1]
}
function sum(ns) {
    let result = 0
    for (let i = 0; i !== ns.length; i++) {
        result = result + ns[i]
    }
    return result
}
function contains(value, xs) {
    for (let i = 0; i !== xs.length; i++) {
        if (value === xs[i]) {

            return true

        }

    }
    return false
}
function all(bs) {
    for (let x of bs) {
        if (x !== true) {
            return false
        }
    }
    return true
}

function any(bs) {
    for (let x of bs) {
        if (x === true) {
            return true
        }
    }
    return false
}
function repeat(n, x) {
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = x
    }
    return result
}
function range(from, to) {
    if (to < from) {
        return []
    }
    else {
        const lang = to - from + 1
        const result = new Array(lang);
        for (let i = 0; i !== lang; i++) {
            result[i] = from
            from++

        }
        return result
    }
}

function incrementEach(ns) {
    for (let i = 0; i !== ns.length; i++)
        ns[i]++
}
function clamp(ns, min, max) {
    for (let i = 0; i !== ns.length; i++) {
        if (ns[i] < min) {
            ns[i] = min;
        }
        else if (ns[i] > max) {
            ns[i] = max
        }


    }
}

function trimZeros(ns) {
    while (ns[0] === 0 || last(ns) === 0) {
        if (last(ns) === 0) {
            ns.pop()
        } else if (ns[0] === 0) {
            ns.shift()
        }
    }
}
function cut(xs,size){
for(let i=0;xs.length>size;i++){
xs.pop()
}
}
function cut(xs,size){
    while(xs.length>size){
        xs.pop()
    }
    }

   
 function repeat2(n,xs){
     result =[]
     for(i=0;i<n;i++){
      result=  [...result,...xs]


     }
     return result }
function count(value,xs){
    let result =0
    for( let x of xs){
       if( x===value){
           result++
       }

    }
    return result
}
function minimum(ns){
    let result= 1000000
    for(x of ns ){
       if (result>x)
       result= x;
    }
    return result
}

    function allEqual(xs) {
        for (let i = 1; i < xs.length; ++i) {
            if (xs[i] !== xs[0]) {
                return false;
            }
        }
        return true;
    }
    


