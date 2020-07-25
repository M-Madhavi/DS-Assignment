//Need to Correct
function fibo(n)

{
    var a=0,b=1,c=a+b;

    while (c <= n) {

        a = b
        b = c
        c = a + b
    }
    return c
}
console.log(fibo(10))