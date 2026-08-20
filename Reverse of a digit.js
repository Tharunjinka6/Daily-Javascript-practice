#my practice
let n=122;
let str_n=String(n);
let n_str="";
for(let i=str_n.length-1;i>=0;i--){
    n_str=n_str+str_n[i];
}
console.log(n_str)
#geeks for Geeks
class Solution {
    reverseDigits(n) {
        // code here
    let str_n=String(n);
    let n_str=" ";
    for(let i=str_n.length-1;i>=0;i--){
        n_str=n_str+str_n[i]
    }
    return Number(n_str)
    }
}
