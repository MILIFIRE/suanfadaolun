function sum_subset(S, N, ary = []) {
    let res = [];
    function _sum_subset(S, N, ary, res) {
        if (S.length == ary.length) {
            let A = S.filter((x, i) => ary[i]);
            A.length != 0 ? A.reduce((x, y) => x + y) == N ? res.push(A) : null : null;
            return;
        }
        _sum_subset(S, N, ary.concat(true), res);
        _sum_subset(S, N, ary.concat(false), res);
    }
    _sum_subset(S, N, ary, res)
    return res;
}
console.log(sum_subset([1, 3, 8, 5, 2], 10));