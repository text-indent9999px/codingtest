function solution(n) {
    let fib = [0n, 1n];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    let result = String(fib[n] % 1234567n);
    return Number(result);
}

