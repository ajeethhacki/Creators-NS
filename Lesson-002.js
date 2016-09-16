function testFunc() { 
  console.log("Hello.. "); 
  return 1; 
}
testFunc()    // Calling

function testFunc(user) { 
  console.log("Hello.. "+user); 
  return 1; 
}
testFunc('Steve')    // Calling

var test = function testMethod() { 
  console.log('Hello'); 
}
test()    // Calling


var test = function() { 
  console.log('Hello'); 
}
test()    // Calling
