/* 
✅✅async/await
There is another, cleaner way to work with Promises.

➡️async : Marks a function as asynchronous.
    async function getData() {
        //code...
    }

➡️await
Means:Wait for this Promise to finish before continuing this function.



Instead of:
    fetch(url)
        .then(...)
        .catch(...);

we can use:
    async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }

async/await is built on top of Promises.


➡️➡️Usually we handle errors with try...catch:

async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);

    }
}








*/