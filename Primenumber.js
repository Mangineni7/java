function Primenumbers(num){
    let n=num
    let count=0;
    for(let i=2;i<n;i++)
    {
        if(n%i==0){
            count++
        }
    }
    if(count==0)
    {
           console.log(n+" is prime number ");
    }
    else{
        console.log(n+" is not a prime ");
    }
}
Primenumbers(5)