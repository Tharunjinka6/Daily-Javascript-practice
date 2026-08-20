let n="aabuu";
let count=0;
for(let element of n){
    if(element=='a' || element=='e' || element=='i' || element=='o' || element=='u' ){
        count=count+1;
    }
}
console.log(count)