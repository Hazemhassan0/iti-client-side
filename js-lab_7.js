    //1- Write a function that greets a user, using a default parameter for the name.
    function greet(name = "User") {
        console.log("greeting " + name)
    }

    //2- Write a function that calculates the total price with a default tax rate parameter.
    function calculateTotalPrice(price, taxRate = 0.1) {
        totalprice = price * taxRate
        console.log(totalprice)
    }
    
    //3- Write a function that creates a user object, using a default role parameter.
    function createUserObj(name, age, role = "User") {
        return {name , age , role}
    }

    //4- Write a function that multiplies any number of arguments using the rest operator.
    function multiplyAll(...args) {
        return args.reduce((acc, curr) => acc * curr);
    }
        
    
    
    //5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
    function multiply(...args){
        total = args.reduce((acc, curr)=>{return acc +curr })
        return args[0] * total
    }


    //6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
    function arrStrings(...args) {
        return args
    }

    //7- Create a new array by combining two arrays using the spread operator.
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let totalarr = [...arr1, ...arr2];


    // 8- Copy an array using the spread operator.
    let Arr = [10, 20, 30];
    let copiedArr = [...Arr];


    // 9- Merge two objects into one using the spread operator.
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 3, d: 4 };
    let mergedObj = { ...obj1, ...obj2 };


    // 10- Update a property in an object using the spread operator to create a new object.
    let user = { name: "Hazem", age: 24 };
    let updatedUser = { ...user, age: 25 };


    // 11- Destructure an array to get the first and second elements into variables.
    let nums = [100, 200, 300];
    let [first, second] = nums;


    // 12- Destructure an array to get the first element and the rest into another array.
    const [first12, ...rest] = numbers;


    // 13- Destructure an object to extract two properties into variables.
    const person = { fname: "Hazem", lname: "Hassan", age: 24 };
    const { fname, lname } = person;

    // 14- Destructure an object and rename the extracted properties.
    const { fname: Hassan, lname: Hazem } = person;

    // 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
    function printUser({ fname, age }) {
        console.log(`Name: ${fname}, Age: ${age}`);
    }