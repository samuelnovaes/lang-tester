def primo(num)
	if num < 2
		return false
	end
	for i in 2..(num - 1)
		if num % i == 0
			return false
		end
	end
	return true
end

for i in 0..(100000 - 1)
	if primo(i)
		puts i
	end
end
