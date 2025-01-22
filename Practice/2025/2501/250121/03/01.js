// // // // // const cal = (a , b , c)  => {
// // // // //     const res = a+b+c;
// // // // //     return res;
// // // // // }

// // // // // console.log(cal(1,2,4));

// // // // // const fun1 = a => a + 2;
// // // // // console.log(fun1(5));

// // // // // const fun2 = (argNum1,argNum2) => {
// // // // //     const res = argNum1 * argNum2;
// // // // //     return res
// // // // // }

// // // // // console.log(fun2(6,5));

// // // // function calFun(argPrice , argTax = 0.08) {
// // // //     const res = argPrice + argPrice * argTax;
// // // //     return res;
// // // // }

// // // // console.log(calFun(1000));

// // // // const res1 = calFun(1000);
// // // // console.log(res1);

// // // // const res2 = calFun(1000 , 0.01);
// // // // console.log(res2);

// // // /**
// // //  * @param pricies
// // //  * @returns {number}
// // //  */

// // // function calSum(...argPricies) {
// // //     let res = 0;
// // //     for(const val of argPricies) {
// // //         res += val
// // //     }
// // //     return res;
// // // }

// // // console.log(calSum(10,10,10,10,10));

// // const myPrice = 10;

// // if (50 <= myPrice) {
// //     alert("50以上");
// // } else if (10 <= myPrice) {
// //     alert("10以上") ;
// // } else {
// //     alert("10未満");
// // }

// if (true) {
//     alert(`Hello`)
// }

// const randomNum = Math.random * 10;
const fruitLi = ["りんご", "みかん", "いちご", "れもん"];
// Math.random() で0以上1未満のランダムな値を生成し、3を掛けて0, 1, 2のいずれかを選択
// Math.floorは少数点を切り捨てる役割
const myFruit = fruitLi[Math.floor(Math.random() * 4)]; // インデックスは0, 1, 2, 3のいずれか

switch (myFruit) {
    case `りんご`:
        alert("🍎");
        break;
    case `みかん`:
        alert("🍊");
        break;
    case `いちご`:
        alert("🍓");
        break;
    default:
        alert("その他");
}
