console.log("NodeJS project setup completed!");

const myPromise = new Promise((resolve, reject) => {
  resolve('Async/Await Success!');
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();