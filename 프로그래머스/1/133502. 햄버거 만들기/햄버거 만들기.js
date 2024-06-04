/*
재료의 정보를 나타내는 정수 배열 ingredient
ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기
 빵 – 야채 – 고기 - 빵 : 1 - 2 - 3 - 1
상수가 포장하는 햄버거의 개수를 return
*/

function solution(ingredient) {
    
   const target = [1, 2, 3, 1];
    const stack = [];
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (stack.length >= 4) {
            const lastFour = stack.slice(-4).join("");
            if (lastFour === "1231") {
                stack.splice(-4, 4);
                count++;
            }
        }
    }

    return count;
    
    
//     let str = ingredient.join("");
//     const target = "1231";
    
//     let count = 0;

//     while(str.indexOf(target) >= 0){
//         str = str.replace(target, "");
//         count++;
//     }
    
//     return count;
    // -> 시간초과 5문제
}

