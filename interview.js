function gedung(noLoker){
	let baseLoker = 5;
	let lantai = 0, i=0;
	while(i<noLoker){
		i+=baseLoker
		baseLoker>6?baseLoker=5:baseLoker+=1
		lantai++;
	}
	return lantai
}
console.log(gedung(19))
console.log(gedung(1000))
