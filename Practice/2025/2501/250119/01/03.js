function sayHello() {
    console.log("Hello!");
}

sayHello();
sayHello();
sayHello();
sayHello();

function gree(arg) {
    console.log(`Hello ${arg} !!`)
}

gree("Yeji");
gree("Ryujin");
gree("Lia");

function inturduction(argName , argAge) {
    console.log(`Hello!! My name is ${argName}!! ${argAge} years old!! (*´ω｀*)`);
}

inturduction("Yeji" , 23);
inturduction("Lia" , 20);


function res(argNum1 , argNum2) {
    console.log(argNum1 + argNum2);
}

res(10 , 3);
res(2,15);


const profile = {
    name : "Yeji" , 
    greet : function (argName) {
        console.log(`Hello! My name is ${argName}!!(*´ω｀*)`);
    }
}

profile.greet(profile.name);
profile.greet("Lia");