/*
1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 keymap
입력하려는 문자열들이 담긴 문자열 배열 targets
각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return 
*/
function solution(keymap, targets) {
    //값: 자신의 index + 1
    //중복된 키가 있을 경우 값이 작은 것을 반영
    const key = {};
    keymap.forEach((k,i)=>{
        const keys = k.split("");
        keys.forEach((s,k)=>{
            const value = key[s];
            if(!value) key[s] = k+1;
            else if(value && value >= k + 1) key[s] = k+1;
        })
    })
    let count = 0;
    const value = [];
    targets.forEach((t,i)=>{
        const target = t.split("");
        
        while(target.length){
            const v = target.shift();
            if(key[v]) count += key[v];
            else{
                count = -1;
                break;
            }
        }
        value.push(count);
        count = 0;
    })
    return value;
}