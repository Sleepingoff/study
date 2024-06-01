/**
두 문자열 s와 skip, 그리고 자연수 index

문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
skip에 있는 알파벳은 제외하고 건너뜁니다.

규칙대로 s를 변환한 결과를 return
*/
function solution(s, skip, index) {
    skip = skip.split("").map(k => k.charCodeAt(0));
    s = s.split("").map(i => i.charCodeAt(0));
    
    const arr = Array(122 - 97 + 1).fill(0).map((a,i)=> a += 97 + i).filter(f => !skip.includes(f));
    index = index > arr.length ? index - arr.length : index;
    const value = s.map((t, i)=>{
        const idx = arr.indexOf(t);
        const start = idx + 1;
        const end = start + index; 
        const target = arr.slice(start, end);
        if(target.length < index){
            const rest = arr.slice(0, index - target.length);
            target.push(...rest);
        }
        return target[index - 1];
    })
    
    return String.fromCharCode(...value);
}