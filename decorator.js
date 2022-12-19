arr = [];
function work(a, b) {
    console.log( a * b ); // произвольная функция или метод
  }
  
function spy(func) {
    function wrapper() {
        // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
        let args = [].slice.call(arguments);
        wrapper.calls.push(args);
        return func.apply(this, args);
      }
    
      wrapper.calls = [];
      arr = wrapper.calls;
      return wrapper;
}

  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  work(3, 4); // 9
  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }
  console.log(arr);