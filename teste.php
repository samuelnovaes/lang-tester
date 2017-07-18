<?php
	function primo($num){
		if($num < 2)
			return false;
		for($i = 2; $i < $num; $i++){
			if($num % $i == 0)
				return false;
		}
		return true;
	}

	for($i = 0; $i < 100000; $i++){
		if(primo($i))
			echo $i."\n";
	}
?>