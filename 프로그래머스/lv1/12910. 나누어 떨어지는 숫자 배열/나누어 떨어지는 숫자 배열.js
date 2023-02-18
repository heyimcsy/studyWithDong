function solution(arr, divisor) {
    var num = [];
    for(let i = 0;i < arr.length; i++){
        if (arr[i] % divisor == 0) {
            num.push(arr[i]);
            console.log(num)
       }
    } 
    
    if(num.length == 0) {
          return [-1];
        }
    num.sort(function(a, b) {
       return a - b;
             });
    return num;
}
// 3,10,2,6