let nums = [1,2,3,4,5];
let nums2 = [1,2,3];

function verifica(arr) {
  if(arr.length >= 5) {
    console.log('Muitos');
  }else {
    console.log('Menos');
  }
}

verifica(nums);
verifica(nums2);