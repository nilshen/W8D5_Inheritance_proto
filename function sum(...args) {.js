function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return sum;
}

sum(1, 2, 3, 4); //=== 10;
sum(1, 2, 3, 4, 5); //=== 15;

Function.prototype.myBind = function (context, ...bindArgs) {
    return (...callArgs) =
    const that = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function _boundFn() {
      const callArgs = Array.from(arguments);
      return that.apply(context, bindArgs.concat(callArgs));
    };
  };

//   No arrow function
Function.prototype.myBind = function(context, ...bindArgs) {
    const that = this;
    return function(...callArgs) {
        return that.apply(context, bindArgs.concat(callArgs));
    }
}