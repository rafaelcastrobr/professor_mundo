let arr = [1,2,3,4,5]
let arr2 = []

function interArray(arr) {
  if(arr.length == 0) {
    throw new Error("O array precisa ter pelo menos um elemento");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }
}


interArray(arr);
interArray(arr2);