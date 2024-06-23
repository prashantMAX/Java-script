// Schrijf hier je code
function getAge(person){

    return person.age
}

function bmi(person){

    return Math.round((person.weight)/(person.length/100)**2)
}

function paternalAncestor(person,n){

    while(n>0){
        person=person.father
        n--
    }
    return person.name
     }

     function substitute(xs,dictionary){
         const  result = new Array(xs.length)
         for (let i=0;i !==xs.length; i++){
       result[i]=dictionary[xs[i]]

         }
         return result
     }

     function cycle(obj, start) {
        const result = [start];
        let current = obj[start];
        while (current !== start) {
            result.push(current);
            current = obj[current];
        }
        return result;
    }
    function keys(obj){

        return Object.keys(obj)
    }

    function values(obj){

        return Object.values(obj)
    }

    function fixedPoints(obj) {
        const result = [];
        for (const key in obj) {
            const value = obj[key];
            if (key === value) {
                result.push(key);
            }
        }
        return result;
    }
    function fixedPoints(obj) {
        const result = [];
        for (const key in obj) {
            const value = obj[key];
            if (key === value) {
                result.push(key);
            }
        }
        return result;
    }