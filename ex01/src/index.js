let myArr = [];
// Only change code below this line
function* multiplication(x) {
  for(let i = 0; i < x; i++) {
    x *= x;
    yield x;
    myArr.push(x);
  }
}

let num = multiplication(3);

for (let i = 0; i < 3; i++){
  console.log(num.next());
}

// Only change code above this line
module.exports = multiplication;
