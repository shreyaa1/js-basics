// print each item of the Array in string
const arr = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
let data = '';
let reverseStr = '';
for (var i = 0; i < arr.length; i++) {
    data += `${arr[i]}, `;
}
console.log('new string is', data);

for (var i = data.length - 1; i > 0; i--) {
    reverseStr += `${data[i]}`
}
console.log('new  reverse string is', reverseStr);


// How do you reverse a given string in place?

const str = 'hello today is a beautiful day.'