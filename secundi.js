const all=((60 + 1)*60)+5;
const hours= Math.floor((all/3600));
const min= Math.floor((all-3600)/60);
const sec=all-3600-60;
console.log("Время: "+hours+" ч "+min+" минуты "+sec+" сек");
