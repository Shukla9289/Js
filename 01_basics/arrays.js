let marks=[95,85,78,86,54];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks)); //array is  always object type where index is used as keys
//aceesing arrays

console.log(marks[0]);
console.log(marks[3]);
console.log(marks[4]);

marks[4]=66;
console.log(marks[4]);

// accessing all elements in array
let mobiles=["apple","moto","vivo","Mi","samsung","oppo"];
for(let i=0;i<mobiles.length;i++){
    console.log(mobiles[i]);
}
//arrays methods
//push method
mobiles.push("Redmi","oneplus","Techno");
console.log(mobiles);

//pop method
let deleteditem=mobiles.pop();
console.log(mobiles);
console.log("Deleted:",deleteditem);

//to string method
console.log(marks.toString());

//Concatenation method
let names=["satyam","shivam","sundaram","shubh"];
let surnames=["Shukla","Mishra","singh","avasthy"];
let fullnames=names.concat(surnames);
console.log(fullnames)

//slice method
console.log(names.slice(1,4));

//splice method
let numbers=[1,2,3,4,5,6,7];
numbers.splice(2,2,101,102);
console.log(numbers);
