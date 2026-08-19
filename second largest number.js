//My practice
let arr = [2, 3, 5, 7, 8];
let largest = -Infinity;
let second_largest = -Infinity;
for (let element of arr) {
    if (element > largest) {
        second_largest = largest;
        largest = element;
    } else if (element > second_largest && element != largest) {
        second_largest = element;
    }
}
if (second_largest === -Infinity) {
    console.log(-1);
} else {
    console.log(second_largest);
}
//Geeks for Geeks
class Solution {
    getSecondLargest(arr) {
        // code here
        let largest=-Infinity;
        let second_largest=-Infinity;
        for(let element of arr){
            if(element>largest){
                second_largest=largest;
                largest=element;
            } else  if(element>second_largest && element!=largest){
                second_largest=element
            }
            
        }
        if(second_largest===-Infinity){
            return -1
        } else{
            return second_largest
        }
    }
}