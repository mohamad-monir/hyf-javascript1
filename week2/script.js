//exersice 1 (string);
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let newString = myString.replace(/,/g,' ');
console.log(newString);
//exersice 2 (Arrays);
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals.push("turtle"));
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,"meerkat");
console.log("the new character suppose to be add at position 1 using splice");
console.log(favoriteAnimals);
console.log("The array has a length of: "+favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index",favoriteAnimals.indexOf("meerkat"));
//more javascript 

console.log("more javascript")



console.log("exercise 1")
// exercise 1
function sumArguments(value1,value2,value3){
    let sum = value1+value2+value3;
    return sum;
}
console.log(sumArguments(10,20,30));


console.log("exercise 2");
//exersice 2
function colorCar(nameOfColor){
console.log("a "+nameOfColor+" car");
}
colorCar("red");

console.log("exercise 3");
//exersice 3
let myLocal;
myLocal = {mark:"lenovo",age :1,manufactor:"china"};
function printIt(x){
console.log(x);
}
printIt(myLocal);
printIt(myLocal.manufactor);

console.log("exercise 4");
// exersice 4
function vehicleType(color,type){
if(type === 1){
console.log("a "+color+" car");
}else if(type === 2){
console.log("a "+color+" motorbike");
}else{
console.log("sorry: for now we have only two chooses : 1 for car and 2 for bike.");
}
}
vehicleType("yellow",1);
vehicleType("red",2);
vehicleType("purple",7);


console.log("exercise 5");
//exersice 5
console.log(3===3);


console.log(" exercise 6");
//exersice 6
function Vehicle(color,type,age){
if (age <= 4 && type === 1){
console.log("a "+color+" new "+" car");
}else if(age >= 5 && type === 1){ 
console.log("a "+color+" used "+" car")
}else if(age <= 4 && type === 2 ){
console.log("a "+color+" new "+" motorbike");
}else if(age >= 5 && type === 2 ){
console.log("a "+color+" used "+" motorbike")
}else {
console.log("invaild input: use 1 for cars and 2 for motorbikes")
}
}

Vehicle("blue",10,1);
Vehicle("red",1,10);


console.log("exercise 7");
//exersice 7
let vehicleList = ["car","motorbike","caravan","bike"];


console.log("exercise 8");
// exersice 8
vehicleList.splice(3,1);
console.log(vehicleList);
vehicleList.push("bike");


console.log("exercise 9");
//exersice 9
function vehicle(color,type,age){
    if (age <= 4 && type === 1){
        console.log("a "+color+" new "+" car");
    }else if(age >= 5 && type === 1){ 
         console.log("a "+color+" used "+" car")
    }else if(age <= 4 && type === 2 ){
        console.log("a "+color+" new "+" motorbike");
    }else if(age >= 5 && type === 2 ){
        console.log("a "+color+" used "+" motorbike");
    }else if(age <= 4 && type === 3 ){
        console.log("a "+color+" new "+" bike");
    }else if(age >= 5 && type === 3 ){
        console.log("a "+color+" used "+" bike");
    }else if(age <= 4 && type === 4 ){
        console.log("a "+color+" new "+" caravan");
    } else if(age >= 5 && type === 4 ){
        console.log("a "+color+" used "+" caravan");
    }else {
        console.log("invaild input: use 1 for cars ,2 for motorbikes, 3 for bikes, 4 for caravans ");
    }
}
vehicle("green", 3, 1);
vehicle("purple",2,10);
vehicle("black",20,1);


console.log("exercise 10");
//exersice 10 
console.log(vehicleList.length);
let mo ="";
let mo1="";
for(i=0;i<(vehicleList.length-1);i++){
    mo+= vehicleList[i]+"s, ";
}
for(i=3;i<vehicleList.length;i+=1){
    mo1+= "and "+vehicleList[i]+"s";
}

console.log("Amazing Joe's Garage, we service " +mo+mo1+" .");


console.log("exercise 11");
//exercise 11
vehicleList.push("scooter");
console.log(vehicleList);


console.log("exercise 12")
//exercise 12
let emptyObj ={};


console.log("exercise 13 && 14");
//exercise 13 && 14
let myTeacher ={css:("philipe"),js:("Rogier"),git:("Arco")};


console.log("exercise 15");
//exercise 15
let x =[1,2,3];
let y =[1,2,3];
let z = y ;
if(x == y){
    console.log("x == y "+true);
}
 if(x != y){
    console.log(" x == y "+false);
}
 if (x === y){
    console.log("x === y "+ true);   
}
 if(x !== y){
    console.log("x === y "+ false);
}
 if(z == y){
    console.log("z == y "+true);
}
 if(z != y){
    console.log("z == y "+false);
}
 if(z == x){
    console.log("z == x "+true);
}
 if(z != x){
    console.log("z == x "+false);
}


console.log("exercise 16");
//exercise 16 
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
o2.hi = ("beer");
console.log("the new element that have been add to o2 will be add to o3");
console.log(o3);
o1.hello = "vodka";
console.log("there will be no change in o3 if we add new element to o1");
console.log(o3);
if(o3===o2 && o2===o3){
    console.log(true);
}else{
    console.log(false);
}



console.log("exercise 17");
// exercise 17 
let bar = 42;
console.log(typeof typeof bar);
console.log("'from mdn' The typeof operator returns a string indicating the type of the unevaluated operand.");


