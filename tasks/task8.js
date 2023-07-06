
function outerFunction() {
    let outerVariable = 'The outer function is my genesis';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Call the outer function and store the returned inner function in a variable
  let innerguy = outerFunction();
  
  // Call the inner function and observe that it still has access to the outer variables
  innerguy(); // logs: The outer function is my genesis
  


