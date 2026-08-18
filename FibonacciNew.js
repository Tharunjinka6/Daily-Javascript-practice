//my fibonacci series practice
let num=5;
let a=0
let b=1
for(let ai=1 ; i<=num; i++){
    console.log(a)
    let f=a+b;
    a=b;
    b=f;
}
//geeks for geeks
class Solution {
    nthFibonacci(n) {
        // your code here
        if (n==0){
            return 0
        }
        if (n==1){
            return 1
        }
        let a=0
        let b=1
        for(let i=2; i<=n; i++){
            let f=a+b
            a=b
            b=f
        }
        return b
    }
}