function findLongest(array){
  let num0 = 0
  let max = array.map(function(num1) {
    let a = num0 + ""
    let b = num1 + ""
    a.length < b.length ? num0 = num1 : 0
    });
  return num0
}
