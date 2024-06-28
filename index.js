// let score = true
// let score = "33"
// let score = 33



// const {score} = req.body
// console.log(typeof score);
// console.log(typeof(score));
// let valueInNumber=Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// let isLoggedin = 1;
// let booleanIsLoggedIn = Boolean(isLoggedin)
// console.log(booleanIsLoggedIn);

// 1 => true 0 =>false 
// " " => false 
// "ram" => true 

let someNumber =33;
let stringNumebr = String(someNumber);
// console.log(stringNumebr);
// console.log(typeof(stringNumebr));



// ------------------------------DATE--------------------------- 



let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());//india standard time
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());//only date
// console.log(myDate.getTime());

// console.log(myDate.toUTCString());  //time and date GMT

// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());  //local date 

// console.log(myDate.toTimeString()); //india Standard Time
//console.log(myDate.getTimezoneOffset());

// console.log(myDate.getHours());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023,0,23)
// let myCreateDate = new Date(2023,0,11,5,3)

// let myCreateDate = new Date("2023-01-15")
let myCreateDate = new Date("01-01-2015")


// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString())



// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));



// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1);



// newDate.toLocaleString('default',{
//     weekday:"long",
// })





// ----------------------------------Array-------------- 

const myArr = [0,3,4,5,6];
// const myHeros = ["Aman","Nirmal","Sanjay","Prabhash"]

const myArr2 = new Array(3,5,6,6,77)
// console.log(myArr[2]);

// -----------------------Array methods------------------------ 

// myArr.push(8)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //starting add array value
// myArr.shift()


// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))


// let newArr = myArr.join()
// console.log( typeof newArr)



// console.log(myArr);


//-------------------slice , splice---------------------


// console.log("A",myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1)
// console.log("B",myArr)

// const myn2 = myArr.splice(1, 3)
// console.log(myn2)



let myHeros = ["sanjay","sanju","kunjesh"];
let yourHeros = ["Aman","Mukesh","Bhagwan"];

// myHeros.push(yourHeros);
// console.log(myHeros[1][1]);

// let news =myHeros.concat(yourHeros);
// console.log(news);

// let All_Heros = [...myHeros, ...yourHeros]  //concat spred operator out
// console.log(All_Heros);


// const another_array = [1,2,3,4,[3,4,4],[4,5,5,5]]
// const real_array = another_array.flat(Infinity)
// console.log(real_array)

// console.log(Array.isArray("Ramakant"))
// console.log(Array.from("Ramakant"))

// let score1 =100;
// let score2 =200;
// let score3 =300;
// console.log(Array.of(score1,score2,score3));




// -----------------Object-------------------------- 
const mysymbol = Symbol("key1");

let myobj = {
    myname : "rama",
    [mysymbol]: "mysymbolfdhds",
    age : "22",
    city :"ddn"

}


console.log(myobj["city"]);
console.log(myobj.myname);
console.log(myobj[mysymbol]);

myobj .email = "ramakantprajapati11@gmail.com"

Object.freeze(myobj )

myobj .email = "ramakantprajapati1sdddd1@gmail.com"

console.log(myobj );

