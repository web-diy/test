function printNumbersInterval () {
    let i = 1;
        let timerID = setInterval(function () {
            if (i <= 20) {
            console.log(i); i++;
            } else clearInterval(timerID);
        }, 100);
}

function printNumbersInterval2 () {
    let i = 1;
    let timerId = setTimeout(function tick() {
        if (i <= 20) {
        console.log(i); 
        i++;
        timerId = setTimeout(tick, 100);
    } else clearTimeout(timerId); 

      }, 100);
}


printNumbersInterval2();