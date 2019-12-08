(function(){// This is example of IIFE(Immediately invoked function expression.(IIFE))
    var variable = 1;
    var firstFun = function(){
            variable++;
    };
    var secondFun = function(){
            firstFun();
            variable++;
    };
    var thirdFun = function(){
        secondFun();
        console.log("The function has runned "+variable+" no of time ");
    };
    thirdFun();
}());