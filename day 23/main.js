// Function showMessage(){
//     alert("This is a function in Javascript")
// }

// showMessage();

function sum(x,y){
     document.write("<br>")
}

sum(2,5);
document.write("<br>")
sum(55,44);
document.write("<br>")
sum(125,54);


// arrow function 
// var arrowfunction = name => alert(`Hello ${name}`);

// arrowfunction("Valmir");   


//function testfunction(){
   // var localVar = "Valmir";
    //alert(localVar);
//}

//testfunction();

var car ={name: "Mercedes",
    color:"red",
    model:"C200",
    year:2019
    kilometers:0,
    startEngine: function(){
        alert("The car is starting!");
    },
    get getKilometers(){
        return this.kilometers;
    }
    set setKilometers(km){
        this.kilometers = km;
    }
};

console.log(car.getKilometers);
car.setKilometers = 100;
console.log(car.getKilometers);
 
//alert(car,name);
// alert(car.color);

//var car = new Object();

//car.name = "Mercedes";
//car.color = "red";
//car.model = "C200";
//car.year = 2019;
//car.kilometers = 0;

//car.type = function(){
//  
// return this.name+ " " + this.color+ " " + this.model+ " " + this.year+ " " + this.kilometers;
//}

//console.log(car.type());