class teste {
	static boolean primo(int num) {
		if (num < 2)
			return false;
		for (int i = 2; i < num; i++) {
			if (num % i == 0)
				return false;
		}
		return true;
	}

	public static void main(String[] args) {
		for (int i = 0; i < 100000; i++) {
			if (primo(i))
				System.out.println(i);
		}
	}
}