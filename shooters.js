function makeArmy() {
    
    var shooters = [];
  
    for (var i = 0; i < 10; i++) {
      var shooter = function() { // функция-стрелок
        console.log(i); // выводит свой номер
      };
      shooters.push(shooter);
    }
    return shooters;
  }

  let army = makeArmy();

//console.log(shooters);
army[5]();