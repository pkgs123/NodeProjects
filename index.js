let react = require('./rectangle');
solveReact = (l,b) =>{
console.log("Solving for reactangle with l =" +l +"and b =" +b);
    if(l<=0 || b<=0){
        console.log("Rectangle dimension should be greater than " +l +"and"+b);
    }
    else{
        console.log("The area of the rectangle is " +react.area(l,b));
        console.log("The area of the perimeter of the rectangle is " +react.perimeter(l,b));
    }
}
solveReact(2,4);
solveReact(3,5);
solveReact(0,5);
solveReact(-3,5);