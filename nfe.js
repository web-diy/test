function makeCounter() {
    // вместо
     let count = 0
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;

    counter.decrease = function(value) {
        return counter.count += - value;
    }

    counter.set = function(value) {
        return count = value;
    }
    return counter;
  }
    
  
  let counter = makeCounter();

  console.log( counter() ); // 0
  console.log( counter.set(20) ); // 0

  console.log( counter.decrease(2));
  console.log( counter.decrease(2));
  console.log( counter.decrease(2));
