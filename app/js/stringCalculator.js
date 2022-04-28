class StringCalculator {
  constructor() {
  }

  add(numbers){
    let delimiterFound = new RegExp(/(\/\/.+\n)+/g).test(numbers);
    if(delimiterFound == true){
      let delimiter = numbers.match(/(\/\/.+\n)+/g);
      numbers.replace(delimiter);
      delimiter = delimiter.toString()
      // delimiter.replace(/\/\//g);
      delimiter = delimiter.substring(2, delimiter.length);
      delimiter.replace(/\n/);
      console.log(delimiter);
      console.log(numbers);
    }
    let tabNumbers = numbers.split(/[,\n${delimiter}]/);
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