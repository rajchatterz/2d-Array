function countElements(arr1, arr2, d) {
    let count = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      let hasDistance = true;
      for (let j = 0; j < arr2.length; j++) {
        if (Math.abs(arr1[i] - arr2[j]) <= d) {
          hasDistance = false;
          break;
        }
      }
      if (hasDistance) {
        count++;
      }
    }
  
    return count;
  }
  
  const arr1 = [4, 5, 8];
  const arr2 = [10, 9, 1, 8];
  const d = 2;
  
  const result = countElements(arr1, arr2, d);
  console.log(result);
  