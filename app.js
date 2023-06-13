var amount = +prompt("Enter a amount");
if (amount>=5000 ){
    var n1 = amount / 5000;
    var flo_n1 = Math.floor(n1)
    console.log(flo_n1 + " note of 5000")
    if (amount%5000!=0) {
        amount = amount - flo_n1 * 5000
        // console.log(amount)
    }
}
if (amount >= 500 && amount <5000){
    var n2 = amount / 500;
    var n2 = Math.floor(n2)
    console.log(n2 + ' note of 500')
    if (amount%500!=0) {
        amount = amount - n2* 500
        // console.log(amount)
    }
}
if (amount>= 100 && amount<500){
    var n3 = amount/ 100;
    var n3 = Math.floor(n3)
    console.log(n3 + " note of 100")
    if (amount%100!=0) {
        amount = amount- n3*100;
        // console.log(amount);
    }
}
if (amount>= 50 && amount<100){
    var n4 = amount/ 50;
    var n4 = Math.floor(n4)
    console.log(n4 + " note of 50")
    if (amount%50!=0) {
        var amount = amount- n4*50;
        // console.log(amount);
    }
}
if (amount>= 10 && amount<50){
    var n4 = amount/ 10;
    var n4 = Math.floor(n4)
    console.log(n4 + " note of 10")
    if (amount%10!=0) {
        var amount = amount- n4*10;
        // console.log(amount);
    }
}




//new 

var a = 7
function foo(){
    if(a==7){
    	console.log(a)
    }
}
foo()
