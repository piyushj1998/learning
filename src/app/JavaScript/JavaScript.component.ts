import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-JavaScript',
  templateUrl: './JavaScript.component.html',
  styleUrls: ['./JavaScript.component.css']
})

export class JavaScriptComponent implements OnInit {

  javascript:any;
  constructor(private viewportScroller: ViewportScroller) {}



  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
}
  ngOnInit() {
this.javascript  = [
  {
    title:"find missing array element from an array ",
    description:`

    function findMissing(arr,N){
      let i;
          let missingArrayValue = [];
      let temp = [];
      for (i = 0; i <= N; i++) {
            temp[i] = 0;
          }

          for (i = 0; i < N; i++) {
                  temp[arr[i] - 1] = 1;
              }

          let ans = 0;
          for (i = 0; i <= N; i++) {
            if (temp[i] == 0){ ans = i + 1; missingArrayValue.push(ans); }
                  }
          console.log(missingArrayValue);

      }

      // Driver code
          let arr = [ 5,4,6,2,1];
          let n = arr.length;

      // Function call
        findMissing(arr,n);
    `
  },
{
  title:"Object.freeze() vs const",
  description:""
},
{
  title:"Undefined & Not defined",
  description:`
  undefined :- variable exist in memorey but didn't assign any value of that variable<br/>
  not defined:- variable not exists in memoery
  `
},

  { title: "JavaScript",
    description:`<p>
    Javascript's syntax is havily inspired by C++, Java. Inner working of js is closer to dynamicall-typed,interpreted language.
    JavaScript is a most programing language for web developer to create dynamic page and interactive page for web page.
    JavaScript (JS) is a lightweight, interpreted or compiled programming language. many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.</p>`
  },
  { title: "Hosting",
    description:`<p>Hosting is concept to use variable and function before intilization and without getting errors. All this happen during the memorey creation phase.
<br/>    <b>Hosting</b> is a mechanisum where variable and function are declartion are moved to top of their scope before code execution
    <p class="code">
    // Hoisting
    function codeHoist(){<br/>
        a = 10;<br/>
        let b = 50;<br/>
    }<br/>
    codeHoist();<br/>
 <br/>
    console.log(a); // 10<br/>
    console.log(b); // ReferenceError : b is not defined<br/>
    </p>

    </p>`
  },
  {
    title:"How Javascripr Compiler work",
    description:`
    <img class="img-thumbnail" src="../assets/js-compiler.png"/>
    JS compilter take an file an parse the code and create lexical analysis of  the code and create <b>AST</b> abstract syntax tree.
    Check <a href="https://google.github.io/blockly-samples/examples/interpreter-demo/step-execution.html" target="_blank">AST</a> Tree here
    <br/><br/>
    `
  },
  {
    title:"Javascript Clouser",
    description:`A Clouser is a function that give you access to  use parent scope value inside the local socpe `
  },
  {
    title:"Memoization",
    description:`Memorization is technique to reduce the complexity ,runtime of application and proper utilization of resources(time & memory)}

  const add = (n)=>(n+1);<br/>
  <br/><br/><br/>

  const memorize = (fn)=>{<br/>
    let cache = {};<br/>
    return (...args)=>{<br/>
        let n  = args[0];<br/>
        <br/>
        if(n in cache){<br/>
          return[n];<br/>
        }<br/>
        else{<br/>
          var result = fn(n);<br/>
          cache[n] = result;<br/>
          return result;<br/>
        }<br/>
        <br/>
    }<br/><br/>
    // creating a memoized function for the 'add' pure function<br/>
    const memoizedAdd = memoize(add);<br/>
    console.log(memoizedAdd(3));  // calculated<br/>
    console.log(memoizedAdd(3));  // cached<br/>
    console.log(memoizedAdd(4));  // calculated<br/>
    console.log(memoizedAdd(4));<br/>
  }<br/>
  <br/><br/>
    `
  },
  { title: "Lexical Scope / Closure:-",
    description:`
    <img class="img-thumbnail" src="../assets/lexical_scope.png"/><br/>

    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" target="_blank">Clousure</a><br/>
    <a href="https://www.educative.io/answers/lexical-scope-in-javascript" target="_blank">Lexical Scope</a><br/>

    <p>Lexical Scope is the ability for a function to access variable from the parent scope
        <p class="code">
        var first = 2;<br/>
        var addTwoNumber = function() {<br/>
            var second = 1;<br/>
            return first + second;<br/>
        };<br/>
<br/>
          addTwoNumber()    // 3<br/>
        </p><br/>

        In above code we saw <b>addTwoNumber</b> Function add two variable first and second.
        first variable outside the functional scope. This example show the lexical scope.
        <br/><br/>
        Closure are more effecient :-<br/>
        let's take an example and understand why closure are efficent<br/><br/>

        function heavyMetal(index){
          const bigArray = new Array(7000).fill('😊');
          return bigArray[index]
        }

        heavyMetal(344);        //'😊'
        heavyMetal(214);        //'😊'
        heavyMetal(334);        //'😊'

        In this example everytime a new array created and allot 7000 memory and after all execution complete the bigArray Memory destoyed.
        everytime this hapeen. when we call heavyMetal function.


        so here, closure come and provide good soluation.
        function heavyMetal(){
          const bigArray = new Array(7000).fill('😊');
            return function(index){
                return bigArray[index]
            }
        }
          const subHeavyMetal = heavyMetal();
          heavyMetal(344);        //'😊'
          heavyMetal(214);        //'😊'
          heavyMetal(334);        //'😊'

          in function call we assign return function to another variable and execute it.
          in this we use upper level value which is bigArray and return index.
    </p>`
  },
  {
    title:"Operator precedence <br/> Learn Bitwise Operator",
    description:`
<div class="row">
<div class="col-md-1">18</div>
<div class="col-md-2">Grouping</div>
<div class="col-md-4">()</div>
</div>
    Name                         Order  Syntax<br/>
    -----------------------------------------------------<br/>
    18  Grouping                            ()<br/>
    -----------------------------------------------------<br/>
    17  Member Access                LTR    … . …<br/>
        Computed Member Access              … [ … ]<br/>
        new (with argument list)            new … ( … )<br/>
        Function Call                       … ( … )<br/>
        Optional Chaining            LTR    … ?. …<br/>
    -----------------------------------------------------<br/>
    16  new (without argument list)         new …<br/>
    -----------------------------------------------------<br/>
    15  Postfix Increment                   … ++<br/>
        Postfix Decrement                   … --<br/>
    -----------------------------------------------------<br/>
    14  Logical NOT                         ! …<br/>
        Bitwise NOT                         ~ …<br/>
        Unary Plus                          + …<br/>
        Unary Negation                      - …<br/>
        Prefix Increment                    ++ …<br/>
        Prefix Decrement                    -- …<br/>
        typeof                              typeof …<br/>
        void                                void …<br/>
        delete                              delete …<br/>
        await                               await …<br/>
    -----------------------------------------------------<br/>
    13  Exponentiation               RTL    … ** …<br/>
    -----------------------------------------------------<br/>
    12  Multiplication               LTR    … * …<br/>
        Division                     LTR    … / …<br/>
        Remainder                    LTR    … % …<br/>
    -----------------------------------------------------<br/>
    11  Addition                     LTR    … + …<br/>
        Subtraction                  LTR    … - …<br/>
    -----------------------------------------------------<br/>
    10  Left Shift                   LTR    … << …<br/>
        Arithmetic Right Shift       LTR    … >> …<br/>
        Logical Right Shift          LTR    … >>> …<br/>
    -----------------------------------------------------<br/>
     9  Less Than                    LTR    … < …<br/>
        Less Than Or Equal           LTR    … <= …<br/>
        Greater Than                 LTR    … > …<br/>
        Greater Than Or Equal        LTR    … >= …<br/>
        in                           LTR    … in …<br/>
        instanceof                   LTR    … instanceof …<br/>
    -----------------------------------------------------<br/>
     8  Equality                     LTR    … == …<br/>
        Inequality                   LTR    … != …<br/>
        Strict Equality              LTR    … === …<br/>
        Strick Inequality            LTR    … !== …<br/>
    -----------------------------------------------------<br/>
     7  Bitwise AND                  LTR    … & …<br/>
    -----------------------------------------------------<br/>
     6  Bitwise XOR                  LTR    … ^ …<br/>
    -----------------------------------------------------<br/>
     5  Bitwise OR                   LTR    … | …<br/>
    -----------------------------------------------------<br/>
     4  Logical AND                  LTR    … && …<br/>
    -----------------------------------------------------<br/>
     3  Logical OR                   LTR    … || …<br/>
        Nullish Coalescing           LTR    … ?? …<br/>
    -----------------------------------------------------<br/>
     2  Assignment                   RTL    … = …<br/>
                                     RTL    … += …<br/>
                                     RTL    … -= …<br/>
                                     RTL    … **= …<br/>
                                     RTL    … *= …<br/>
                                     RTL    … /= …<br/>
                                     RTL    … %= …<br/>
                                     RTL    … <<= …<br/>
                                     RTL    … >>= …<br/>
                                     RTL    … >>>= …<br/>
                                     RTL    … &= …<br/>
                                     RTL    … ^= …<br/>
                                     RTL    … |= …<br/>
                                     RTL    … &&= …<br/>
                                     RTL    … ||= …<br/>
                                     RTL    … ??= …<br/>
        Ternary Operator             RTL    … ? … : …<br/>
        Arrow                               … => …<br/>
        yield                               yield …<br/>
        yield*                              yield* …<br/>
        Spread                              ... …<br/>
    -----------------------------------------------------<br/>
     1  Comma / Sequence             LTR    … , …<br/>
    `
  },
  {
    title:"OOP And FP",
    description:``
  },
  {
    title:"Factory Functions",
    description:`Factory function can be defined as a function that creates and return as object it. it is similar to constructor of class.<br/>
    function createEmployeeObjects(name) {<br/>
      return {<br/>
         name: name,<br/>
         work: function () {<br/>
            console.log('New Employee Created with name: ' + name);<br/>
         }<br/>
      };<br/>
   }<br/>
   //Creating an Employee with factory function<br/>
   const emp1 = createEmployeeObjects('Steve Jobs');<br/>
   emp1.work();<br/>
   <br/><br/>
   // Create a robot with name Chitti 2.O Upgraded<br/>
   const emp2 = createEmployeeObjects('Bill Gates');<br/>
   emp2.work();<br/>
   <br/><br/>
    `
  },
  {
    title:"Function Currying",
    description:`when a function return another function untill the argument are fully supplied.
        Example:- <br/>
        function curry(f){<br/>
          return function(a){
              return function(b){
                return f(a,b);
              }
          }
        }

        const sum = (a,b)=> a+b;

        var curried  = curry(sum);

        console.log(curried(3)(4));
<a href="https://ui.dev/">Visualize js Code</a>
<a href="https://www.jsv9000.app/">JavaScript Visualizer</a>



    `
  },
  {
    title:"Global Execution Context",
    description:`Global execution context are the first who go inside the stack and
     then function, loops and other execution go inside and after all execution n `
  },
  {
    title:"Call,Apply & BInd",
    description:`
    <b>Call</b> invokes the function and allows you to pass in arguments one by one.<br/>
<b>Apply</b> invokes the function and allows you to pass in arguments as an array.<br/>
<b>Bind</b> returns a new function, allowing you to pass in a this array and any number of arguments.<br/>
<br/>
<b>Apply vs. Call vs. Bind Examples</b><br/>
--------------<br/>
<b>Call</b><br/>
<br/>
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};<br/>
var person2 = {firstName: 'Kelly', lastName: 'King'};<br/>
<br/>
function say(greeting) {<br/>
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);<br/>
}<br/>
<br/>
say.call(person1, 'Hello'); // Hello Jon Kuperman<br/>
say.call(person2, 'Hello'); // Hello Kelly King<br/>
<br/>
--------------<br/>
<b>Apply</b><br/>
<br/>
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};<br/>
var person2 = {firstName: 'Kelly', lastName: 'King'};<br/>
<br/>
function say(greeting) {<br/>
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);<br/>
}<br/>
<br/>
say.apply(person1, ['Hello']); // Hello Jon Kuperman<br/>
say.apply(person2, ['Hello']); // Hello Kelly King<br/>
<br/>
-------------<br/>
<b>Bind</b><br/>
<br/>
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};<br/>
var person2 = {firstName: 'Kelly', lastName: 'King'};<br/>
<br/>
function say() {<br/>
    console.log('Hello ' + this.firstName + ' ' + this.lastName);<br/>
}<br/>
<br/>
var sayHelloJon = say.bind(person1);<br/>
var sayHelloKelly = say.bind(person2);<br/>
<br/>
sayHelloJon(); // Hello Jon Kuperman<br/>
sayHelloKelly(); // Hello Kelly King<br/><br/><br/>
    `
  },
  {
    title:"Pure Function",
    description:`A pure is function that always return the same result if the same argument are passed`,
  },
  {
    title:"CONST,let & Var",
    description:`
    <b>CONST:</b> const is block scoped<br/>
    <b>Var:</b> var is function scoped<br/>
    <b>let:</b> let is block scoped<br/>
    `,
  },
  {
    title:"High order function",
    description:`A High order function is function that takes a function as an argument `
  },
  {
    title:"Cloning object in js (Deep Copy & shallow Copy)",
    description:`A variable assign to another variable in called <b>Shallow Copy</b>. In simple words, a reference variable mainly stores the address of the object it refers to. and then if you change anything in new variable changes will reflacte to pervious variable
    <br/>
let employee = {<br/>
  eid: "E102",<br/>
  ename: "Jack",<br/>
  eaddress: "New York",<br/>
  salary: 50000<br/>
}<br/>
<br/>
console.log("Employee=> ", employee);<br/>
let newEmployee = employee;    // Shallow copy<br/>
console.log("New Employee=> ", newEmployee);<br/>
<br/>
console.log("---------After modification----------");<br/>
newEmployee.ename = "Beck";<br/>
console.log("Employee=> ", employee);<br/>
console.log("New Employee=> ", newEmployee);<br/>
<br/>
<br/>

<b>Deep Copy:</b> <br/>
deep copy makes a copy of all the members of the old object, allocates a separate memory location for the new object, and then assigns the copied members to the new object. In this way, both the objects are independent of each other and in case of any modification to either one, the other is not affected. Also, if one of the objects is deleted the other still remains in the memory.
<br/>
let employee = {<br/>
  eid: "E102",<br/>
  ename: "Jack",<br/>
  eaddress: "New York",<br/>
  salary: 50000<br/>
}<br/>
console.log("=========Deep Copy========");<br/>
let newEmployee = JSON.parse(JSON.stringify(employee));<br/>
console.log("Employee=> ", employee);<br/>
console.log("New Employee=> ", newEmployee);<br/>
console.log("---------After modification---------");<br/>
newEmployee.ename = "Beck";<br/>
newEmployee.salary = 70000;<br/>
console.log("Employee=> ", employee);<br/>
console.log("New Employee=> ", newEmployee);<br/>
<br/><br/>
To learn more about deep copy and shallow copy <a href="https://web.dev/structured-clone/">Click Here</a>
<br/>


    `
  },
  {
    title:"Sync / Async function",
    description:`
    <b>Sync:-</b><br/>
    the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.<br/><br/>

    <b>Async:-</b><br/>
    Async function declare with an async keyword  where the await keyword enable async, promise based behavior.
    Asynchronous provide a cleaner style code and avoiding  promise chaning.<br/>
    ways to perform async operation<br/>
    There are many ways we can perform async operation:-<br/>
    1) Call Back<br/>
    2) Promise<br/>
    3) async & await<br/>
    <br/><br/><br/>
    <b>Call back</b><br/>
    Call back is a way to pass function as argument in another function <br/>
    function call_back()<br/>{<br/> console.log("Call Back function")<br/> }<br/>
    function call_back_return(a,b,callback)<br/> {<br/>  return callback(a+b) <br/>}<br/>
    call_back_return(5,4);<br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <b>Promise</b><br/>
    A promise is a special type of js Object. It produse  a value after an asynchronus operation complete sucessfully or error occur if it does not successfully due to some time out.<br/><br/>
    <b>State Of Promise</b><br/>
    1) Pending  <br/>
    2) Resolved <br/>
    3) Rejected <br/>
    <br/><br/>
    <b>Promise Static method</b><br/><br/>
    1) Promise.all()<br/>
    2) Promise.allSettled()<br/>
    3) Promise.any()<br/>
    4) Promise.race()<br/>
    5) Promise.resolved()<br/>
    6) Promise.reject()<br/>
    <br/><br/><br/>

    <b>Promise.all():</b><br/>
    Promise.all() static method and use when we have to perform multiple promise opeation and if one of promise are reject then  <br/>
    var p1 = Promise.resolve(3);<br/>
    var p2 = 1337;<br/>
    var p3 = new Promise((resolve, reject) => {<br/>
      setTimeout(resolve, 100, "foo");<br/>
    }); <br/>
    <br/>
    Promise.all([p1, p2, p3]).then(values => { <br/>
      console.log(values); // [3, 1337, "foo"] <br/>
    });<br/><br/><br/>

    <b>Promise.allSettled():</b><br/>
    The <b>Promise.allSettled()</b> method returns a promise that resolves
    after all of the given promises have either fulfilled or rejected,<br/>
    with an array of objects that each describes the outcome of each promise.<br/><br/>

    const promise1 = Promise.resolve(3);<br/>
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));<br/>
    const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));<br/>
    const promises = [promise1, promise2,promise3];<br/>
    <br/>
    Promise.allSettled(promises).<br/>
    then((results) => results.forEach((result) => console.log(result)));<br/><br/><br/><br/>

    <b>Promise.any():</b><br/>

    It's staic method that take multiple array of promise as input and return when single promise are resolve fast.
    It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.<br/>
    <br/>
    const promise1 = Promise.reject(0);<br/>
    const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));<br/>
    const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));<br/>
    <br/>
    const promises = [promise1, promise2, promise3];<br/>
    <br/>
    Promise.any(promises).then((value) => console.log(value));<br/>
    <br/><br/>
    <b>Promise.race()</b><br/>
    This method take multiple promise and return only single promise whose complete first<br/>
    function sleep(time, value, state) {<br/>
      return new Promise((resolve, reject) => {<br/>
        setTimeout(() => {<br/>
          if (state === "fulfill") {<br/>
            return resolve(value);<br/>
          } else {<br/>
            return reject(new Error(value));<br/>
          }<br/>
        }, time);<br/>
      });<br/>
    }<br/>
    <br/>
    const p1 = sleep(500, "one", "fulfill");<br/>
    const p2 = sleep(100, "two", "fulfill");<br/>
    <br/>
    Promise.race([p1, p2]).then((value) => {<br/>
      console.log(value); // "two"<br/>
      // Both fulfill, but p2 is faster<br/>
    });<br/>
    <br/><br/>
    `
  },
  {
    title:"Arrow Function vs Regular Function",
    description:`
      <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3>In Arrow Function few things are not allowed</h3><hr/><br/>
                <ul>
                  <li> Syntax</li>
                  <li> No arguments (arguments are array-like objects)</li>
                  <li> No prototype object for the Arrow function</li>
                  <li> Cannot be invoked with a new keyword (Not a constructor function)</li>
                  <li> No own this (call, apply & bind won't work as expected)</li>
                  <li> It cannot be used as a Generator function</li>
                  <li> Duplicate-named parameters are not allowed</li>

                </ul>
              </div>
          </div>
      </div>
    `,

  },
  {
    title:"Event Propagation Bubbling & Capturing",
    description:`
    <b>Propagation: </b></br> Propagation means refer to how events travel through the DOM(document object modal)<br/><br/>
    <b>Bubbline: </b></br>Travels From target to root <br/><br/>
    <b>Capturing: </b></br>Travels From root to target <br/><br/>
    The target is the DOM node on which you click, or trigger with any other event.<br/><br/>
    The root is the highest-level parent of the target. This is usually the document, which is a parent of the , which is a (possibly distant) parent of your target element.
    `
  },
  {
    title:"OOP Concepts",
    description:`
    OOP focuses on the objects that are required to be manipulated instead of logic.<br/>
      <ul>
        <li>It makes development and maintenance easier</li>
        <li>It provides data hiding</li>
        <li>It provides ability to simulate real-world</li>
        <li>less memory and organized</li>
        <li>reusable</li>
      </ul>

      <b>Classes:</b><br/>
      Classes are blueprint of an object.A class can have many Objects beacuse of class is template while object are instance of the class.<br/>
      JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.
<br/>
      // Defining class using es6<br/>
class Vehicle {<br/>
    constructor(name, maker, engine) {<br/>
        this.name = name;<br/>
        this.maker = maker;<br/>
        this.engine = engine;<br/>
    }<br/>
    getDetails() {<br/>
        return ('The name of the bike is this.name')<br/>
          }<br/>
      }<br/>
      // Making object with the help of the constructor<br/>
      let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');<br/>
      let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');<br/>
      <br/><br/>
      console.log(bike1.name);    // Hayabusa<br/>
      console.log(bike2.maker);   // Kawasaki<br/>
      console.log(bike1.getDetails());<br/>
      <br/><br/>
      <b>Abstraction:</b>
      Abstraction: Abstraction means displaying only essential information and hiding the details. Data abstraction refers to providing only
      <br/>essential information about the data to the outside world, hiding the background details or implementation.
      <br/><br/>
      <b>Encapsulation:</b> The process of wrapping properties and functions within a single unit is known as encapsulation.
<br/><br/>

// Encapsulation example<br/>
class person {<br/>
    constructor(name, id) {<br/>
        this.name = name;<br/>
        this.id = id;<br/>
    }<br/>
    add_Address(add) {<br/>
        this.add = add;<br/>
    }<br/>
    getDetails() {<br/>
        console.log('Name is');<br/>
    }<br/>
}<br/>
<br/>
let person1 = new person('Mukul', 21);<br/>
person1.add_Address('Delhi');<br/>
person1.getDetails();<br/>
<br/><br/>

<b>Polymorphism:</b> Polymorphism is one of the core concepts of object-oriented programming languages. Polymorphism means the same function with different signatures is called many times.

<b>Inheritance:</b> It is a concept in which some properties and methods of an Object are being used by another Object.`
  }

]

  }

}
