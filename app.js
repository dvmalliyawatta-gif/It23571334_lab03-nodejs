console.log("NodeJS project setup completed!");

const fs = require('fs');

fs.writeFile('file.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});

/*const myPromise = new Promise((resolve, reject) => {
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

myFunction();*/