function filter(arr, func) {
    var result = [];
  
    for (let i of arr) {
      let val = i;
      if (func(val)) {
        result.push(val);
      }
    }
    return result;
  }
  
  function inArray(arr) {
    return function(x) {
      return arr.indexOf(x) != -1;
    };
  }
  
  function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }

arr = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log( inBetween (3, 6));
  console.log( filter (arr, inBetween (3, 6)));
  console.log( filter (arr, inArray ([1, 2, 3])));