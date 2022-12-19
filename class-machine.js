function Machine(power) {
      this._enabled = false;

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

    function CoffeeMachine(power) {
      Machine.apply(this, arguments);

      var waterAmount = 0;
      let timerId;
      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      function onReady() {
        console.log('Кофе готово!');
      }

      this.run = function() {
        if (this._enabled == false) {
            console.log("Кофеварка выключена!");
        } else
        timerId = setTimeout(onReady, 1000);
      };

      let parentDisable = this.disable;
      this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
      }

    }

var coffeeMachine = new CoffeeMachine(10000); 
coffeeMachine.enable();
coffeeMachine.run(); 
coffeeMachine.disable(); 