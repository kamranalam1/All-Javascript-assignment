// Qusetion no 1 

let num1 =+prompt("QNO:1 Enter your 1st number! ")
let num2 =+prompt("Enter your 2nd number! ") 
if (num1>num2) {
    console.log("The Largest Number Is " + num1);
    
}else if  (num2>num1) {
    console.log("The Largest Number Is : " + num2);
    
} else {
    console.log("Please Chose your Different Number!");
}



// Question no 2 
let number = +prompt("QNO 2 :  Enter you Number + or - !")
if (number>=0) {
    console.log("The Sign Is   +"+ number);
}else{
    console.log("The Sign Is  " + number);
}

// Question no 3

let firstnum = +prompt(" QNO 3 : Enter youe 1st Number ")
let secondnum = +prompt("Enter youe 2nd Number ")
let thirdnum = +prompt("Enter youe 3rd Number ")
let fournum = +prompt("Enter youe 4th Number ")
let fivenum = +prompt("Enter youe 5th Number ")

if (firstnum>secondnum && firstnum>thirdnum && firstnum>fournum && firstnum>fivenum) {
    console.log("The Largest Number Is : " + firstnum);
    
}else if (secondnum>firstnum && secondnum>thirdnum && secondnum>fournum && secondnum>firstnum){
 console.log("The Largest Number Is : " + secondnum);
}else if (thirdnum>firstnum && thirdnum>secondnum && thirdnum>fournum && thirdnum>fivenum){
    console.log("The Largest Number Is : " + thirdnum);
}else if (fournum>firstnum && fournum>secondnum && fournum>thirdnum && fournum>fivenum){
    console.log("The Largest Number Is : " + fournum);
}else if (fivenum>firstnum && fivenum>secondnum && fivenum>thirdnum && fivenum>fournum){
    console.log("The Largest Number Is : " + fivenum);

}

// Question no 4 

let student = prompt(" QNO 4 : Enter your Student Total Number ! ")

if (student>=80) {
    console.log("The Grade Is A1 ");
}else if (student>=70) {
    console.log("The Grade Is A ");
}else if (student>=60) {
    console.log("The Grade Is B ");
}else if (student>=50) {
    console.log("The Grade Is C");
}else if (student>=40) {
    console.log("The Grade Is D");
}else if (student<40) {
    console.log("The Grade Is F");
}
