// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.

var a1 = parseInt("258.90") 
var a11 = parseFloat("258.90")

//2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.

var a2 = 7.45678 
a2.toFixed(2)


//3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.

if(isNaN('adc')){
    console.log(true)
}

isNaN("") , isNaN("1")

//4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
(0.1 + 0.2) == 0.30000000000000004

(0.1 + 0.2).toFixed(1) 

//5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.

function func5(str){
    
    if(parseInt(str)){
        return parseInt(str)
    }
    else{
        return null
    }
}

//6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).

function finite(value){
    return typeof value === 'number' && !isNaN(value) && value !== Infinity
}

console.log(finite("123"));       // false 
console.log(finite(NaN));         // false 
console.log(finite(Infinity));    // false 
console.log(finite(null));        // false 

console.log(isFiniteNumber(0));           // true
console.log(isFiniteNumber(42));          // true
console.log(isFiniteNumber(-3.14));       // true
console.log(isFiniteNumber(1e10));        // true

//7. Remove leading and trailing spaces from the string "   hello world  ".

var s = "   hello world   "

s = s.trim()

//8. Get the substring "script" from "javascript" using two different methods (slice + substring).
var s =  "javascript"
var s2 = s.slice(4)
var s3 = s.substring(4)

//9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).

var s = "Banana Mania"
var count = s.toLowerCase().split('').filter(function(char) {
  return char === 'a';
}).length;


//10. Write a function reverseString(s) without using array reverse (iterate backwards).

function reverse(s) {
  var reversed = '';
  for (var i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }
  return reversed;
}

//11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".

function func11(str) {
  return str.split(' ').map(function(word) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' '); 
}

//12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.

function func12(str){
    var s1 = str.indexOf("://")
    var s2 = str.indexof("/", s1)

    return str.slice(s1 , s2)
}

//13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).


//14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = 'hello'; if (s.toUpperCase() == 'HELLO') { console.log('match'); }


//15. Create an array of the numbers 1..5, then push 6 and unshift 0.
var a = [1,2,3,4,5]
a.push(6)
a.unshift(0)

//16. Remove the last element and store it. Remove the first element and store it.

var b = a.pop()
var c = a.shift()

//17 Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
var b = a.slice(0,3)

//18 Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
var a = [1,2,3,4,5]
a.splice(2,2,"a","b")

//19 Demonstrate the difference between slice and splice on the same starting array (show original after each).
var a = [1,2,3,4,5]
var b = a.slice(2,2)

// a = [1,2,3,4,5]

var c = a.splice(2,2)
// a = [a,2,5]

//20 Create a sparse array by assigning index 7 on a fresh [] then log length.
a = []
a[7] = "hh"  
console.log(a) //a = [empty × 7, 'hh']

//21 Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
function compact(arr){
    out = []
    for (var i = 0 ; i < arr.length ; i++ ){
        if(arr[i]){
            out.push(arr[i])
        }
    }
    return out
}

//22Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .

var a = [1,2,3,4,5]
var clone = []
for(var i = 0 ; i < a.length; i++){
    clone[i] = a[i]
}

//23 Map [1,2,3] to their squares using map.
var a = [1,2,3]
a= a.map(function(num) {
  return a * a;
});

//24 Filter [5,10,15,20] to keep values >= 12.
var a = [5,10,15,20]
a = a.filter(function func24(num) {
  return num >= 12;
})

//25 Reduce [2,4,6] to product.
var a = [2,4,6]
a = a.reduce(function func25(acc , num) {
   return acc * num 
},1)

//26 Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.

function arraySum(a) {
  return a.reduce(function(acc, cur) {
    return acc + cur;
  }, 0);
}
function arraySumLoop(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

a = [1,2,3,4,5]

//27 Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
var names = ['Ali', 'Sara', 'Kareem'];
var let1 = [];

for (var i = 0; i < names.length; i++) {
  let1.push(names[i][0]);
}

//28  Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.

function unique(a) {
  const out = [];

  for (let i = 0; i < a.length; i++) {
    var isDuplicate = false;
    

    for (let j = 0; j < out.length; j++) {
      if (a[i] === out[j]) {
        isDuplicate = true;
        break;  
      }
    }
    
    if (!isDuplicate) {
      out.push(a[i]);  
    }
  }

  return out;
}

//29 Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).

function flatten1(arr) {
  var result = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (var j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  
  return result;
}

//31 Create object person with name and age; add a new property city after creation.

var person = {
  name: 'John',
  age: 30
};

person.city = 'New York';

//32 Access a property via bracket notation with a dynamic key variable.
person['name']

//33 Write function countKeys(obj) returning number of own enumerable properties (use for-in).

function countKeys(obj) {
  var count = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

//39. List (as comments) 5 different values that coerce to false in ES5.

// fasle , 0 , null , '' , undefined

//40 safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.

function safeToBoolean(v) {
  return v === true || v === 'true' || v === 1 || v === '1';
}

//41  Create a Date for Jan 1, 2025 00:00 local.
var newdate = new Date(2025 , 0 , 1)


//42  Get the current year from new Date().
var newdate = new Date().getFullYear();

//43 Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).

function daysBetween(d1, d2) {
  d1 = new Date(d1)
  d2 = new Date(d2)
  var diffms = Math.abs(d2 - d1)
  var msInOneDay = 1000 * 60 * 60 * 24 
  var days = diffms / msInOneDay 
  return days
}

//44. Generate a random integer 1..100. 

var randomInt = parseInt(Math.random() * 100) + 1;

var number = 4.567;

var round1 = Math.round(number);  
var round2 = Math.floor(number); 
var round3 = Math.ceil(number);  

//46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
function randomIntArray(n, min, max) {
  const result = [];
  
  for (var i = 0; i < n; i++) {
    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(randomInt);
  }
  
  return result;
}


//56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
function parsePriceList(str) {
  var result = {};
  var items = str.split(';');
  items.forEach(function(item) {
    var parts = item.split(':');
    result[parts[0]] = parseFloat(parts[1]);
  });
  return result;
}

//57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
function filterAndSortNumbers(mixedArray) {
  var filteredArray = mixedArray.filter(function(item) {
    return typeof item === 'number' && isFinite(item);
  });

  filteredArray.sort(function(a, b) {
    return a - b;
  });

  return filteredArray;
}
