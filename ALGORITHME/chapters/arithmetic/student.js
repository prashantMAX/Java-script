// Schrijf hier je code
function five(){
return 5
}

function average(){
    return (135+471)/2
}
function average2(x,y){
    return (x+y)/2
}
function average3(x,y,z){
    return (x+y+z)/3
}

function distance(x,y){

return(x**2+y**2)**(1/2)
}

function busesNeeded(people,busCapacity){

    return Math.ceil(people/busCapacity)
}
function sugar(pies){

    return Math.ceil(pies/4)
}
function candyPerChild(children,candy){
    return Math.floor(candy/children)
}
function  leftoverCandy(children, candy){

    return candy%children
}

function hours(totalminutes){

    return Math.floor(totalminutes/60)
}
function minutes(totalminutes){
    return totalminutes%60
}
function communicationCosts(seconds){
return Math.ceil(seconds/60)*0.20
}
function distance2(x1,y1,x2,y2){
   let dx = x2-x1 
   let dy =  y2-y1 

   return (dx**2+dy**2)**0.5
}

function  cake(eggs){

    return Math.floor(eggs/3)
}
function cake2(eggs,flour){
     let neededeggs = Math.floor(eggs/4)
     let neededflour =  Math.floor(flour/250)
    return Math.min(neededeggs,neededflour)
}

function cake3(eggs,flour,sugar,butter){
    let neededeggs = Math.floor(eggs/4)
     let neededflour =  Math.floor(flour/250)
     let neededsugar =  Math.floor(sugar/250)
     let neededbutter =  Math.floor(butter/250)

     return Math.min(neededsugar,neededbutter,neededflour,neededeggs)

}

function roundToMultiple(n,multipleof){
    return Math.round(n / multipleof) * multipleof
}

function middle(a,b,c){
    let grootste = Math.max(a,b,c)
    let kleinste = Math.min(a,b,c)
    return a+b+c- (grootste+kleinste)
}

