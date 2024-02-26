//Premitive

//non-premitive
//reference type
const b = { name: "Moudud" };
const nums = [1, 2, 3];

let num1 = nums;
num1.push(3);
console.log(num1);
console.log(nums);

let c = b;
c.age = 27;

let f = c;
f.country = "Bangladesh";
console.log(b);
console.log(c);
console.log(f);

//Truthy and Falsy Value

//False Value => false,0,"",Null,undefined,Nan
//truthy=> true,"Moudud",12345,1,[],{}
//How can I check truthy or falsy\
const value = "Moudud";
const value1 = "";
console.log(!!value);//true
console.log(!!value1);//falsy
