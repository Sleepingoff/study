/*
게임 화면의 격자의 상태가 담긴 2차원 배열 board
인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves
 
 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return
*/

function solution(board, moves) {
    let stack = [];
    let count = 0;
    //y loop
    for(let i = 0; i < moves.length; i++){
        const currentMove = moves[i] - 1;
        //x loop
        for(let k = 0; k < board.length; k++){
            const currentStart = board[k][currentMove];
            if(currentStart ===  0) continue;
            stack.push(currentStart);
            board[k][currentMove] = 0;
            break;
            
        }
    }
    //시간 초과로 stack에서 제거하는 것은 loop 외부에서 진행
    while(!stack.every((s,i)=> s != stack[i + 1])){
        stack = stack.filter((s,i)=>{
            if(s === stack[i + 1]) {
                count+= 2
                s = null
                stack[i+1] = null;
            }else return s != null;
        })
    }
    
    return count
}

//board의 [x][y]라고 한다면, y loop > x loop가 되어야 한다.
//y는 moves에 나와있는 숫자로 고정된다.
//x는 0부터 1씩 증가하면서 0보다 큰 숫자가 나오면
    //해당 숫자를 stack에 push
    //해당 숫자는 0으로 변경
    //만약 stack의 최상단에서부터 2개가 같은 숫자면
    //연속된 숫자 2개를 모두 버리고
    //count를 올린다.
//return count;