let promise1 = new Promise((resolve, reject) => {
    console.log("promise pending");
    setTimeout(() => {
        let data = Math.random() > 0.5;
        if (data) {
            console.log("Promise solve");
            return resolve("Sucess");
        }
        else {
            console.log("Promise Rejected");
            return reject(new Error("Not yet Sorry"));
        }
    }, 1000);
});
promise1.then((res) => (console.log(res))).catch((err) => console.log("sorry you are failed"));
export {};
// const conditionalPromise = new Promise<string>((resolve, reject) => {
//     const success = Math.random() > 0.5; // Randomly choose success or failure
//     if (success) {
//       resolve("Success!");
//     } else {
//       reject(new Error("Failure"));
//     }
//   });
//   conditionalPromise
//     .then((result) => console.log(result)) // Handles a successful resolution
//     .catch((error) => console.log(error.message)); // Handles a rejection
//   // This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
