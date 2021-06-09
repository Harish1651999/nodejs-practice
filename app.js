// console.log("Hello World");

// setTimeout( () => {
//     console.log("Please enter your name");
// }, 3000);

let count = 0;
let interval = setInterval( () => {
    console.log(`Added ${count}`);
    count = count + 2;
    if(count > 6){
        clearInterval(interval);
    }
}, 1000);