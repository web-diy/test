let calculator = {
    sum: function() {
        return this.a + this.b;
    },

    mul: function() {
        return this.a * this.b;
    },

    read: function() {
        this.a = +prompt('Введите a?', 0);
        this.b = +prompt('Введите b?', 0);
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());