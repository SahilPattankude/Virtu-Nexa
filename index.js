// Calculate factorial iteratively
function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Calculate factorial recursively
  function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  
  // Calculate factorial based on selected method
  function calculateFactorial(method) {
    const numberInput = document.getElementById('numberInput');
    const output = document.getElementById('output');
  
    // Input validation
    const number = parseInt(numberInput.value);
    if (isNaN(number) || number < 0) {
      output.innerHTML = '<span style="color: red;">Please enter a valid positive integer.</span>';
      return;
    }
  
    let result;
    if (method === 'iterative') {
      result = factorialIterative(number);
      output.innerHTML = `Factorial (Iterative): ${result}`;
    } else if (method === 'recursive') {
      result = factorialRecursive(number);
      output.innerHTML = `Factorial (Recursive): ${result}`;
    }
  }
  