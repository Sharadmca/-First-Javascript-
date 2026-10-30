// function student(name="Sharad",course='MCA',discount=0){
//     let total=price*quantity;
//     total=total-(total*discount/100);

//     return total;
// }

// console.log(bill(1000));
// console.log(bill(1000,3));
// console.log(bill(1000,3,10));

#############################################################################################3
function student(...numbers){
    let total=0;

    for(let n of numbers){
        total+=n;
    }
    return total;
}
console.log(student(10,20));
console.log(student(10,20,30,40));
console.log(student(5,10,15,20,25));



###########################################################################################
function student(...numbers) {
    let sum = 0;
    let count = 0;

    for (let n of numbers) {
        sum += n;    
        count++;    
    }

    console.log("Sum =", sum);
    console.log("Count =", count);
}

student(10, 20);
student(10, 20, 30, 40, 100);
student(5, 10, 15, 20, 25);