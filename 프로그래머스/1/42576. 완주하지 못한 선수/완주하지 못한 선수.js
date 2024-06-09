/*
마라톤에 참여한 선수들의 이름이 담긴 배열 participant
완주한 선수들의 이름이 담긴 배열 completion
 
완주하지 못한 선수의 이름을 return
*/

function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach((p, i) =>{
        map.set(p, map.get(p) ? map.get(p) + 1 : 1)
     })
    
    const cmap = new Map();
    
    completion.forEach((p, i) =>{
        cmap.set(p, cmap.get(p) ? cmap.get(p) + 1 : 1)
     })
    
    
    return participant.filter((p,i)=> map.get(p) != cmap.get(p))[0]
}