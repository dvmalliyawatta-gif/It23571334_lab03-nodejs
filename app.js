console.log("NodeJS project setup completed!");

const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
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