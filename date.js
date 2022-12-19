function formatDate (date){
let opt = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};

let diff = new Date() - date;
let result;

    if (diff<1000) return 'только что';

    let sec = Math.floor(diff/1000);
    if (sec < 60) return sec + ' секунд назад';

    let minute = Math.floor(diff/(1000*60));
    if (minute < 60) return minute + ' минут назад';

    result = new Date().toLocaleString('ru', opt);
    return result;
}


console.log( formatDate(new Date(new Date - 24*3600*1000)) ); 
//console.log(date);



