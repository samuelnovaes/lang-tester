function primo(num) {
	if (num < 2)
		return false;
	for (let i = 2; i < num; i++) {
		if (num % i == 0)
			return false;
	}
	return true;
}

for (let i = 0; i < 100000; i++) {
	if (primo(i))
		console.log(i);
}