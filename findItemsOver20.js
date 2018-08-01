modules.exports = function(list){
var store =[];
for(var i =0;i<list.length;i++){
  var num = list[i].qty;
  if(num>20){
     store.push(list[i]);

     }
   }
   return store.length;
}
