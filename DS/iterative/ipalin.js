
function palin(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
if(reversed == str){
    return true}
    else{
        return false
}}
console.log(palin('madam'))