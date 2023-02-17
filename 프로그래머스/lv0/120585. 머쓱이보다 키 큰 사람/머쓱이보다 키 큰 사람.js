function solution(array, height) {
    array.push(height);
    array.sort(function(a,b) {
        return b - a;
    });
    let h = array.findIndex(e => e == height)
    return answer = h
    }
// 괄호,오타,오류가 난 부분 