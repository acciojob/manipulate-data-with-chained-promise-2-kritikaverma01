//your JS code here. If required.
const output = document.getElementById("output");

const numbers = [1, 2, 3, 4];

// Initial Promise - resolves after 3 seconds
new Promise((resolve) => {
setTimeout(() => {
resolve(numbers);
}, 3000);
})
.then((arr) => {
// Filter out odd numbers
const evenNumbers = arr.filter((num) => num % 2 === 0);

```
// Wait 1 second and display [2, 4]
return new Promise((resolve) => {
  setTimeout(() => {
    output.innerText = evenNumbers;
    resolve(evenNumbers);
  }, 1000);
});
```

})
.then((evenNumbers) => {
// Multiply even numbers by 2
const result = evenNumbers.map((num) => num * 2);

```
// Wait another 2 seconds and display [4, 8]
return new Promise((resolve) => {
  setTimeout(() => {
    output.innerText = result;
    resolve(result);
  }, 2000);
});
```

});
