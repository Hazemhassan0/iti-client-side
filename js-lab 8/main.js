import DataFetcher , { greetUser } from "./utils.js";

const greeting = greetUser('Hazem');
console.log(greeting);

//2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
const taskPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task completed!");
    }, 2000);
});

taskPromise.then((message) => {
    console.log(message);
});


//3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
async function waitAndGreet() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome!");
        }, 1000);
    });
}


//4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(`Name: ${data.name}`);
        console.log(`Email: ${data.email}`);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

console.log(fetchUserData())

//5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
async function fetchPostTitles() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data.slice(0, 3).map(post => post.title);
    } catch (error) {
        console.error('Error fetching post titles:', error);
    }
}
console.log(fetchPostTitles());


// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
function simpleTimer() {
    return new Promise((resolve) => {
        let count = 1;
        const interval = setInterval(() => {
            console.log(count);
            count++;
            if (count > 3) {
                clearInterval(interval);
                resolve();
            }
        }, 1000);
    });
}
console.log(simpleTimer());


// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
function safeJsonParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}

console.log(safeJsonParse('{"name": "Hazem"}'));
    

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
async function fetchCompletedTodosCount() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
        const data = await response.json();
        return data.filter(todo => todo.completed).length;
    } catch (error) {
        console.error('Error fetching completed todos count:', error);
        return 0;
    }
}


//9
const userData = new DataFetcher();
console.log(userData.getUser(1));