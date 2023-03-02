function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let fib;
  
    while (b < numero) {
      fib = a + b;
      a = b;
      b = fib;
    }
  
    if (b === numero) {
      console.log(`${numero} Pertence à sequência de Fibonacci.`);
    } else {
      console.log(`${numero} Não pertence à sequência de Fibonacci.`);
    }
  }
  
  verificaFibonacci(13); 
  verificaFibonacci(21); 
  verificaFibonacci(22);
  