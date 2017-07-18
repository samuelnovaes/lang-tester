function primo(num)
	if num < 2 then
		return false
	end
	for i = 2,(num-1) do
		if num % i == 0 then
			return false
		end
	end
	return true
end

for i=0,100000 do
	if primo(i) then
		print(i)
	end
end