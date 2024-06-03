/*
문자열 s
해한 문자열의 개수를 return 
*/
function solution(s) {
    const str = s.split("");
    
    const stack = [];

    let count = 0;
    let index = 1;
    while(index <= str.length){
        if(count === -1){
            stack.push(str.splice(0,  index).join(""));
            count = 0;
            index = 1;
        }
        if(str[0] === str[index]) count++;
        else count--;
        
        index++;
    }

    if(stack.join("").length != s.length){
        stack.push(s.slice(stack.join("").length))
    }

    return stack.length;
}