console.log("array")
let arr =[1,23,45,67];
console.log(arr);
console.log(arr[1]);
 let arr1 = new Array(1,2,34,56,7);
 console.log(typeof arr);
 console.log(typeof arr1);
 let arrayq = new Array(5)
 console.log(arrayq);

 //arrPush = arr.push(arr1)
 //console.log(arr);

 arrcon = arr.concat(arr1);
 console.log(arrcon);
 
 arrStr = ["shuvan" ,"radhe"]
 arrjoin = arrStr.join()
 console.log(arrjoin);
 console.log(typeof arrjoin);


//let arr =[1,23,45,67];

arrSlice = arr.slice(1,3);
console.log(arrSlice);

arrSplice = arr.splice(1,1,56,78,98,"radha");
console.log(arrSplice);
console.log(arr);

console.log(Array.isArray([23,454,78,54]))
console.log(Array.isArray("radhe"))

 
//from converts items to arrray
let conArr = "strhello";
let convo = Array.from("conArr")
console.log(typeof convo);
console.log(typeof conArr);

let a ="hello"
let b ="how"
let c ="u re"

 arrOf = Array.of(a,b,c)
 console.log(arrOf);
 
 

