function unique(arr) {
  let set = new Set(arr);

  return set;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//console.log( unique(values) );

function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }

    return (map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"