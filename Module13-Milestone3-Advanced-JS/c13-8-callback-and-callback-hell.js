/* 

✅✅✅Callback and Callback Hell

✅✅1. What is a Callback?
A callback is a function that is passed as an argument to another function and is called later.

In simple words:
Callback = a function that you give to another function to execute later.


➡️Simple example
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}
greet("Raju", sayBye);

Output:
Hello Raju
Goodbye!

Here:
greet("Raju", sayBye);
sayBye is passed into greet().

Inside greet():
callback();
actually calls:
sayBye();



✅✅2. Why is it called a Callback?
Look at this:

function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

➡️We are basically saying:
"I don't know what you want me to do next. Give me a function, and I'll call it when I'm ready."

So:

           greet()
              │
       ┌──────┴──────┐
       │             │
     name          callback
       │             │
     "Raju"        sayBye
                     │
                     ▼
                   execute


✅✅3. Callback with setTimeout()
Callbacks become more useful with asynchronous operations.

    setTimeout(() => {
        console.log("Hello after 2 seconds");
    }, 2000);

Here:
() => {
    console.log("Hello after 2 seconds");
}
is a callback function.


setTimeout() receives that function and executes it after 2 seconds.
setTimeout()
     │
     ├── callback function
     │
     └── 2000ms
             ↓
          wait
             ↓
        callback()
             ↓
     "Hello after 2 seconds"




✅✅4. What is Callback Hell?
Callback Hell happens when many callbacks are nested inside one another, 
especially for dependent asynchronous operations.

Example:
Imagine we need to do three things:
1. Get user
2. Get user's orders
3. Get order details
And each operation depends on the previous one.


➡️With callbacks:
getUser(function(user) {
    getOrders(user.id, function(orders) {
        getOrderDetails(orders[0].id, function(details) {
            console.log(details);
        });
    });
});


Notice the shape:
getUser()
   │
   └── getOrders()
          │
          └── getOrderDetails()


This starts becoming difficult to read.
And this is called:😵 Callback Hell




➡️It can look like a pyramid:
doSomething(
    doSomethingElse(
        doAnotherThing(
            doAnotherThingAgain(
                ...
            )
        )
    )
)

This is sometimes called the Pyramid of Doom.


✅✅5. Why is Callback Hell a problem?

① Difficult to read
Deep nesting makes the code harder to understand.

② Difficult to maintain
If you need to modify one step, you may have to navigate through many nested functions.

③ Error handling becomes messy
You may end up with many error callbacks:

④ Difficult to debug
Finding where something went wrong becomes harder.




✅✅6. How Promise helps

➡️Callback version
getUser(function(user) {

    getOrders(user.id, function(orders) {

        getDetails(orders[0].id, function(details) {

            console.log(details);

        });

    });

});

➡️Promise version
getUser()
    .then(user => getOrders(user.id))
    .then(orders => getDetails(orders[0].id))
    .then(details => {
        console.log(details);
    })
    .catch(error => {
        console.log(error);
    });


➡️➡️Much easier to follow:

getUser()
   ↓
getOrders()
   ↓
getDetails()
   ↓
result
   ↓
.catch(error)



✅✅7. async/await makes it even cleaner
The same idea can be written:

async function getData() {
    try {
        const user = await getUser();
        const orders = await getOrders(user.id);
        const details = await getDetails(orders[0].id);
        console.log(details);
    } catch (error) {
        console.log(error);
    }
}






*/