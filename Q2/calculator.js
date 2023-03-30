function calculator(n1, n2, op) {
 let result;

 switch(op){
    case '+': 
    result = n1 + n2 ;
    break;

    case '-' : 
    result = n1 - n2;
    break;

    case '*' : 
    result = n1 * n2;
    break;

    case '/' :
    result = n1 < n2 ? n1/n2 : n2/n1;
    break;

    default :
    console.log('Not a valid operator');
    return;
 }

 return console.log(`${n1} ${op} ${n2} = ${result}`);
}

calculator(8,7,'(');
