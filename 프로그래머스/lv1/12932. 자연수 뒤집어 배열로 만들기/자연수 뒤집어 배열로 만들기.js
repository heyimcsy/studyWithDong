function solution(n) {
    let answer = []
    let str = String(n).split("")
    let result = str.reverse();
    for(let i=0; i < result.length; i++){
      answer.push(Number(result[i]))
    }
     return answer
} 
// 1.숫자 문자로
// 2.쪼개 .뒤집
// 3.각각 숫자로.????
//     // let result = [];