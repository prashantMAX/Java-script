// Schrijf hier je code
function firstChar(string){

    return string[0]
}
function lastChar(string){
    return string[string.length -1 ]
}
function isEmptyString(string) {
    return string.length===0
}
function formatTime(h,m,s,ms){
    return `${h}:${m}:${s}.${ms}`;

}
function repeat(n,string){
    let result=``
    while (n>0){
       result=`${result}${string}`
       n--
    }
    return result
}
function join(strings,separator){
    let result=`` 
    let First = true
    for (let string of strings){
        if (First) {
            result += string;
            First = false;
        } else {
            result += separator + string;
        }
    }
    return result;
}
function prefix(str,n){
return str.substring(0,n)
}
function suffix(str,n){
    return str.substring(str.length-n)
}
function startsWith(begining,string){
   return prefix(string,begining.length)===begining
}
function endsWith(ending,string){
    return suffix(string,ending.length)===ending
}

