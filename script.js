// console.log("HELLO");
// var d =" mahi cute your salary is next";
//  console.log(d);
//  var s = 1000000;
//  console.log (s);
//  s = 1200000;
//  console.log(s);
//  let num1 = 80;
//  let num2 =10;
//  let sum;
//  let product;
//  let division;
//  sum = num1 + num2;
//  console.log(sum);
//  product= num1*num2;
//  console.log(product);
//  division= num1/num2;
//  console.log(division);
//  var x=4;
//  ++x;

//  function adder(x, y) {
//     return x+y;
//    }
//     console.log(adder(10,20));
// var pass=50;
// var score=97;
// if (score >= pass){
// console.log("you pass");
// }
// function checc(point, score, name) {
//    if (point >= score){
//       console.log(name+ ":fail");
//    }
//    else{
//       console.log(name+ ": pass");
//    }
// }
    
// checc(80,97, "mahider tesfalem");
// checc(80,77, "almaz");

// var greating= "";
// var timeofday;
// timeofday ="evening";

// switch(timeofday){
//    case "morning":
//    greating = "good morning";
//    break;
//    case "afternoon":
//       greating =" good afternoon";
//       break;
//       case "evening":
//          greating= "good evening";
//          break;
//          default:
//             greating = " hi there";
//             break;
// }
// console.log(greating);
// function add(){
// return "jonny loves mahi";
// }
// console.log(add);
// console.log( 1==1 || 2==3);
// console.log( 1==1 && 2==3);
// var myfirstarray = ["mahi","abrsh", "20", "10"];
// console.log(myfirstarray);
// console.log( myfirstarray[2] * myfirstarray[3]);
// function triarea(base,height) {
//    if(isNaN(base) || isNaN(height)){
//       return "i can add only numbers";
//    }
//    var area= base * height/2;
//    return area;
// }
// var sum= triarea(5,4);
// console.log(sum);
// function footballpoints(a,b,c){
// if(isNaN(a) || isNaN(a) || isNaN(a)){
//    return"please enter only numbers";
// }
// var winpont= 3*a;
// var drawpoint= 1*b;
// var losepoint= 0*c;
//  const total=winpont + drawpoint + losepoint;
//  return total;
// }
// var point=footballpoints(5,2,2);
// console.log(point)
// 
// function print(start,end){
//    for(let i=start; i<=end ; i++)
//    console.log("printing page numbers",);
// }
// print(2,4);
// print(4,8);
// function listname(arr){
//    let i=0;
//    while(i<  arr.length){
//       console.log(arr[i]);
//       i++;
//    }
// } 
//   listname(["abebe","ruth","poulos"])
//  function addup(a){
// if(typeof a!== "number")  {
//    return"please enter anumber value";
// }
// else if(a<0){
// return "please provide only positve number";
// }
// else{
//    var result = 0;
//    for(i=1; i<=a; i++) {
//       result = result+i;
//       console.log("value of number:", i);
//       console.log("sum of number:", result);
//    }
//    return result; 
//  }}
//  console.log(addup(4));
let myFiatcar = {
  name: "fiat",
 model: 508,
 weight: "850g",
color: "white",
start: function(){
 return " start my" + myFiatcar.name;
},
drive: function(){
 return "go forard";
},
brake: function(){
 return "press on my brae my " + this.name;
},
stop: function(){
 return "stop my" + this.name;
},
};
console.log(myFiatcar);

let method = "abebe"
console.log(method.charAt(3))
console.log(method.indexOf("a"))
console.log(method.slice(1,4))
function football(a,b,c){
if (isNaN(a)|| isNaN(b) || isNaN(c)){
return "please enter correct number";
}
 const winpoint =3*a
 const drawpoint =1*b
 const loosepoint =0*c
 const total =  winpoint + drawpoint + loosepoint
 return total;
}
var point= football(3,4,5);
console.log(point);
 

  