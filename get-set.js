function User(fullName) {
    this.fullName = fullName;

Object.defineProperties(this, {

    firstName: {

        get: function() {
            return this.fullName.split(' ')[0];   
        },
        set: function(newFirstName) {
            this.fullName = newFirstName + ' ' + this.lastName;
        }
    },

    lastName: {
    get: function() {
        return this.fullName.split(' ')[1];
    },

    set: function(newLastName) {
        this.fullName = this.firstName + ' ' + newLastName;
     }
    }
});
}
let vasya = new User('Вася Петров');
//console.log(vasya);
console.log(vasya.fullName);
console.log(vasya.firstName);
console.log(vasya.lastName);


vasya.lastName = 'Сидоров';
vasya.firstName = 'Иван';
console.log(vasya.fullName);
console.log(vasya.lastName);
console.log(vasya.firstName);
//console.log(Object.getOwnPropertyNames(vasya));
//console.log(Object.keys(vasya));