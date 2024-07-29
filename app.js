// let arr = [7,9,0,-2];
// console.log(arr.slice(-3));
// console.log(arr.slice(1));
// console.log(arr.slice(0,3));

// let str = prompt("enter your string");
// if(str.length != 0){
//     console.log("string");
// }else{
//     console.log("notString");
// }
// let str = prompt("enter your string");
// if(str.length == 0){
//     console.log("notString");
// }else{
//     console.log("String");
// }

// let str = "HaRsh

// let arr=["hello", 'a' , 23, 64, 99, -6];
// let item = "hello";
// if(arr[arr.indexOf(item)] == item){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// if(arr.indexOf(item) != -1){
//     console.log("Right");
// }else{
//     console.log("Wrong");
// }

// let num = 2334501;

// if(num%10 == 0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// let uName = prompt("enter your name");
// let uAge = prompt("enter your age");
// console.log(`${uName} is ${uAge} years old.`)

// let quarter = prompt("enter qarter");
// let quarterN = parseInt(quarter);
// switch (quarterN) {
//     case 1:
//         console.log("January, February, March")
//         break;
//     case 2:
//         console.log("April, May, June")
//         break;
//     case 3:
//         console.log("July, August, September")
//         break;
//     case 4:
//         console.log("October, November, December")
//         break;

//     default:
//         console.log("Not a quater")
//         break;
// }
// let str = "Apps";
// if((str[0]=='A'|| str[0]=='a') && str.length>5){
//     console.log("Golden string");
// }else{
//     console.log("Bad String");
// }

// let a = 25;
// let b = 18;
// let c = 13;

// if(a>b){
//     if(a>c){
//         console.log("a")
//     }else{
//         console.log("c")
//     }
// }else{
//     if(b>c){
//         console.log("b")
//     }else{
//         console.log("c");
//     }
// }

// let num1 = 321123;
// let num2 = 478532332;

// if(num1%10 == num2%10){
//     console.log("same last digit");
// }else{
//     console.log("different last digit");
// }

// for(let i = 1; i<=3; i++){
//     console.log(i, "i");
//     for(let j = 1; j<=3; j++)
//         console.log(j);
// }

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let x = 5;
// while(x>=1){
//     console.log(x);
//     x--;
// }
// let i = 1;
// while(i<=20){
//     console.log(i);
//     i+=2;
// }

// let favMovie = "Avatar";
// let guess = prompt("enter your guess");
// while((favMovie!=guess) && (guess!="quit")){
//     guess = prompt("wrong guess, try again");
// }

// if(favMovie==guess){
//     console.log("congrates you are right")
// }else{
//     console.log("you quit");
// }

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
//     if(i==3){
//         break;
//     }
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");
// for(let i = fruits.length-1; i>=0; i--){
//     console.log(i+1, fruits[i]);
// }

// let heroes = [["ironman", "spiderman", "thor"],["superman", "wonder-woman", "flash"]];

// for(let i = 0; i<=heroes.length-1; i++){
//     console.log(`list # ${i+1}`);
//     for(let j = 0; j<=heroes[i].length-1; j++){
//         console.log(heroes[i][j]);
//     }

// }

// let student =[["aman", 95], ["shradha", 94.5], ["karan", 99]];

// for(let i=0; i<student.length; i++){
//     console.log(`information of student no. ${i+1}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

// for(char of "apnaCollge"){
//     console.log(char);
// }

// let heroes = [["ironman", "spiderman", "thor"],["superman", "wonder-woman", "flash"]];

// for(let list of heroes){
//     for(let hero of list){
//         console.log(hero);
//     }
// }

// let arr=[1,2,3,4,5,6,2,3];
// let num = 2;
// let newArr = [];
// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i] != 2){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// let arr=[1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let num = 287152;
// let arr = Array.from(String(num));
// console.log(arr);
// let j;
// for(let i=1; i<arr.length; i++){
//     j = (i+=1);
// }
// console.log(j);

// let num = 287152;
// let arr = Array.from(String(num));
// console.log(arr);
// let sumNum = 0;
// for(let i=0; i<arr.length; i++){
//     let x = parseInt(arr[i]);
//     sumNum = x+sumNum;
// }
// console.log(sumNum);

// let num = 287152;
// let arr = Array.from(String(num), Number);
// console.log(arr);
// let sumNum = 0;
// for(let i=0; i<arr.length; i++){
//     sumNum = arr[i]+sumNum;
// }
// console.log(sumNum);

// let item = prompt("enter number to find factorial");
// let num = parseInt(item);
// let x = 1;
// for(let i=1; i<=num; i++){
//     x = x*i;
// }
// console.log(x);

// let arr = [2, 5, 10, 4, 2, 7, 1, 99];
// let largest = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
// }
// console.log(largest);

// const item = {
//     price: 99,
//     discount: 50,
//     color: ["red", "yellow"]
// };
// console.log(item.color[0]);

// const student = {
//     name: "shradha",
//     age: 32,
//     marks: 94.4,
//     city: "Delhi"
// };
// console.log(student);     
// student.city = "Mumbai";
// console.log(student);
// console.log(student.city);
// student.gender = "female";
// console.log(student);
// console.log(student.gender);
// student.marks = "A";
// console.log(student);
// console.log(student.marks);

// delete student.marks;
// console.log(student);

// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     shradha: {
//         grade: "A",
//         city: "Pune"
//     },
//     karan: {
//         grade: "O",
//         city: "Mumbai"
//     }
// };

// const classInfo = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "shradha",
//         grade: "A+",
//         city: "Pune"
//     },
//     {
//         name: "karan",
//         grade: "O",
//         city: "Mumbai"
//     }];

//     console.log(classInfo[1].city);
//     console.log(classInfo[2].grade);
//     console.log(classInfo[0].name)
//     classInfo[2].city = "Gurugaon";
//     console.log(classInfo[2]);
//     classInfo[1].gender = "female";
//     console.log(classInfo[1]);

// console.log(Math.floor(-5.4));
// console.log(Math.floor(5.4));
// console.log(Math.ceil(5.1));
// console.log(Math.ceil(-7.9));
// let randomNumber = Math.floor(Math.random()*5)+1;
// console.log(randomNumber);


// let x = Math.floor(Math.random()*100)+1;
// console.log(x);

// let y = Math.floor(Math.random()*5)+1;
// console.log(y);

// let x = Math.floor(Math.random()*5)+21;
// console.log(x);

const max = prompt("enter the maximum number");
let numb = Math.floor(Math.random()*max)+1;
let guessN = prompt("guess the number");
while (true) {
    if(guessN == "quit"){
        console.log("You quit the game");
        break;
    }else if(guessN == numb){
        console.log(`you are right, number is ${numb}`);
        break;
    }else if(guessN > numb){
        guessN = prompt("your guess is too large, try again");
    }else if(guessN < numb){
        guessN = prompt("your guess is too small, try again");
    }else{
        guessN = prompt("your guess is wrong, try again");
    }
}
