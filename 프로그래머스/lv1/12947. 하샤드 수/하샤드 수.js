function solution(x) {
    let num = 0;
    x = x.toString()
    for(let i = 0; i < x.length; i++){
        num += parseInt(x[i])
    }
    if( x % num == 0){
        return true
    } else {
        return false
    }
    
}
  // let answer = 0
  // n = n.toString()
  // for (let i = 0; i < n.length; i++){
  //   answer += parseInt(n[i])