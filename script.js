let result = document.getElementById('number').innerHTML;
const array_length = 10;
let arr = [];
for(let i = 0; i < array_length; i++) {
    arr.push(Math.floor(Math.random() * 10));
}
for(let j = 0; j < arr.length; j++) {
    if(arr[j] % 2 == 0) {
    result = `${arr[j]} is even.`;
    }
    else {
    result = `${arr[j]} is odd.`;
    }
}