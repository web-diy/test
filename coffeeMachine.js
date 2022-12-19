function CoffeeMachine(power, capacity) {
    
    var waterAmount = 0; //приватное свойство или защищенное
    var WATER_HEAT_CAPACITY = 4200;   
    let timerId;
    
    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
    this.getWaterAmount = function() {
        return waterAmount;
    }
    this.setWaterAmount = function(amount) {    //публичное свойство
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }
        waterAmount = amount;   
    };
        function onReady() {
            console.log( 'Кофе готов! В количестве' + ' ' + waterAmount );
        }

        this.setOnReady = function(newOnReady) {
            onReady = newOnReady;
          };

        this.run = function() {
            timerId = setTimeout(function(newOnReady) {
                timerId = null;
                onReady();
            }, 
            getTimeToBoil());
        };

    this.addWater = function (amount) {
        if ((waterAmount+amount) < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if ((waterAmount+amount) > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }
        waterAmount += amount;
    }

    this.isRunning = function() {
        return !!timerId;
    }

}


var coffeeMachine = new CoffeeMachine(20000, 500); 
coffeeMachine.setWaterAmount(500);

coffeeMachine.setOnReady(function() {
var amount = coffeeMachine.getWaterAmount();
  console.log( 'Готов кофе: ' + amount + 'мл' ); // Готов кофе: 150 мл
});

console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false
coffeeMachine.run();
console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true
coffeeMachine.setOnReady(function() {
console.log( "После: " + coffeeMachine.isRunning() ); // После: false
});
