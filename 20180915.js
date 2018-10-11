// function permutation(string,num){
//     if(num.length==string.length){
//         return [];
//     }
//     return [...string].map((x,i)=>{
//         // console.log(num);
//          if(!num.includes(x)){
//             let ary=num.slice();
//             ary.push(x);
//             return [x].concat(permutation(string,ary)).join('');
//             ;
//          }
//     })
// }
// function permutation(string){
//     if(string.length==0)return '';
//     return [...string].map(x=>{
//         if(string.includes(x)){
//             return x+permutation(string.replace(x,''));

//         }
//     })

// }
// console.log(permutation('abc',[]));
function permutation(string,ary=[]){
    if(ary.length==string.length)return ary.join('');
    return [...string].map((x,i)=>{
        return !ary.includes(x)?permutation(string,ary.concat(x)):''}).filter(x=>x!='')
}
console.log(permutation('abc').toString().split(','));
// function permutation(string, num = []) {
//     let ary2 = [];
//     if (num.length == string.length) {
//         return num.join('');
//     }
//     for (let a = 0; a < string.length; a++) {
//         if (!num.includes(string[a])) {
//             let ary = num.slice();
//             ary.push(string[a]);
//             ary2.push(permutation(string, ary));
//         }
//     }
//     return ary2
// }

// console.log(permutation('abc'));