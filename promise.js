// const func1 = () => {
//     console.log("Hey I am one");
// }

// const func2 = () => {
//     console.log("Hey I am two");
// }

// const func3 = () => {
//     console.log("Hey I am three");
// }

// func1();
// func2();
// func3();




// const func1 = () => {
//     console.log("Hey I am one");
// }

// const func2 = () => {

//     setTimeout(() => {
//       console.log("Hey I am two");
//     }, 3000);

// }

// const func3 = () => {
//     console.log("Hey I am three");
// }

// func1();
// func2();
// func3();





// const func1 = () => {
//     return `Hey I am one`;
// }

// const func2 = () => {

//     setTimeout(() => {
//         return `Hey I am two`;
//     }, 3000);

// }

// const func3 = () => {
//     return `Hey I am three`;
// }


// const callAllfunc = () => {

//     const callfunc1 = func1()
//     console.log(callfunc1);

//     const callfunc2 = func2()
//     console.log(callfunc2);

//     const callfunc3 = func3()
//     console.log(callfunc3);

// }

// callAllfunc();






// const func1 = () => {
//     return `Hey I am one`;
// }

// const func2 = () => {

//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             resolve("Hey I am two");
//         }, 3000);
//     })

// }

// const func3 = () => {
//     return `Hey I am three`;
// }


// const callAllfunc = () => {

//     const callfunc1 = func1()
//     console.log(callfunc1);

//     const callfunc2 = func2()
//     console.log(callfunc2);

//     const callfunc3 = func3()
//     console.log(callfunc3);

// }

// callAllfunc();





const func1 = () => {
    return `Hey I am one`;
}

const func2 = async () => {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve("Hey I am two");
        }, 3000);
    })

}

const func3 = (input) => {
    return `Hey I am three, This is my input ${input}`;
}


const callAllfunc = async () => {

    const callfunc1 = func1()
    console.log(callfunc1);

    const callfunc2 = await func2()
    console.log(callfunc2);

    const callfunc3 = func3(callfunc2)
    console.log(callfunc3);

}

callAllfunc();


