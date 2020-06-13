let react = require('./rectangle');
solveReact = (l,b) =>{
console.log("Solving for reactangle with l =" +l +"and b =" +b);
    // if(l<=0 || b<=0){
    //     console.log("Rectangle dimension should be greater than " +l +"and"+b);
    // }
    // else{
    //     console.log("The area of the rectangle is " +react.area(l,b));
    //     console.log("The area of the perimeter of the rectangle is " +react.perimeter(l,b));
    // }
    react(l,b,(err,rectangle)=>{
        if(err){
            console.log("ERROR: ", err.message);
        }
        else{
            console.log("The area of the rectangle of dimensions l = "
            + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
            + l + " and b = " + b + " is " +rectangle.perimeter());
        }
    });
    console.log("This statement after the call to react()");
};
// solveReact(2,4);
// solveReact(3,5);
// solveReact(0,5);
// solveReact(-3,5);