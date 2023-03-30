function correctBug(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]=arr[i]*2;
    }
    console.log(arr);
}

let arr = [20,10];

correctBug(arr);