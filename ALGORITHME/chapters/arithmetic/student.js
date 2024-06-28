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

    return (x**2 + y**2)**0.5
}


function busesNeeded(people, busCapacity){

    
    return  Math.ceil(people/busCapacity) 
}

function sugar(pies){

    return Math.ceil(pies/4)
}

function candyPerChild(children,candy){

  return  Math.floor(candy/children)
}

function leftoverCandy(children,candy){

    return candy %children
}

function hours(totalMinutes){

    return Math.floor(totalMinutes/60)
}

function minutes(totalMinutes){
    return totalMinutes % 60
}

function communicationCosts(seconds){
   return  0.2 * Math.ceil(seconds/60)
}

function distance2(a,y,b,z){

    return ((b-a)**2 + (z-y)**2)**0.5
}

function cake(eggs){

    return Math.floor(eggs/3)
}

function cake2(eggs,flour){

    return Math.min(Math.floor(eggs/4),Math.floor(flour/250))
}


function cake3(eggs,flour,sugar,butter){

    return Math.min(Math.floor(eggs/4),Math.floor(flour/250),Math.floor(sugar/250),Math.floor(butter/250))
}

function roundToMultiple(n,multipleOf){
    return Math.round(n/multipleOf)*multipleOf
}

function middle(a,b,c){
    var som = a+b+c
    return som - Math.min(a,b,c) - Math.max(a,b,c) 
}