Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(function() {
         f.apply(this, args)
        }, ms);
    }
  };

function f(a, b, c) {
    console.log(a*b*c);
  }
  
  f.defer(1000)(4, 5, 6); // выведет 3 через 1 секунду.