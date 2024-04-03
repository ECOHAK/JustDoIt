function solution(a) {
    //최소값, 최대값 초기화 
    let min_value = Infinity, max_value = -Infinity 
        //문자열 숫자로 변경
        a.split(' ').map(sting_num=>{
            const num = Number(sting_num)
            //최소값, 최대값 산출
            min_value = Math.min(min_value, num)
            max_value = Math.max(max_value, num)
        })
    
    let answer = String(min_value) + ' ' + String(max_value)
    return answer
}
