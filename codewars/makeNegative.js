
// www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {
    if (num <= 0) {
        return num;
    };
    return num * -1;
  }


  console.log(makeNegative(42), '->', -42);
  console.log(makeNegative(9), '->', -9);
  console.log(makeNegative(-5), '->', -5);
  console.log(makeNegative(3.14), '->', -3.14);
  console.log(makeNegative(0), '->', 0);