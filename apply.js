var gameController = {
    scores  :[2, 4, 8, 16, 32],
    avgScore:null,
    players: [
        {name:"Tommy", playerID:987, age:23},
        {name:"Pau", playerID:87, age:33}
    ]
}

var appController = {
    scores: [4, 8, 8, 4],
    avgScore:null,
    avg     :function () {

        var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
            return prev + cur;
        });

        this.avgScore = sumOfScores / this.scores.length;
    }
}

//  Обратите внимание, что тут мы используем apply(), так что вторым аргументом должен быть массив
appController.avg.apply (gameController);
console.log (gameController.avgScore); // 46.4

//  appController.avgScore до сих пор null; он не изменился, только gameController.avgScore
appController.avg();
console.log (appController.avgScore); // null