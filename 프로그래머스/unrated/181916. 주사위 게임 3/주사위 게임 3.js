function solution(a, b, c, d) {
    const answer = [a, b, c, d];
    const set = new Set(answer);
    const setArray = [...set];
    switch(set.size){
        case 1:
            return 1111*a;
        case 2:
            if(isArrayHasMore(answer) != 0){
                return ( setArray[0] + setArray[1])* Math.abs( setArray[0] - setArray[1]);
            }
            if(answer.filter(e => e === setArray[0]).length === 3){
                return (10 * setArray[0] + setArray[1])**2;
            }
            return (10 * setArray[1] + setArray[0])**2;
        case 3:
            set.delete(isArrayHasMore(answer));
            const sortedSet = [...set].sort((x, y) => x-y);
            return  sortedSet[0] * sortedSet[1];
        default:
            return answer.sort((x, y) => x-y)[0];
    }
}

function isArrayHasMore(array){
    for(let i = 0; i < array.length; i++){
        let elem = array[i];
        if(array.filter(e => e === elem).length === 2) return elem;
    }
    return 0;
}
