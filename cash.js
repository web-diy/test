function f(x) {
    return Math.random() * x; // random для удобства тестирования 
}

function makeCaching(f) {
    let cash = {};
    return function (x){
        if (!(x in cash)){
            cash[x] = f.call(this,x);
        }
        return cash[x];
    };
}

  f = makeCaching(f);

  var a, b;

  a = f(1);
  b = f(1);
  console.log( a == b ); // true (значение закешировано)
  
  b = f(2);
  console.log( a == b ); // false, другой аргумент => другое значение
