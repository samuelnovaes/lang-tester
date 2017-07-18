fn primo(num:i32) -> bool {
	if num < 2 {
		return false;
	}
	for i in 2..num {
		if num % i == 0 {
			return false;
		}
	}
	return true;
}

fn main(){
	for i in 0..100000 {
		if primo(i) {
			println!("{}", i);
		}
	}	
}
