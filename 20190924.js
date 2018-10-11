// function steps(n){
//     let ary = [...Array(n).keys()]
//     let num = 0;
//     function _steps(n,ary,res,num){
//         if(res.length==ary.length){
            
//         }
//     }
// }
// function steps(n) {
//     console.log('n',n)
//  if(n === 0) return 1
//  let sum = 0
//  for(let i = 0; i < n; i++){
//    sum += steps(i)
//  }
//  return sum
// }
function zuhe(ary){
  let c = [];
  for(let i = 0 ;i<4;i++){
    for(let a = i+1 ;a<4;a++){
      c.push([ary[i],ary[a]])
    }
  }
  return c ;
}
console.log(zuhe([1,2,3,4]))
// console.log(steps(2));
// console.log(steps(3));//3 12 21  111
// console.log(steps(4));//4 22 13 31 1111 121 112 211
