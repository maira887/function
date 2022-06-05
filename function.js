



function getValue(param1, param2, type) {
  if (type === "+") {
    sum(param1, param2);
  } else if (type === "-") {
    sub(param1, param2);
  } else {
    console.log("Invalid type");
  }
}


 sum(param1, param2);
 console.log(sum);
 
  
  {
  sub(param1, param2);
   console.log(sub);
  
  }

  {
  mul(param1,param2)
  console.log(mul);
 }

 {
   div(param1, param2);
   console.log(div);
 }


 function sum(p1, p2) {
 result = p1 + p2;
 console.log("Addition result is => " + result);
 }

 function sub(p1, p2) {
 let result = p1 - p2;
 console.log("Subtraction result is" + result);
 }

 function mul(p1,p2){
 result = p1 * p2;
 console.log("multiplication result is" +result);

 }
 function div(p1, p2) {
 result = p1 / p2;
 console.log("division result is" + result);
 }

 getValue(100, 80, "+");
 getValue(100, 80, "-");
 getValue(100, 80, "*");
 getValue(100, 80, "/");