 function solution(a, b) {
    let num = 0;
    let sum = 0;
    for(let i = 0; i < a.length; i++){
      num += a[i] * b[i]
    }
console.log(num) 
 return num
}