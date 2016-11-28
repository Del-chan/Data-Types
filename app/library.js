 module.exports = {

dataTypes: function(n){
   if(typeof n === "string"){
     return n.length;
   }
   else if (n === undefined|| n === null){
     return "no value";
   }
   else if(typeof n === "boolean"){
     return n;
   }
   else if(typeof n === "number"){
     if(n === 100){
       return 'equal to 100';
     }
     else if (n < 100){
       return 'less than 100';
     }
     else{
       return 'more than 100';
     }
   }
   else if(Array.isArray(n)){
     return (n.length >= 3)? n[2]: undefined;
   }
   else if (typeof n  === "function"){
     return n(true);
   }
  }
}