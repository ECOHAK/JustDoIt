function solution(a) {
    let min_value = Infinity, max_value = -Infinity 
        a.split(' ').map(sting_num=>{
            const num = Number(sting_num)
            min_value = Math.min(min_value, num)
            max_value = Math.max(max_value, num)
        })
    
    let answer = String(min_value) + ' ' + String(max_value)
    return answer
}
