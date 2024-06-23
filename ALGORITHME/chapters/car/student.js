// Schrijf hier je code

function forward4(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}
function forward5(bike){
    let i=5

    while (i>0){
    forward(bike);
    i=i-1;
}
}
function forward10(bike){
    let i=0

    
    while(i<10){
    forward(bike)
    i=i+1
}
 
}
function right(bike){
    turnRight(bike);
    forward(bike)

}

function ellShape(bike){
    forward5(bike) ; 
    turnRight(bike); 
    forward4(bike)
    
 }

 function uTurn(bike){
  
    forward(bike)
    forward(bike)
    forward(bike)
    turnRight(bike)
    forward10(bike)
    turnRight(bike)
    forward(bike)
    forward(bike)
   } 
 function forwardN(bike,steps){
     let i=0
     while (i<steps) {
         forward(bike);
         i=i+1;
     } 

 }
 function crookedUTurn(bike){

     forwardN(bike,7)
     turnRight(bike)
     forwardN(bike,9)
     turnRight(bike)
     forwardN(bike,3)
 }
 function forwardUntilWall(bike){
     while (!sensor(bike)){
         forward(bike)
     }
 }

 function smartEllShape(bike){
forwardUntilWall(bike)
turnRight(bike)
forwardUntilWall(bike)
 }

 function spiral(bike){
   
   
    while (!sensor(bike)){
         forwardUntilWall(bike)
         turnRight(bike)
     }
     
 }
 function turnLeft(car){
   turnRight(car)
   turnRight(car)
   turnRight(car)

 }
 function left(car){
     turnLeft(car)
     forward(car)
 }

 function slalom(car) {
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}
function leftOrRight(car){
   
turnLeft(car)
forwardUntilWall(car)
turnRight(car)
forwardUntilWall(car)
turnRight(car)
forwardUntilWall(car)
turnLeft(car)
forwardUntilWall(car)

}

function incompleteU(car){
    forwardUntilWall(car)
    turnRight(car)
    forwardUntilWall(car)
    turnRight(car)
    forwardUntilWall(car)
}
function whichDirection(car){
    while (sensor(car)){
        turnRight(car)
       
    }
     forwardUntilWall(car)
    }
    function sensorRight(car) {
        turnRight(car);
        let result = sensor(car);
        
    
        return result;
    }

    function firstRight(car){
      while (sensorRight(car)){
    turnLeft(car)
        forward(car);
    
      }
      
      forwardUntilWall(car)
    }
    
    function sensorLeft(car)
{
    turnLeft(car)
 let result = sensor(car)
 
 return result

}
function firstLeft(car){
while (sensorLeft(car))
{
    turnRight(car)
    forward(car)
}
forwardUntilWall(car)

}

function zigZag(car) {
    firstRight(car)
     turnLeft(car)
     forward(car)
   firstLeft(car)
}
