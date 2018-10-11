function moveDisk(form,to){
	console.log(`${from}->$[to}`)
}
function solve_hanoi_tower(ary,from,to,use ){
//	let A=ary,B=[],c=[];
	if(ary.length==1){
		console.log(`${ary[0]}:${from}->${to}`)
		return;
	}
	solve_hanoi_tower(ary.slice(-1*(ary.length-1)),from,use,to)
	console.log(`${ary[0]}:${from}->${to}`)
	solve_hanoi_tower(ary.slice(-1*(ary.length-1)),use,to,from)
}

solve_hanoi_tower(['i', 'j', 'k'],'A', 'B', 'C');

	
