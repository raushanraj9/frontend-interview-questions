//Arrow function
// let user = {
//     name: "Piyush",
//     age: 24,
//       getDetails: () => {
//           console.log(this.name); 
//       }
//   };
  
//   user.getDetails()//it will print nothing as in global object name key is not present

//***************** */  
// let user = {
//     name: "Piyush",
//     age: 24,
//       getDetails() {
//           const nestedArrow = () => console.log(this.name); //Piyush
//           nestedArrow();
//       }
//   };
//   user.getDetails() 

//***************** */

// const user = {
//     firstName: 'Piyush!',
//     getName() {
//       const firstName = 'Jen!';
//       return this.firstName;
//     }
//   };
//   console.log(user.getName()); // What is logged?
  
//************ */

// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   console.log( user.ref.name ); // What's the result? it will print nothing as ref refers to window objec

  //**************** */
//   const user = { 
//     name: 'Piyush Agarwal!', 
//     logMessage() { 
//         console.log(this.name);
//     }
// }
// setTimeout(function(){
//     user.logMessage()
// }, 2000);

//*********** */

// const calculator={
//     read()
//     {
//         this.a=+prompt("a= ",0);
//         this.b=+prompt("b= ",0);

//     },
//     sum()
//     {
//         return this.a+this.b;
//     },
//     mul()
//     {
//         return this.a*this.b;
//     }
// }
// calculator.read();
// console.log(calculator.sum())
// console.log(calculator.mul())

//****************** */
// const calc={
//     total:0,
//     add(a)
//     {
//         this.total+=a;
//         return this;
//     },
//     mult(a)
//     {
//         this.total*=a;
//         return this;
//     },
//     subt(a)
//     {
//         this.total-=a;
//         return this;
//     }
// }

// const result=calc.add(10).mult(5).subt(30).add(10);
// console.log(result.total);

//************* */

