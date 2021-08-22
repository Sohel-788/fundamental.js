// Single parameter or arguement
function puri(taka){
    console.log('Mama puri den');
    console.log('Take your puri');
    var puriRate=5;
    var puriQuantity=taka / puriRate;
    return puriQuantity;

}
const haveMoney=100;
const havePuri=puri(haveMoney);
console.log(haveMoney, "takay Puri paoya gelo",havePuri)

//Multiple parameter
function addNum(num1,num2){
    var total=num1+num2;
    return total;
}
const firstNum=100;
const secondNum=100;
const result=addNum(firstNum,secondNum);
console.log('The sumation result is',result);

//Multiply 
function multiplication(num1,num2){
    var total=num1*num2;
    return total;
}
const a=45;
const b=56;
const result1=multiplication(a,b);
console.log('The multiplication result is',result1);

//Reduce
function biyog(num1,num2){
    let total=num1-num2;
    return total;
}
const first=200;
const second=50;
const result2=biyog(first,second);
console.log('The reduce result is',result2);

//Devision
function devisionResult(num1,num2){
    var total =num1/num2;
    return total;
}
const vajjo=500;
const vajok=200;
const result3=devisionResult(vajjo,vajok);
console.log('The division result is',result3);