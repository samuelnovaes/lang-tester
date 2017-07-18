func primo(num:Int) -> Bool {
	if num < 2 {
		return false
	}
	for i in 2..<num {
		if num % i == 0 {
			return false
		}
	}
	return true
}

for i in 0..<100000 {
	if primo(num: i) {
		print(i)
	}
}
