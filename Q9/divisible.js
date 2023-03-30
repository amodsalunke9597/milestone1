function divisible(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 == 0){
        if(arr[i] % 2 == 0){
            continue;       // used continue here
        }
        console.log(arr[i]);
      }
    }
  }
  
  let arr = [1, 3, 6, 4,9];
  divisible(arr);                // output 6 and 9
  