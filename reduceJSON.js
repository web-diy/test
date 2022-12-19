var leader = {
  name: "Василий Иванович"
};
var soldier = {
  name: "Петька"
};
// эти объекты ссылаются друг на друга!

leader.soldier = soldier;
soldier.leader = leader;
var team = [leader, soldier];

let objects = team.reduce (function (result, team, index) {
  result[index] = {
    name: team.name
  }
  return result;

}, {})


console.log (objects);

console.log(JSON.stringify(objects,"",
    "  "
)
); 

//let resultJSON = JSON.stringify(team);
//console.log(resultJSON);

