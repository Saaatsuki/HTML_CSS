const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek =[ mon , tue , wed , thu , fri , sat , sun ] ; 
const nonsense = [1,2,"Hello", false , null,undefined]

console.log(daysOfWeek);
console.log(nonsense);

console.log(daysOfWeek[3]);

daysOfWeek.push("week");
console.log(daysOfWeek);


const mustBuy = ["potato" , "tomato"];
mustBuy.push("banana");

for(let i = 0 ; i < mustBuy.length ; i++) {
    console.log(mustBuy[i]);
}
