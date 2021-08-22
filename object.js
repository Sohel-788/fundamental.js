const computer={
    brand:'Dell',
    price:50000,
    model:'d5050',
    processor:'intel i5',
    color:'Black'
}
//three ways to access a object property
// console.log(computer);
console.log(computer.price); // one way
 computer['price']=40000;//second way and changing of property value
 console.log(computer);
 //third way of accessing and changing value
 const computerBrand='brand';
  computer[computerBrand]="Asus";
//   console.log(computer.brand);
console.log(computer);