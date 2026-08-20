class Solution {
    isPalindrome(s) {
        // code here
        let reversed_str="";
        for(let i=s.length-1; i>=0; i--){
            reversed_str=reversed_str+s[i];
        }
        if(s==reversed_str){
            return true
        } else{
            return false
        }
    }
}
