const age = prompt("How old are you?");
console.log(age , parseInt(age));
if (isNaN(age) || age < 0) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writting your age")
    if (age < 18) {
        console.log("You are so young!");
    } else {
        console.log("You can drink🍺");
    }
}