function solution(arr) {
    var answer = [];
    let a = Math.min(...arr)
    for(let i = 0; i <= arr.length; i++){
        if( arr[i] == a ){
         arr.splice(i,1)
            if(arr.length >= 1){
                return arr
            } else {
                return [-1]
            }
        
        }
    }
    
    
    // arr.sort().shift(); 
    // if ( arr == 0 ){
    //     return [-1]
    // } else {
    //     return arr.reverse()
    // }
}