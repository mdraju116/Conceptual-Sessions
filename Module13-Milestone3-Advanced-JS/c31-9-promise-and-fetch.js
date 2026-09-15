/* 
🧠The important picture of ASYNC JAVASCRIPT

              ASYNC JAVASCRIPT
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
       Promise                Fetch
          │                     │
     represents             makes HTTP
     future result           request
          │                     │
     ┌────┴────┐                ▼
     ▼         ▼             Promise
  resolve   reject              │
     │         │                ▼
   .then()  .catch()         Response
                                │
                                ▼
                         response.json()
                                │
                                ▼
                              Data



✅✅1.What is a Promise?
A Promise is an object that represents the eventual result of an asynchronous operation.

In simple words:

Promise = "I will give you the result later."

➡️For example, imagine ordering food:

 You order food
      ↓
Restaurant says:
"I promise I'll give you the food."
      ↓
       ⏳
      ↓
 ┌────┴─────┐
 ↓          ↓
Success    Failure
 ↓          ↓
Food       Problem



➡️➡️A Promise has three states:

| State       | Meaning                |
| ----------- | ---------------------- |
| `pending`   | Still waiting          |
| `fulfilled` | Successfully completed |
| `rejected`  | Failed                 |


             Promise
                │
             pending
             /     \
            /       \
           ▼         ▼
     fulfilled    rejected
      success       error



➡️➡️Creating a Promise

const promise = new Promise((resolve, reject) => {
    // asynchronous work
});


There are two important functions:
➡️resolve()
Means:The operation was successful.

➡️reject()
Means:The operation failed.


Example:
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }

});



➡️➡️Getting the Promise result

We commonly use:
        .then()
        .catch()
        .finally()
        


➡️Runs when Promise succeeds.
promise.then((result) => {
    console.log(result);
});
.catch()


➡️Runs when Promise fails.
promise.catch((error) => {
    console.log(error);
});


➡️Together:
    promise
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });


➡️A practical Promise example
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Data received!");
        }, 2000);

    });

    promise.then((data) => {
        console.log(data);
    }); 




✅✅2.What is fetch()
fetch() is used to make HTTP requests, commonly to get data from an API.

For example:
fetch("https://example.com/data");

⚠️But there is an important thing: fetch() returns a Promise.
So: const result = fetch("https://example.com/data");
console.log(result);
result is a Promise.


➡️Conceptually:
fetch()
  ↓
Promise
  ↓
wait for server
  ↓
Response



➡️➡️ Basic Fetch
Suppose an API returns JSON data.

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });


There are two .then() calls here.
Let's understand why.

➡️First .then()
.then((response) => {
    return response.json();
})

The first result is a Response object.
We need to convert the response body into JSON.
response.json()

⚠️Important: response.json() also returns a Promise.
So:
fetch()
  ↓
Promise
  ↓
response
  ↓
response.json()
  ↓
Promise
  ↓
JSON data

📌That's why we have another .then().



➡️Second .then()
.then((data) => {
    console.log(data);
})

Now we finally have the actual data.







*/