console.log("chaitanya")
//You have too many running codespaces. You'll need to stop some before you start a new codespace.
console.log("chaitanya") 
const accountID = 1200; 
 //datatype is number 
 let accHolName = "rahul"  // is string 
 
 var password ="12345"  // is string 
 let accState; // undefined
  let acc =null; // null is standalone value 
  //assignment in const cannot be possible again 
   //var is global scope //let is a block level scope
  //nan is nan not an number //
  console.log(accountID) 
console.table({accHolName,accountID,password,accState,acc}) 
console.log(typeof accState) //type of undefined is that itself 
console.log(typeof acc); // type of null is object

//converations in js
let score = 33
console.log(typeof score)

let scoreStr = String(score) 
console.log(typeof scoreStr) 
console.log(scoreStr)

let val = "20"

 console.log(typeof val)
  let valInNumber = Number(val);
  console.log(typeof valInNumber)

  let valAnother ="20abb"
  console.log(typeof valAnother)
  let valInNumber2 = Number(valAnother);
  console.log(typeof valInNumber2) // here output comes as number which is wrong as abb is not converted to number
  console.log(valInNumber2); //nan
   //if val is null then it comes as 0 that is after conberting to number he type of is number nd the value is 0
   //lly undefined type is undefined value comes as nan when converted to num the type of is number

   let num = true
   let emp =""
   let numConBol = Boolean(num);
   console.log(numConBol)
   let numConBol1 = Boolean(emp);
   console.log(numConBol1)


   console.log(+true);
   console.log(+"")

   //comparision 
   console.log("2">1); // 2 gets convert into num results in ans as true 
   // awlays keep same data type 

   console.log(null>0)
   console.log(null<0)
   console.log(null==0) // equality check 

   console.log(null>=0) 
   console.log(null<=0)  // comparsion check
   //comparsion checks behave different then equality  so >= here it converts null to 0
//null ke jaga undefined val is false

