console.log("The event loop of JavaScript");
function printing() {
    console.log(1);
    setTimeout(function() {
        console.log(2);
    }, 1000);
    setTimeout(function() {
        console.log(3);
    }, 0);
    console.log(4);
}

//printing();

function makePrinter(i, val) {
    return function() {
        console.log(`Value in ${i} is ${val}`);
    };
}

function printing2(array) {
    for(var i = 0; i < array.length; i++) {
        //setTimeout(makePrinter(i, array[i]), 1000); // Issue solved using closures
        // The following code does not work as expected!

        // var val = array[i];
        // setTimeout(() => {
        //     console.log(`Value in ${i} is ${val}`);
        // }, 1000);
    }

    console.log("I am done!");
}

printing2([1,2,3,4,5]);

console.log("Hoisting");
function test() {
    console.log(a);
    console.log(foo());
   
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 //test();

console.log("The scope chain");
var currentScope = 0; // global scope
(function () {
  var currentScope = 1, one = 'scope1';
  console.log(currentScope);
  (function () {
    var currentScope = 2, two = 'scope2';
    console.log(currentScope);
    (function () {
      var currentScope = 3, three = 'scope3';
      console.log(currentScope);
      console.log(one + two + three); // climb up the scope chain to get one and two
    }());
  }());
}());

console.log("Recursion");
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
// To avoid stack overflow
// var list = readHugeList();
// var nextListItem = function() {
//     var item = list.pop();
//     if (item) {
//         // process the list item...
//         setTimeout( nextListItem, 0);
//     }
// };

console.log("JavaScript is a loosly typed language that performs automatic typed conversion");
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

console.log("'this' knowledge and the scope of functions");
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

console.log("Depth-First-Search algorithm");
function Traverse(p_element,p_callback) {
    p_callback(p_element);
    var list = p_element.children;
    for (var i = 0; i < list.length; i++) {
        Traverse(list[i],p_callback);  // recursive call
    }
 }