function removeDuplicates(cart){
    const uniqueCasrt = [];
    for(let i=0; i<cart.length; i++){
        if(!uniqueCasrt.includes(cart[i])){
            uniqueCasrt.push(cart[i]);
        }
    } 
    return uniqueCasrt;  
}

let cart = ["bucket", "ball", "ball", "bucket"];

let uniqueCart = removeDuplicates(cart);

console.log(uniqueCart);      // output bucket and ball