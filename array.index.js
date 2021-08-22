var numbers = [231,55,21,32,52,55,665];
 index=numbers.indexOf(55); //finding index of array eliment by indexOf method
// console.log(index);

// console.log(numbers); // finding all array element

 arrayElement=numbers[2]; // finding specific array element by index
console.log(arrayElement);
 numbers[5] = 300; // changing array element by index
// console.log(numbers); 

//adding element in the ending into the array 
var students =['rohim','korim','norim','sorim'];
// students.push('porim'); //adding in the last corner of array
// console.log(students);

// removing last element from the array
// students.pop();
// console.log(students);

// removing element at the first of the array
// students.shift();
// console.log(students);

// adding element at the first of the array
// students.unshift('abbas');
// console.log(students);

// seperating last item of array
var lastItem=students.pop();
// console.log(lastItem);

// indexing proces
const nums=[1,5,2];
const result=nums.indexOf(0);//array element jodi [] e na thake tahole index -1 hobe.
console.log(result);