function solution(a, b) {
    let result = new Date('2016-'+ a +'-' + b).getDay();
    switch(result){
        case 0 : 
            result = 'SUN';
            break;
        case 1 : 
            result = 'MON';
            break;
        case 2 :
            result = 'TUE';
            break;
        case 3 :
            result = 'WED';
            break;
        case 4 :
            result = 'THU';
            break;
        case 5 :
            result = 'FRI';
            break;
        case 6 :
            result = 'SAT';
            break;
    }
    return result;
}