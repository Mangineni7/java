var num=212
var dup=num
var rev=0
while(num!=0){

    var rem=num%10
    rev=rev*10+rem
    num=parseInt(num/10)
}
console.log(rev)
if(rev==dup){

    console.log("is a palindrome")
}
else{
    console.log("is not a palindrome")
}