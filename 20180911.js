const sort=(str)=>{
	let A = str.split('').map(x=>x.charCodeAt());
	let B = [...Array(Math.max(...A)+1)].fill(0);
	let C = []; 
	A.forEach(x=>B[x]++);
	B.forEach((x,i)=>{
		i!=0?B[i]=x+B[i-1]:null;
	})
	A.forEach(x=>{
		C[--B[x]]=x
	})
    console.log(C);
	return String.fromCharCode(...C);
}

console.log(sort('javascript'));
