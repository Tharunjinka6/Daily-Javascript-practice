//practiced code
let str_1='Geeks';
let reversed_str="";
for(let i=str_1.length-1; i>=0; i--){
    reversed_str=reversed_str+str_1[i];
}
console.log(reversed_str);
//geeks for Geeks
class Solution {
    reverseString(s) {
        // code here
        let reversed_str="";
        for(let i=s.length-1; i>=0; i--){
            reversed_str=reversed_str+s[i];
        }
        return reversed_str
    }
}