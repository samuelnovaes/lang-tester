bool primo(num numero) {
  if (numero < 2) {
    return false;
  }
  for(num i = 2; i < numero; i++){
    if(numero % i == 0){
      return false;
    }
  }
  return true;
}

void main(){
  for(num i = 0; i < 100000; i++){
    if(primo(i)){
      print(i);
    }
  }
}
