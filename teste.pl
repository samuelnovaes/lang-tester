sub primo {
	$num = shift;
	if($num < 2){
		return 0;
	}
	for(my $i = 2; $i < $num; $i++){
		if($num % $i == 0){
			return 0;
		}
	}
	return 1;
}

for(my $i = 0; $i < 100000; $i++){
	if(primo($i)){
		print "$i\n";
	}
}