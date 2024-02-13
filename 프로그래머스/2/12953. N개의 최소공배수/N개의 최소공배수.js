function solution(arr) {
    let result = arr.reduce((acc,cur)=>{
        let divider = 2;
        let number = {};
        while(cur !== 1){
            if(cur % divider === 0){
                number[divider] = 0;
                while(cur % divider === 0){
                    cur = cur / divider;
                    number[divider] ++;
                }
            }else{
                divider++;
            }
        }
        for(num in number){
            if(! acc[num]){
                acc[num] = number[num];
            }else{
                if(number[num] > acc[num]){
                    acc[num] = number[num];
                }
            }
        }
        return acc;
    },{})
    let answer = 1;
    for(res in result){
        answer *= res**result[res];        
    }
    return answer;
}