function Machine(power) {
    this._power = power;
    this._enabled = false;

    let self = this;

    this.enable = function() {
      self._enabled = true;
    };

    this.disable = function() {
      self._enabled = false;
    };
  }

function Fridge (power) {
    Machine.apply(this, arguments);

    let food = [];
    let capacity = power/100

    let parentDisable = this.disable;
    this.disable = function() {
        if (food.length > 0) {
            return console.log('В холодильнике находится еда. Выключать нельзя!');
        } else 
            parentDisable();
            console.log ('Холодильник выключен!');
    };

    this.addFood = function(...args) {
        if (this._enabled == false) {
            console.log('Включите холодильник, чтобы добавить еду!');
            //throw new Error("Значение должно быть положительным");
        } else 
        for (let item of args) {
            if (food.length >= capacity) {
                console.log('Нельзя добавить больше еды. Холодильник полон!')
            } else
            food.push(item);
        }
    };

    this.getFood = function() {
        let result = food.slice();
        return result;
    };

    this.removeFood = function(item) {
        var idx = food.indexOf(item);
          if (idx != -1) food.splice(idx, 1);
        };

    this.filterFood = function(filter) {
        return food.filter(filter);
    };
}

/*let fridge = new Fridge(500);
fridge.enable();
fridge.addFood ({
        title: 'котлета',
        calories: 100
    });
    fridge.addFood ({
        title: 'сок',
        calories: 30
    });
    fridge.addFood ({
        title: 'зелень',
        calories: 10
    });
    fridge.addFood ({
        title: 'варенье',
        calories: 150
    });

console.log(fridge.getFood());

fridge.removeFood("сок"); 

let dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    console.log( item.title ); // сок, зелень
    fridge.removeFood(item);
});

console.log(fridge.getFood().length); 
console.log(fridge.getFood());
console.log(dietItems); */

let fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
console.log(fridge.getFood());