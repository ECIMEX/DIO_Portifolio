
let lines = gets().split('\n');

var N = parseInt(lines.shift());
for (let i=2; i<=N; i=i+2) {
 
    if (i % 2 == 0) print(i+"^2 = "+i*i);  
}