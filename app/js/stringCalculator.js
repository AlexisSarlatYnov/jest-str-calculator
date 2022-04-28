class StringCalculator {
  constructor() {
  }

  add(numbers){
    let tabNumbers = numbers.split(/[,\n]+/);
    let somme = 0;
    // let i = 0;
    // while(i<2 && tabNumbers[i]){
    //   somme += parseInt(tabNumbers[i]);
    //   i++;
    // }
    if(numbers != ''){
      tabNumbers.forEach(element => {
        somme += parseInt(element);
      });
    };
    return somme;
  }
}
  export { StringCalculator }