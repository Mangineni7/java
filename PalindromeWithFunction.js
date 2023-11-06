function Palindrome(num){

    let n=num
    let dup=n
    let rev=0;
    while(n!=0)
    {
        let number=n%10
        rev=rev*10+number
        n=parseInt(n/10)
    }
    if(n=dup){
        console.log(n+" is a plaindrome");
    }
    else{
        console.log(n+" is not a plaindrome");
    }
}
Palindrome(212)