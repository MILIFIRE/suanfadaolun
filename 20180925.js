function is_additive(s){
    let a=0,b=1,c=2;
    let flag = false;
    while(c!=s.length){
        let sum = String(parseInt(s.slice(a,b))+parseInt(s.slice(b,c)));
        if(s.slice(c).startsWith(sum)){
            a=b;
            b=c;
            c+=sum.length
            flag = true;
        }else{
            c++;
            if(flag==true){
                flag=false;
                break;
            }
        }
    }
    return flag;
}
console.log(is_additive('235813'));//true
console.log(is_additive('199100199'));//true
console.log(is_additive('12345678'));//false
console.log(is_additive('100110112'));//false