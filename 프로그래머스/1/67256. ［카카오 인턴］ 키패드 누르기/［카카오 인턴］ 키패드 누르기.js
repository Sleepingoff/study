function solution(numbers, hand) {
    
    const keypad = [[1, 4, 7, 11],[2, 5, 8, 0],[3, 6, 9, 11]]
    
    let currentLeft = [0,3];
    let currentRight = [2,3];
    
    let answer = "";
    
    for(let i =0; i < numbers.length; i++){
        const currentNum = numbers[i];
        if(keypad[0].includes(currentNum)){
            answer += "L";
            const currentPosition = keypad[0].indexOf(currentNum)
            currentLeft = [0, currentPosition];
        }else if(keypad[2].includes(currentNum)){
            answer += "R";
            const currentPosition = keypad[2].indexOf(currentNum)
            currentRight = [2, currentPosition];
        }else{
            const currentKey = keypad[1].indexOf(currentNum);
            const rightLength = Math.abs(currentRight[1] - currentKey) + currentRight[0] - 1;
            const leftLength = Math.abs(currentLeft[1] - currentKey) + 1 - currentLeft[0];
            const isCloseBoth = rightLength  === leftLength;
            if(isCloseBoth){
                answer += hand === "left" ? "L" : "R";
            }else{
                answer += rightLength < leftLength ? "R" : "L"   
            }
            if(answer[answer.length-1] === "L") currentLeft = [1, currentKey]
            else currentRight = [1, currentKey]
        }
    }
    
    return answer;
}