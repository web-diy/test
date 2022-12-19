date = new Date();

function formatDate (d) {
  let result = '';
    if (typeof(d) == 'number') {
      result = new Date(d*1000);
    } else
    if (typeof(d) == 'string') {
      result = new Date(d);
   } else
    if (typeof(d) == 'object'){
      if (Array.isArray(d)){
      result = new Date (d[0], d[1], d[2]);
    } else 
      result = new Date (d);
  }
    
  return result.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});
}

//console.log(formatDate('2012-08-01'));
//console.log(formatDate(123));
console.log(formatDate(1234567890));
console.log(formatDate('2011-02-01'));
console.log(formatDate([2014, 0, 1]));
console.log(formatDate(new Date (2016, 0, 1)));
console.log(formatDate(date));
