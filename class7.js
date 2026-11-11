// const student1 = {
//     name: 'muhazzib uddin farooqui',
//     batch: 22,
//     course: 'web app development',
// };


// const student2 = {
//     name: 'Hamid Khan',
//     batch: 22,
//     course: 'web app development',
// };

// const printName = function (isActive, institute) {
//     console.log(this.name, this.course, this.batch, isActive, institute);
// };

// printName.call(student1, false, 'saylani');
// printName.call(student2, false, 'saylani');

// printName.apply(student2, [false, "saylani"]);

// const result = printName.bind(student1);
// result(true, 'saylani')


// Closures

// const z = () => {
//     let b = 100;

//     const x = () => {
//         let a = 12;

//         const y = () => {
//             console.log(a);
//         };
//         a = 20;
//         return y;

//     };

//     return x();
// };

// const functionOfY = z();

// functionOfY();


// CALL BACK 

// const api = {};

// const items = ["shoes", "shirts", "pants"];

// const addToCartSuccess = () => {
//     api.updateBalance(())
// }
