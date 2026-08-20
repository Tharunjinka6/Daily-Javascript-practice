//My practice
let n = 5;
for(let i=1; i<=n; i++){
    console.log(" ".repeat(n-i)+"*".repeat(2*i-1));
}
for(let i=n-11; i>=1; i--){
    console.log(" ".repeat(n-i)+"*".repeat(2*i-1));
}
//Geeks for Geeks
const n = parseInt(require('fs').readFileSync(0, 'utf8').trim());

// code here
for(let i=1; i<=n; i++){
    console.log(" ".repeat(n-i)+"* ".repeat(i))
}
for(let i=n; i>=1; i--){
    console.log(" ".repeat(n-i)+"* ".repeat(i))
}