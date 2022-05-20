
// const sum(...numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4)); // === 10;
// // sum(1, 2, 3, 4, 5) === 15;


// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }


// Function.prototype.myBind = function (context) {

//     const that = this;
//     // console.log(arguments);
//     const bindArgs = Array.from(arguments).slice(1);

//     return function () {
//         const callArgs = Array.from(arguments);

//         return that.apply(context, bindArgs.concat(callArgs));
//     };
// };

// Function.prototype.myBind = function (context, ...bindArgs) {
//     return (...callArgs) => {
//         return this.apply(context, bindArgs.concat(callArgs));
//     };
// };


// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

//   // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true

//   // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true

//   // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true


// const myBind(context) {
//     return () => {
//         return this.apply(context);
//     };
// }




function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30
// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
sumThree.curry(3)(4)(20)(6); // == 30

Function.prototype.curry = function (numArgs) {
    const numbers = [];
    const that = this;

    function _curriedFn(arg) {
        numbers.push(arg);

        if (numbers.length === numArgs) {
            return that(...numbers);
        } else {
            return _curriedFn;
        }
        return _curriedFn;
    }
};
