// Задание 1

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  const inputString = "Hello, JS!";
  const reversed = reverseString(inputString);
  console.log(reversed);