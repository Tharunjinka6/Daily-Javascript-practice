//My practice
let arr=[1,2,3,4]
let x=3
if (x in arr){
    console.log(arr.indexOf(x))
} else{
    console.log(-1)
}
//Geeks for Geeks
class Solution {
    search(arr, x) {
        if (arr.includes(x)){
            return arr.indexOf(x)
        } else{
            return -1
        }
    }
}
