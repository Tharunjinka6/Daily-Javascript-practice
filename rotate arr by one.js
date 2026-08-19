class Solution {
    rotate(arr) {
        // code here
        let k=1
        let n=arr.length
        let rotated_arr = new Array(n).fill(0)
        for(let i=0; i<n; i++){
            rotated_arr[(i+k)%n]=arr[i]
        }
        for(let i=0; i<n; i++){
            arr[i]=rotated_arr[i]
        }
    }
}