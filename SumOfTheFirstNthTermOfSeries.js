function SeriesSum(n) {
  let result = 0;
  let a = 1;
  for (var j = 0; j < n; j++) {
    result = result +  1 / a;
    a = a + 3;
  }
  return result.toFixed(2) 
}
