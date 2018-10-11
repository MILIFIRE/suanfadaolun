function _permutation(str) {
    let res = [];
    let num ;
    function permutation1(str, select = [],res,num) {
        if (select.length === str.length) {
            let left = Math.floor(select.length/2),right = Math.ceil(select.length/2);
            let a = select.slice(0,left).reduce((x,y)=>x+y)
            let b = select.slice(left).reduce((x,y)=>x+y)
            let c = select.slice(0,right).reduce((x,y)=>x+y)
            let d = select.slice(right).reduce((x,y)=>x+y)
            if(num){

            }else{
                ``
            }
        }
        for (let i = 0; i < str.length; i++) {
            if (select.indexOf(i) === -1) {
                permutation1(str, select.concat(i), res,num)
            }
        }
    }
    permutation1();
    return res;

}

console.log(_permutation())