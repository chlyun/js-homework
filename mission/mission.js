// 문제1
function getValueAtObject(obj, key) {
  return obj[key] !== undefined ? obj[key] : Error("Error!");
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !

// 문제2
1;
function getNumberAtArray(arr, index) {
  if (index >= 0 && arr.length > index) {
    return arr[index];
  } else {
    return Error("Error!");
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
