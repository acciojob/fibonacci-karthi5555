function fibonacci(num) {
// your code here
	if(num == 1){
		return 0;
	}else if(num == 2){
		return 1;
	}
	num = num - 2;
	let a = 0, b = 1, c = 0;
	
	while(num != 0){
		c = a + b;
		a = b;
		b = c;
		num--;
	}
	return c;
	
}

module.exports = fibonacci;
