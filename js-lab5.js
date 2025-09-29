
//--------------------------------------------------------
// 1. Predict (in comments) the output order of this code, then run to verify.
   console.log(a()); // "A"
   var b = function(){ return 'B'; };
   function a(){ return 'A'; }
   console.log(b()); // "B"
//    After verifying, explain (one short line) why a works before definition and b does not.
// cant hoist function expressions , declaration can be hoisted

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).

function sum(a,b){
    return a + b;
}

let add = function(a,b){
    return a + b
}
console.log(add(1,2) === sum(1,2))

//3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
let factorial = function fact(n){
    if(n <=1 ){
        return 1;
    }
    return n * fact(n-1)
}
console.log(factorial(5))
//console.log(fact(5)) // error not defined

//4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
function showInfo(){
    console.log(arguments.length)
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}
showInfo()
showInfo(1,2)
showInfo(1,2,3,4,5)

//5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
function mutate(x,y){
    console.log("before: " + arguments[0] + " " + arguments[1])
    console.log("x: " + x + " y: " + y)
    x = x+3;
    y = y+4;
    console.log("after: " + arguments[0] + " " + arguments[1]);
    console.log("x: " + x + " y: " + y)
}
let x = 1;
let y = 2;
mutate(1,2);

//6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
function sumAll(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}
console.log(sumAll(2,5,3));
console.log(sumAll());

//7.  Implement sumAll() using only the arguments object but with the Array method reduce.
function sumAll(...args) {
  return args.reduce((a, b) => a + b, 0);
}

//8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
function describeValue(){
    switch(arguments.length){
        case 0: return 'none';
        case 1: return 'one:' + arguments[0];
        case 2: return 'two:' + arguments[0] + ',' + arguments[1];
        default: return 'too many';
    }
}
console.log(describeValue())
console.log(describeValue(5))
console.log(describeValue(5,6))
console.log(describeValue(5,6,7))

//9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
let funcs = [
    function(x){ return x + 2 },
    function(x){ return x * 2 },
    function(x){ return x - 2 }
];
let start = 10;
for(let i = 0; i < funcs.length; i++){
    start = funcs[i](start)
}
console.log(start)

//10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
function makeMultiplier(factor){
    return function(n){
        return n * factor;
    }
}
let double = makeMultiplier(2);
let triple = makeMultiplier(3);
console.log(double(7));
console.log(triple(7));

//11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
function once(fn){
    let done = false;
    return function(uName){
        if(!done){
            done = true;
            return fn(uName);
        }
    }
}
let greetOnce = once(function(uName){
    console.log("Hello only one " + uName)
});
greetOnce("Hazem") // Hello only one Hazem
greetOnce("Hazem") // nothing

//12
//13

//14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
function makeAdder(start){
    let total = start;
    return function(n){
        total += n;
        return total;
    }
}
let add1 = makeAdder(1);
let add10 = makeAdder(10);
console.log(add1(2)) // 3
console.log(add10(2)) // 12

//15. Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment).

//16

//17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
let user = {
    name: "Hazem",
    sayHi: function(){
        console.log("Hi " + this.name);
    }
}
user.sayHi();
let f = user.sayHi;
f(); // Hi undefined refers to global

//18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
f.call({ name: 'Sara' });
user.sayHi.call({ name: 'Sara' });

//19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
let greeter = {
    greet: function(greeting, sign){
        console.log(greeting + " " + this.name + " " + sign);
    }
}
greeter.greet.apply({ name: 'Ali' }, ['Hello', '!']);

//20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
let greetLara = greeter.greet.bind({ name: 'Lara' });
greetLara('Hi', '!');
greetLara('Hello', '!!');

//21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
function sayHello(obj){
  return greeter.greet.bind(obj, "Hello");
}

let helloHazem = sayHello({name:"Hazem"});
helloHazem("!");   // Hello Hazem!
helloHazem("!!");  // Hello Hazem!!

//22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
function showReverse(){
  let arr = [].slice.call(arguments);
  console.log(arr.slice().reverse()); 
}
showReverse(1,2,3);

//23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
let arr = [5,2,11,7];
console.log(Math.max(null,arr)); // 11

// Loop version
let max = arr[0];
for(let i=1;i<arr.length;i++){
  if(arr[i]>max) max=arr[i];
}
console.log(max); // 11

//24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.

//console.log(Math.max.call(null, arr)); // error
console.log(Math.max.call(null, 5, 2, 11, 7)); // 11
// Using apply is better for arrays of unknown length
console.log(Math.max.apply(null, arr)); // 11

//25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
let name = "Hazem";
let age = 24;

let userInfo = `User: ${name} Age: ${age + 1}`;
console.log(userInfo);
//26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
let title = "My Title";
let body = "My Body";

let multiLine = `Title: ${title}
Body: ${body}`;
console.log(multiLine);

// Classical version
let classical = "Title: " + title + "\nBody: " + body;
console.log(classical);

//27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
if(true){
  var i = 5;
  let j = 10;
  console.log("Inside block: i=" + i + " j=" + j);
}
console.log("Outside block: i=" + i); // i leaks
// console.log("Outside block: j=" + j); j does not leak

//28. Write code that tries to log x before let x = 5;.
// console.log(x); // ReferenceError
// let x = 5;

//29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
const myArr = [1,2,3];
myArr.push(4);
console.log(myArr); // [1,2,3,4]
// myArr = [5,6,7]; error

//30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].
function square(n){
  return n*n;
}
let squareFull = (n) => { return n*n; }
let squareConcise = n => n*n
let squareInline = [1,2,3].map(n => n*n)
console.log(square(5), squareFull(5), squareConcise(5), squareInline); 

//31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).

//32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
let returnObj = () => ({v:10});
console.log(returnObj());

//33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
let obj = {
  value: 42,
  getValue: function() {
    return this.value;
  },
  getValue2: () => {
    return this.value;
  }
};
console.log(obj.getValue()); // 42
console.log(obj.getValue2()); // undefined

//34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
const greet = (name) => `Hi ${name}!`;

//35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
const add2 = n => n + 2;
const times3 = n => n * 3;
const minus1 = n => n - 1;

const runPipeline = (n, fnsArray) => {
  return fnsArray.reduce((acc, fn) => fn(acc), n);
};

console.log(runPipeline(5, [add2, times3, minus1])); // 20

//36. (write answers BEFORE running):
    var obj1 = { n: 1, inc: function(){ this.n++; return this.n; } };
    var inc = obj1.inc;
    console.log(obj1.inc()); //works 2
    console.log(inc()); //doesn't work 


//37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
let counters = [];
for(let i = 0; i < 1000; i++){
  counters.push((function(){
    let count = 0;
    return function(){
      count++;
      return count;
    }
  })());
}

//38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
function safeFirst(){
  return arguments.length === 0 ? undefined : [...arguments];
}
console.log(safeFirst()); // undefined
console.log(safeFirst(9,10)); // [9, 10]

//39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();
function factory(namesArray){
  let obj = {};
  namesArray.forEach(name => {
    let count = 0;
    obj[name] = function(){
      count++;
      return count;
    }
  });
  return obj;
}

let counters2 = factory(['a','b']);
console.log(counters2.a()); // 1
console.log(counters2.a()); // 2
console.log(counters2.b()); // 1
console.log(counters2.b()); // 2

//40. Write 2 things that were new or tricky today (comment).
// arrow func with this
// bind
// <<<< JS IN GENERAL >>>>