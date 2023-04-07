// Q1.
// function abc(){
//     var a=20;
//     function xyz(){
//         console.log(a);
//     }
//     xyz();
// }abc();
// Output: 10:-- As closure function is an example for the callback function.

// Q2.
// setTimeout(() =>{
//     console.log('1')
//     setTimeout(() => {
//         console.log('2')
//         setTimeout(() =>{
//             console.log('3')
//             setTimeout(() =>{
//                  console.log('4')
//                  setTimeout(() => {
//                    console.log('5')
//                    setTimeout(() =>{
//                       console.log('6')
//                         setTimeout(() =>{
//                           console.log('7')
//                         },7000)
//                     },6000)
//                 },5000);
//             },4000);
//         },3000)
//     },2000);
// },1000);
// Output: 1 2 3 4 5 6 7 :-- The callback hell is the way of a coding callback funtions with in the funtions goes on calling one over the other in a way of pyramid way of structure of coding
// all the callback funtions. such structure way of pyramid is known as Callback Hell.

// Q3.
// const printnumber =(time,func) => {
//     return new Promise((resolve,reject) =>{
//         if(func){
//             setTimeout(() => {
//                 resolve (func());
//             },time)
//         }else{
//             reject('give valid number');
//         }
//     })
// }

// printnumber(0, () => console.log("Numbers"))
// .then(() => {
//     return printnumber(1000, () => console.log('1'))
// })
// .then(() => {
//     return printnumber(2000, () => console.log('2'))
// })
// .then(() => {
//     return printnumber(3000, () => console.log('3'))
// })
// .then(() => {
//     return printnumber(4000, () => console.log('4'))
// })
// .then(() => {
//     return printnumber(5000, () => console.log('5'))
// })
// .then(() => {
//     return printnumber(6000, () => console.log('6'))
// })
// .then(() => {
//     return printnumber(7000, () => console.log('7'))
// })

// Q4.
// function prom(x){
//     return new Promise((resolve,reject) => {
//         if(x === "yes"){
//             resolve("promise resolved");
//         }else{
//             reject("promise rejected");
//         }
//     });
// }
// prom("yes")
// .then((x) => console.log(x))
// .catch((y) => console.log(y))
// Output- promise resolved 

// Q5.
// function sum(a,b){
//     return a+b;
// }
// function xyz(name, age){
//     console.log(name,age);
// }
// xyz('EA',sum(20,30));
// Output- EA 50
// Explain- The inner function is depend upon the outer function is known as Callback function.

// Q6.
// setTimeout(() => {
//     console.log('a');
//     setTimeout(() => {
//         console.log('b');
//         setTimeout(() => {
//             console.log('c');
//         },3000)
//     },2000)
// },1000);
// Output- a b c 
// Explain- It is process which happens when do multiple callback within a function is known as callback hell function.
//          The shape of the resulting code structure looks like a pyramid and hence callback hell is also called the "pyramid of the doom".
//          It make the code very difficult to understand and maintain.

// Q7. 
// function mypromise(){
//     return new Promise((resolve, reject) => {
//         let count=3;
//         if(count > 2){
//             resolve("great");
//         }else {
//             reject("low");
//         }
//     })
// }
// mypromise().then((x) => console.log(x))
// .catch((y) => console.log(y));
// Output- great
// Explain- Promise is a proxy for a value not necessarily known when the promise is created.

// Q8.
function createorder(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("order created");
            resolve();
        },1000);
    });
}
async function orderplaced(){
    try{
        await createorder();
        console.log("order placed");
    }
    catch{
        console.log("error");
    }
}
orderplaced();
