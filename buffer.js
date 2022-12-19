function makeBuffer() {
    var text = '';

    
    function buffer(piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    };
    
    buffer.clear = function () {
        text = '';
    }

    return buffer;
  };


  var buffer = makeBuffer();
  // добавить значения к буферу
  buffer('Замыкания');
  buffer(' Использовать');
  buffer(' Нужно!');
  console.log( buffer() ); // 'Замыкания Использовать Нужно!'

  buffer.clear();
  console.log( buffer() + 'Буфер пуст!');