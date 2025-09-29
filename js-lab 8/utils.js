//1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
export function greetUser(name){
    return `Hello, ${name}!`;

}

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
export default class DataFetcher {
    async getUser(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    }
}


