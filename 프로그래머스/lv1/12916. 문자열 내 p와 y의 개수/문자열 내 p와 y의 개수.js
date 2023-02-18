function solution(s){    
    let o = s.includes('p') ||
            s.includes('P') ||
            s.includes('y') ||
            s.includes('Y');
    let p = s.split('p').length -1;
    let P = s.split('P').length -1;
    let y = s.split('y').length -1;
    let Y = s.split('Y').length -1;
    
    if ( o == false){
        return true
    }
    if (p + P == y + Y){
        return true
    } else {
        return false
    }
    console.log(o,p,P,y,Y)
}