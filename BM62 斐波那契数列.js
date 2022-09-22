function Fibonacci(n)
{
    // write code here
    const fi = new Array(n).fill(0);
    fi[1] = 1
    fi[2] = 1;
    for(let i = 3; i<=n;i++){
        fi[i] = fi[i-1] + fi[i-2];
    }
    return fi[n];
}
module.exports = {
    Fibonacci : Fibonacci
};