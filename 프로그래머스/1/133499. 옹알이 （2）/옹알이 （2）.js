function solution(babbling) {
    const regExp = /^(aya|ye|woo|ma)+$/; 
    return babbling.filter(word => {
        if (!regExp.test(word)) return false;
        for (let pattern of ["ayaaya", "yeye", "woowoo", "mama"]) {
            if (word.includes(pattern)) return false;
        }
        return true; 
    }).length; 
}