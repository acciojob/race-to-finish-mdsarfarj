window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  promises.push(new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  }));
}

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `Result: ${result}`;
  })
  .catch((error) => {
    console.error(error);
  });
