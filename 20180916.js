function sum_of_zero(s,des=[]){
    if(s.length==des.length){
        if (des.every(x=>x==0))return 0;
        return des.map((x,i)=>x==1?s[i]:0).reduce((x,y)=>x+y)==0?1:0;
    }
    return sum_of_zero(s,des.concat(1))+sum_of_zero(s,des.concat(0));
}
console.log(sum_of_zero([1, -1, 3, -2, 2])) // 4


function sum_of_zero1(s,des=[]){
    if(s.length==des.length){
        if (des.every(x=>x==0))return 0;
        return des.map((x,i)=>x==1?s[i]:0).reduce((x,y)=>x+y)==0?1:0;
    }
    let r = [];
    r.concat(sum_of_zero1(s,des.concat('1')));
    r.concat(sum_of_zero1(s,des.concat('0')));
    console.log('r',r)
    return r 
}
console.log(
sum_of_zero1([1, -1, 3, -2, 2]) // 4
)