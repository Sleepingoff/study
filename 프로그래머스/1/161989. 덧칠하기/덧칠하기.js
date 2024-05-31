function solution(n, m, section) {
    
    if(m === 1) return section.length;
    
    const total = section[section.length-1] - section[0] + 1;
    if(total <= m) return 1;
    
    let count = 0;
    
    
    while(section.length){
        const pair = section[0] + m - 1;
        section = section.filter(f => f > pair)
        count++;
    }
    
    return count;
}