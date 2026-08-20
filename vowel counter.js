let n="aabuu";
let result = [...new Set(n)].join("");
let count=0;
for(let element of result){
    if(element=='a' || element=='e' || element=='i' || element=='o' || element=='u' ){
        count=count+1;
    }
}
console.log(count)