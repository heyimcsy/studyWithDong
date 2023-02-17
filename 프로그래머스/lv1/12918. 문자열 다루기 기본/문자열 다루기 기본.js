function solution(s) {   
    if(s.length === 4 || s.length === 6){
        if( isNaN(s) === true ){
            return false
        } 
        else if ( s.includes('e')){
            return false
        }
        else {
            return true
        }
    } else {
        return false
    }

} 
// if( isNaN(s) == true ){
//         return false
//     } 
//     else if ( isNaN(s) == true && s.includes('e')){
//         return true
//     }
//     else {
//         if(s.length == 4 || s.length == 6){
//             return true
//         } else {
//             return false
//         }}