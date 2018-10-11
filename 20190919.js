function is_combination(s, p1, p2) {
        if (s.length == p1.length + p2.length) {
                let a = p1.length > p2.length ? p2 : p1;
                let c = [];
                [...a].forEach(x => c[s.indexOf(x, c.length)] = 1);
                s = [...s].map((x, i) => c[i] ? '' : x).join('');
                return s == p2 || s == p1 ? true : false;
        }
}

//例如
//s : googlechrome
//p1: g  g    rome
//p2:  oo lech

console.log(is_combination('googlechrome', 'ggrome', 'oolech')) // true