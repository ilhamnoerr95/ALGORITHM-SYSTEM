// BUAT FUNCTION REVERSE 
// KITA MENGGUNAKAN SPLIT UNTUK MENGEMBALIKAN STRING MENJADI SUBSTRING ARRAY 
// LALU METHOD JOIN() MEMBALIKAN ARRAY MENJADI SEBUAH STRING

const fungsiReverse = (stringe)=>{
    let taik = stringe.split("").reverse().join("")
    // console.log(stringe.split("").reverse())
    return taik
}

console.log(fungsiReverse("ilham"))

// PENGGUNAAN RECURSION SAMA DENGAN MENGGUNAKAN FOR 
// AS EXAMPLE 
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.cal

// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
  console.log(multiply([1,2,3],3))



// FAKTORISASI MENGGUNAKAN SHORT CUT N! 
// function factorialize(num) {
//     let result = 1
//      for (let i = 2; i <= num; i++) {
//        console.log(i)
//       result *= i;
//     }
//     return result;
//   }
  
//   console.log(factorialize(5));
//   recursion system
// During the rest of the executions:
// Second Execution: num = 5-1 = 4 → is num 0 or 1? No
// → return the multiplication between 4 and the next result when num is now 4-1.
// Third Execution: num = 4 - 1 = 3 → is num 0 or 1? No
// → return the multiplication between 3 and the next result when num is now 3-1.
// Fourth Execution: num = 3-1 = 2 → is num 0 or 1? No
// → return the multiplication between 2 and the next result when num is now 2-1.
// Fifth Execution: num = 2-1 = 1 → is num 0 or 1? Yep
// → return 1. And this is where the recursion stops because there are no more executions.
function factorialize(num) {
 
    if (num === 0) {
      return 1;
    }

    return num * factorialize(num - 1);
    // 5 * 4 = 20
    // 20 * 3 = 60
    // 60* 2= 120
    // 120 * 1= 120 
    // tipe looping menggunakan rekursi
  }
  
console.log('recursi',factorialize(5));

// HOW TO FIND LONGEST WORD 
function findLongestWordLength(str) {
    let stri = str.split(" ")
    // console.log("spl", stri)
    let result = 0
    for(let i = 0; i < stri.length; i++){
      if(result < stri[i].length){
        // console.log('tr',stri[i].length)
        result = stri[i].length
      }
    }
    
      return result;
    }
    
    console.log("find longest ",findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

  // FINDING LARGEST NUMBER IN JAVASCRIPT
  function largestOfFour(arr) {
    let pusy = []
    for(let i= 0; i < arr.length;i++){
      // console.log(Math.max(...arr[i]))
     pusy.push(Math.max(...arr[i]))
    }
    return pusy;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

  // procedural ways to get largestnumber 
  function largestOffive(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
  
      // console.log(arr[i][0])
      for (let j = 1; j < arr[i].length; j++) {
        // console.log(j)
      //  apabila arr[i][j] lebih besar dari pada largestNumber maka 
      console.log(arr[i][j])
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      // console.log(largestNumber)
      results.push(largestNumber);
    }
  
    return results;
  }
  
  console.log("large number",largestOffive([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))

  // endsWith() method to find last word 
  function confirmEnding(str, target) {
  // return str.slice(str.length - target.length) === target;
  // USING REGULER EXPRESION
  //  let re = new RegExp(target + "$", "i");
  // return re.test(str);
    return str.endsWith(target);
  }
  
  console.log("ending word",confirmEnding("Bastian", "n"));
  


  // REPEATING STRING WITHOUTH REPEAT() METHOD
  function repeatStringNumTimes(string, times) {
    // Step 1. Create an empty string that will host the repeated string
    var repeatedString = "";
  
    // Step 2. Set the While loop with (times > 0) as the condition to check
    while (times > 0) { // As long as times is greater than 0, the statement is executed
      // The statement
      // console.log(times)
      repeatedString += string + ' '; // Same as repeatedString = repeatedString + string;
      times--; // Same as times = times - 1;
    }
    /* While loop logic
                        Condition       T/F       repeatedString += string      repeatedString        times
      First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
      Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
      Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
      Fourth iteration   (0 > 0)        false
      }
    */
    
    // Step 3. Return the repeated string
    return repeatedString; // "abcabcabc"
  }
  
  console.log("repeat String ->",repeatStringNumTimes("abc", 3));


  // TRUNCATE A STRING ... 

  function truncateString(str, num) {
    if(num >= str.length  ){
       return str.substring(0,num)
    }
    return str.substring(0,num) + "...";
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length ));

  // FINDS KEEPERS
  // findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// Waiting:findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
  function findElement(arr, func) {
    // let num;
   for(let i= 0; i< arr.length;i++){
    //  num = arr[i]
    //  console.log(num)
     if(func(arr[i])){
       return arr[i]
     }
   }
   return undefined
  }
  
  console.log("find keepers",findElement([1, 3, 5,9,10], num => num % 2 === 0));

  // CHECK TYPE BOOLEAN
  function booWho(bool) {
  
    return typeof bool === "boolean";
  }
  
  console.log(booWho(false));


//! Title Case a Sentence
  function titleCase(str) {
    let stri = str.toLowerCase().split(" ")
    for(let i = 0; i < stri.length; i++){
    //  console.log(stri[i].charAt(0))
     stri[i] = stri[i].toUpperCase().slice(0,1) + stri[i].substring(1)
    //  stri[i] = stri[i].toUpperCase().charAt(0) + stri[i].substring(1)
    //  Definition and Usage
    // The charAt() method returns the character at a specified index (position) in a string.
    // The index of the first character is 0, the second 1, ...
   }
    return stri.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));
  
  //! Slice and Splice
  //   Tests
  // Waiting:frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
  // Waiting:frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
  // Waiting:frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
  // Waiting:All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
  // Waiting:The first array should remain the same after the function runs.
  // Waiting:The second array should remain the same after the function run
  function frankenSplice(arr1, arr2, n) {
    //  extract first, kita buat copyan dari arr2 kedalam original variable
    let original = arr2.slice(0)
    original.splice(n,0,...arr1)
    return original;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));

  // FALSY BOUNCER 
  // NILAI YANG SUDA FALSE YAITU FALSE,NULL, 0,"",UNDEFINED, NAN
  // let falsy = [false, null, 0,"", undefined, NaN]
function bouncer(arr) {
  let ari = []
  for(let i=0;i< arr.length; i++){
   
    if(arr[i]){
      ari.push(arr[i])
    } 
  }
  return ari;
}
console.log(bouncer([null, NaN, 1, 2, undefined]));

let bounc = (arr)=>{
    
    return arr.filter(Boolean)

}

console.log(bounc([7, "ate", "", false, 9]))


// ! WHERE DO I BELONG , MENCARI INDEX KEBERAPA DARI PARAMETER KE DUA DIMANA PARAM KEDUA LEBIH KECIL/BESAR DARI PARAM PERTAMA
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Code Explanation
// First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
// Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index.

function getIndexToIns(arr, num) {
  // PENGGUNAAN SORT AKAN MENGUBAH ARRAY ORIGINAL
   arr.sort(function(a, b){return a - b});
 
  for(let i = 0; i < arr.length;i++){
    // console.log(i)
    if(arr[i] >= num){
      return console.log(i)
    }
  }
  return arr.length;
}
console.log(getIndexToIns([5, 3, 20, 3], 50));

// Code Explanation
// Count the number of entries that are smaller than the new value num
// The new value would be inserted after these values
// PENGGUNAAN FILTER TIDAK AKAN MENGUBAH ARRAY ORIGINAL
function getIndexToInss(arr, num) {
  return arr.filter(val => num > val).length;
}

console.log(getIndexToInss([10, 20, 30, 40, 50], 50));


// MUTATION
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// MEMBUAT VARIABEL BARU DARI PARAMETER 
// LALU MULAI PROSES ITERASI YG DIMANA KITA MENARGETKAN TARGET VARIABEL SERTA MENEMPATKAN TEST VARIABEL YG SUDAH DI LOOP MENJADI PARAMETER
// UNTUK MENGEKSEKUSI APABILA TARGET MEMILIKI INDEXOF DARI TEST, APABILA AWALAN ATAU AKHIRANNYA MENDAPATK INDEXOF -1 ALIAS DATA TIDAK ADA
// MAKA HASIL AKAN MERETURN FALSE
function mutation(arr) {
let test = arr[1].toLowerCase();
 let target = arr[0].toLowerCase();
 for(let i = 0; i< test.length; i++){
//  console.log(target.indexOf(test[i]))
   if(target.indexOf(test[i])<0) return false 
 }
 return true



}

console.log(mutation(["Alien", "line"]));


// CHUNKY MONKEY 
// solved problem dengan membuat for di mana expressionya adalah i += dengan parameter bernama size
function chunkArrayInGroups(arr, size) {
  // console.log(arr.join(" "))
  // console.log(arr.slice(1,3))
  let arru = []
  for(let i = 0; i < arr.length ; i+=size){
    console.log(i)
    // console.log(i ,i + size)
    let pler = arr.slice(arr[i],arr[i] + size)
    // console.log(pler)
    arru.push(pler)
  }
  return arru;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));