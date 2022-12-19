function Calculator (str) {

    let methods = {
        '+': function (a, b) {
            return a + b;
        },

        '-': function (a, b) {
            return a - b;
        }
    };


    this.calculate = function(str) {
       let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
    

    if (!methods[op] || isNaN(a) || isNaN(b)){
        return NaN;
    }
    return methods[op](+a, +b);
    }
    this.addMethod =  function(name, func){
        methods[name] = func;
    };
}

let calc = new Calculator;
//result = calc.calculate('3 + 7');
//console.log(result);

let powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b){
    return a * b;
});

result = powerCalc.calculate('10 * 20');
console.log(result);