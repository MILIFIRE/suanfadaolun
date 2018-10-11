function gcd(x, y, g = 1, z = 1) {
    if (z > Math.max(x, y)) return g
    if (!(x % z) && !(y % z)) g = z;
    return gcd(x, y, g, z + 1)
}

console.log(gcd(12, 8))

let a = [
    {name:'ran1',value:'./json/a1.json'},
    {name:'ran2',value:'./json/a2.json'},
    {name:'ran3',value:'./json/a3.json'},
    {name:'ran4',value:'./json/a4.json'},

]
a.forEach(x=>{
    let {name,value}= x
    new ajax( name , value )
})