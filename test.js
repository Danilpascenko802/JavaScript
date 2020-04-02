
var calculate = {
     descriminant = function (a,b,c){
         let d = b-4*a*c;
         if(d>0){
            let x1 = (-b + Math.sqrt(d))/2*a*c; // move to external function
            let x2 = (-b - Math.sqrt(d))/2*a*c; // move to external function
            return new {result=[x1,x2]}
         }

         if(d === 0){
            let x = (-b)/2*a*c; // move to external function
            return new {result=[x]}
         }
         
         if(d<0){
             return new{result = null, error='no result'}
         }
    }
}

var resultCalc = calculate.descriminant(1,2,3)