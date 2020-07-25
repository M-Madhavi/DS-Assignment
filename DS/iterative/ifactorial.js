function factorial(n)
{
    let fact = 1;
    if (n == 0 || n == 1){
        return fact;
    }else{
        for(var i = n; i >= 1; i--){
            fact = fact * i;
        }
        return fact;
    }
}

console.log(factorial(6));