
/* 
✅✅✅JavaScript Date & Time
In JavaScript, Date is the main object used to work with dates and times.

⭐ Most Important Date Methods

| Method              | Purpose                                        | Short Example                 |
| ------------------- | ---------------------------------------------- | ----------------------------- |
| `new Date()`        | Creates a Date object with current date & time | `const now = new Date()`      |
| `getFullYear()`     | Gets the year                                  | `date.getFullYear()` → `2026` |
| `getMonth()`        | Gets the month (**0–11**)                      | `date.getMonth()`             |
| `getDate()`         | Gets day of the month (**1–31**)               | `date.getDate()`              |
| `getDay()`          | Gets day of week (**0–6**)                     | `date.getDay()`               |
| `getHours()`        | Gets hour (**0–23**)                           | `date.getHours()`             |
| `getMinutes()`      | Gets minutes (**0–59**)                        | `date.getMinutes()`           |
| `getSeconds()`      | Gets seconds (**0–59**)                        | `date.getSeconds()`           |
| `getMilliseconds()` | Gets milliseconds                              | `date.getMilliseconds()`      |
| `getTime()`         | Gets timestamp in milliseconds                 | `date.getTime()`              |


➡️Example
const date = new Date();

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());



✅✅✅Formatting Date & Time

| Method                 | Purpose                 | Example                     |
| ---------------------- | ----------------------- | --------------------------- |
| `toDateString()`       | Date in readable format | `date.toDateString()`       |
| `toTimeString()`       | Time in readable format | `date.toTimeString()`       |
| `toLocaleDateString()` | Local date format       | `date.toLocaleDateString()` |
| `toLocaleTimeString()` | Local time format       | `date.toLocaleTimeString()` |
| `toLocaleString()`     | Local date + time       | `date.toLocaleString()`     |
| `toISOString()`        | ISO date/time format    | `date.toISOString()`        |




✅✅✅JavaScript Timer methods in the BOM

| Name              | Purpose                                             | Short Example                                |
| ----------------- | --------------------------------------------------- | -------------------------------------------- |
| `setTimeout()`    | Runs a function **once after a delay**              | `setTimeout(() => console.log("Hi"), 2000)`  |
| `clearTimeout()`  | Cancels a `setTimeout()`                            | `clearTimeout(timerId)`                      |
| `setInterval()`   | Runs a function **repeatedly after every interval** | `setInterval(() => console.log("Hi"), 1000)` |
| `clearInterval()` | Stops a `setInterval()`                             | `clearInterval(intervalId)`                  |





*/