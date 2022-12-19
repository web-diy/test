function f(x) {
    console.log(x);
}

function debounce (f, ms) {
    let state = null;
    let cooldown = 1;
    return function () {
        if (state) return;
        f.apply(this, arguments);
        state = cooldown;
        setTimeout(() => {state = null
        }, ms);
    }
};

var f = debounce(f, 1000);
f(1); // 1, выполнится сразу же
f(2); // игнор
setTimeout( function() { f(3) }, 100); // игнор (прошло только 100мс) 
setTimeout( function() { f(4) }, 1100); // 4, выполнится 
setTimeout( function() { f(5) }, 1500); // игнор