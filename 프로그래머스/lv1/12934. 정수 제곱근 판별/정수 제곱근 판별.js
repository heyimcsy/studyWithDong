function solution(n) {
    let a = Math.sqrt(n)
    if ( Number.isInteger(a) === true ){
    return Math.pow(a+1,2) } else {
        return -1
    }
   
}