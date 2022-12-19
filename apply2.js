//  Создаём объект со свойствами и методами
    //  Далее мы передадим метод, как колбэк другой функции
    var clientData = {
      id: 094545,
      fullName: "Not Set",
    //  Метод на объекте clientData
    setUserName: function (firstName, lastName)  {
    //  тут мы выставляем fullName свойство в данном объекте
    this.fullName = firstName + " " + lastName;
    }
    }
    function getUserInput (firstName, lastName, callback, callbackObj) {
      //  Использование метода apply ниже, выставит this для callbackObj
      callback.apply (callbackObj, [firstName, lastName]);
  }

  // Объект clientData будет использоваться методом Apply, чтобы выставить значение this.
  getUserInput ("Barack", "Obama", clientData.setUserName, clientData);
  // Получаем в консоль
  console.log (clientData.fullName); // Barack Obama

