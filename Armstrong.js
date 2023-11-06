function Armstrong(num){
    let n=num
    let dup=n
    let s=n.toString()
    let nl=parseInt(s.length)
    let sum=0
    while(n!=0){
        let rem=n%10
        let pro=1
         for(let i=1;i<=nl;i++){
           pro=pro*rem
         }
         sum+=pro
         n=parseInt(n/10)
    }
    if(dup==sum){
        console.log(dup+" is a Armstrong");
    }
    else{

        console.log(dup+" is not armstrong");
    }

}
Armstrong(153)
