//------------1---------


// let num = ["1","2","3","4","5","6","7","8","9","10"];

// for (i = 1; i < 10; i++) {
    
// }
// console.log(num);


//------------2-3-------


// var arr = [13, 23, 12, 45, 22, 48, 66, 100];
// var evenNumbers = [];

// arr.push(arr[arr.length - 1]);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenNumbers.push(arr[i]);
//     }
// }

// console.log(arr);
// console.log(evenNumbers);


//-----------4-------------

// var arr = [13, 23, 12, 45, 22, 48, 66, 100];

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr);

//----------5-----------

// var arr = [23,56,4,78,5,63,45,210,56]

// var delNum = 78;

// for (let i = 0; i < arr.length; i++) {
//     if (delNum === arr[i]) {
//         arr.splice(i,1)
        
//     }

// }
// console.log(arr);

//---------6----------

// var arr = [[1, 2], [3, 4], [5, 6]]

// var num = []

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         num.push(arr[i][j])        
//     }    
// }

// console.log(arr);
// console.log(num);

//---------7----------

// var num = "435389"

// var arr = num.split("")

// var sum = 0

// for (let i = 0; i < arr.length; i++) {

//     sum += parseInt(arr[i])
// }


// console.log(num);
// console.log(arr);
// console.log(sum);

//---------8----------

// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123] 

// var maxNum = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//         maxNum = arr[i]
        
//     }    
// }
// console.log(arr);
// console.log(maxNum);
 
//------------9-------

// var num = [6, 2, 1, 8, 10 ]

// var maxNum = num[0]

// var minNum = num[0]

// for (let i = 0; i < num.length; i++) {
//     if (num[i] > maxNum) {
//         maxNum = num[i]
//     }else if (num[i] < minNum) {
//         minNum = num[i]
//     }
// }

// var numT = []

// for (let i = 0; i < num.length; i++) {
//     if (num[i] !== minNum && num[i] !== maxNum) {
//         numT.push(num[i])
//     }    
// }

// var sum = 0

// for (let i = 0; i < numT.length; i++) {
//     sum += numT[i]   
// }

// console.log(sum);

//--------10---------

// var arr = [20,-1,-7,8,0.12,7,8]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         console.log(arr[i]);
//     }  
// }

// ------11 -------

// var arr = ['salam','77','99',100,5,'sagol','necesen']

// for (let i = 0; i < arr.length; i++) {
//     if (parseInt(arr[i])) {
//         console.log(arr[i]);
//     }
// }

// ----- 12 ------

// var arr = ["3:1", "2:2", "0:1","0:2", "1:0", "2:3","4:3", "1:1", "4:2"]

// for (let i = 0; i < arr.length; i++) {

//     var res = arr[i]

//     var matRes = res.split(":")

//     var s1 = +(matRes[0])

//     var s2 = +(matRes[1])

//     if (s1 > s2 ) {
//         console.log("Home Win",res);
//     }else if (s1 < s2) {
//         console.log("Guests Win",res);
//     }else {
//         console.log("Draw", res);
//     }
// }

//-------13------------


// for (let i = 0; i <= 200; i+= 10) {
   
//     console.log([i]);
// }

//-----------14------------

// var arr = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]

//     var tr = 0
//     var fl = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === true) {
//         tr ++
//     }else if (arr[i] === false) {
//         fl ++
//     }
// }
// console.log(tr);
// console.log(fl);

//--------15--------------

// var arr = "In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS."

// var low = 0

// var up = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i].toLowerCase()) {
//         low += 1
//     }else if (arr[i] === arr[i].toUpperCase() && arr[i] !== " " && arr[i] !== "," && arr[i] !== ".") {
//         up += 1
//     }
// }

// console.log(low);
// console.log(up);

//----------16-------------

