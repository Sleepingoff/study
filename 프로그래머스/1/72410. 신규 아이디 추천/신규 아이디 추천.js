function solution(new_id) {
    
    const length = new_id.length;
    new_id = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, '').replace(/\.{2,}/g, '.').replace(/^\.|\.$/g, '');
    new_id = new_id.slice(0, 15)
    
    while(new_id[new_id.length-1] === "."){
        new_id = new_id.replace(/^\.|\.$/g, '')
    }
    
    if(new_id === "") new_id = "a";
    if(new_id.length <= 2) new_id += new_id[new_id.length-1].repeat(3 - new_id.length)
    
    return new_id;
}