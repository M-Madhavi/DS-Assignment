function fibo(n=1) {
    if (n <3)
        return 1;
    else

        return (fibo(n-1)+fibo(n-2));

}
console.log(fibo(8))