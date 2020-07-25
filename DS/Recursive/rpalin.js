function isPalindrome(str){
    if (str[0] === str[str.length - 1] && str.length > 1)
    {
       isPalindrome(str.substring(1, str.length -1))
        return true
    }else{
        return false
    }
}
console.log(isPalindrome('madam'))

