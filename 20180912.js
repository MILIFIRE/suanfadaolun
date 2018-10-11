const max=(A,num)=>{
	let ary = A.slice(0,num);
	A.forEach(x=>
		ary.forEach((z,i)=>{
				x>z&&!ary.includes(x)?ary[i]=x:null;
		})
	)
	return ary;

}


console.log(max([3,5,8,2,1,6],2));
