var num = parseInt(prompt("Enter the Table NO "))

for(var i = 1; i<=10; i++){
    result = i * num;
    console.log(num + " X " + i +  " = " + result );
}



var table = parseInt(prompt("Enter Table Generate"))
var range = parseInt(prompt("Enter Table Range:"))
for(var i = 1 ; i<=table; i++){
    for( var j =1; j<=range; j++){
        result = i*j;
        console.log(i  + " X " + j + " = " + result );
    }
    
}