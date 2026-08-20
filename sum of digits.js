//my practice
let num_1=123;
let str_num=String(num_1);
let sum_num=0;
for(let i=0; i<=str_num.length-1; i++){
    sum_num=sum_num+Number(str_num[i]);
}
console.log(sum_num);
//geeks for geeks
class Solution {
    sumOfDigits(n) {
        // code here
        let str_num=String(n);
        let sum_num=0;
        for(let i=0; i<=str_num.length-1; i++){
            sum_num=sum_num+Number(str_num[i]);
        }
        return sum_num
    }
}