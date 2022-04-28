class StringCalculator {
  constructor() {
  }

  add(numbers){
    let delimiterFound = new RegExp(/(\/\/.+\n)+/g).test(numbers);
    let numbers2 = numbers;
    if(delimiterFound){
      let delimiter = numbers.charAt(2);
      console.log(delimiter);
      numbers2 = numbers.split('\n')[1];
      numbers2.replaceAll(delimiter, ',');
      console.log(numbers2);
    }
    let tabNumbers = numbers2.split(/[,\n]/);
    let somme = 0;
    // let i = 0;
    // while(i<2 && tabNumbers[i]){
    //   somme += parseInt(tabNumbers[i]);
    //   i++;
    // }
    if(numbers2 != ''){
      tabNumbers.forEach(element => {
        somme += parseInt(element);
      });
    };
    return somme;
  }
}
  export { StringCalculator }