var user = {
    firstName: "Вася",   
    sayHi: function() {
        console.log( this.firstName );
    }
};
let admin ={
    firstName: "Саша",   
};

let g = user.sayHi.bind(user);
let ga = user.sayHi.bind(admin);

setTimeout(g, 1000); // undefined (не Вася!)
setTimeout(ga, 1000); // undefined (не Вася!)
console.log(user.sayHi.bind(user)); // undefined (не Вася!)
console.log(user.sayHi.bind(admin)); // undefined (не Вася!)