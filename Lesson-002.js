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


function sumOfArray(arr) {
    if (arr.length <= 0) {
        console.log("Sum will be 0");
    } else {
        sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log("Sum is " + sum);
    }
}

sumOfArray([])  // Sum is 0

sumOfArray([1,2,3,4])  // Sum is 10

/*
<!doctype html>
<html>
	<head>
		<title>Index Page</title>
	</head>
	<body>
	</body>
</html>
 */


function test() {
    document.writeln('<ul>');
    for (var i = 0; i < 5; i++) {
        document.writeln('<li>Value ' + i + '</li>');
    }
    document.writeln('</ul>');
}

test()        // View Your Page it will Show you Output as list

