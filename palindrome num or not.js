class Solution {
    isPalindrome(n) {
        // code here
        let str_n=String(n);
        if(n<0){
            str_n=str_n.slice(1)
        }
        let n_str="";
        for(let i=str_n.length-1; i>=0; i--){
            n_str=n_str+str_n[i];
        }
        if(str_n==n_str){
            return true
        } else{
            return false
        }
    }
}
