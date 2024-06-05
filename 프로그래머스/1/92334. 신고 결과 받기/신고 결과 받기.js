/*
이용자의 ID가 담긴 문자열 배열 id_list
각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report
정지 기준이 되는 신고 횟수 k

 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return
*/

function solution(id_list, report, k) {
    const obj = {};
    const reportObj = {};
    const answer = Array(id_list.length).fill(0);
    
    id_list.forEach(id=>obj[id] = []);
    id_list.forEach(id=>reportObj[id] = 0);
    
    report.forEach(re =>{
        const value = re.split(" ");
        if(!obj[value[0]].includes(value[1])) {
            obj[value[0]].push(value[1]);
            reportObj[value[1]]++;
        }
    })
    
    const reportArr = Object.keys(reportObj).filter(f => reportObj[f] >= k);
    
    
    id_list.forEach((id, k)=>{
        answer[k] += (obj[id].filter(f => reportArr.includes(f)).length);
    })
    
    
    
    return answer;
}