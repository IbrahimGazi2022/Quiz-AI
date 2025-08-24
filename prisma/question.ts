type QuestionSeedData = {
    question: string;
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    options: {
        label: 'A' | 'B' | 'C' | 'D';
        text: string;
        isCorrect: boolean;
    }[];
};

export const questions: QuestionSeedData[] = [
    // Easy Questions (1–20)
    {
        question: "What is JavaScript primarily used for?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "Styling web pages", isCorrect: false },
            { label: "B", text: "Adding interactivity to web pages", isCorrect: true },
            { label: "C", text: "Defining page structure", isCorrect: false },
            { label: "D", text: "Managing databases", isCorrect: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "D",
        options: [
            { label: "A", text: "var", isCorrect: false },
            { label: "B", text: "let", isCorrect: false },
            { label: "C", text: "const", isCorrect: false },
            { label: "D", text: "All of the above", isCorrect: true }
        ]
    },
    {
        question: "What will `console.log(typeof null)` output?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "null", isCorrect: false },
            { label: "B", text: "object", isCorrect: true },
            { label: "C", text: "undefined", isCorrect: false },
            { label: "D", text: "string", isCorrect: false }
        ]
    },
    {
        question: "Which operator is used for strict equality comparison?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "==", isCorrect: false },
            { label: "B", text: "=", isCorrect: false },
            { label: "C", text: "===", isCorrect: true },
            { label: "D", text: "!==", isCorrect: false }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "D",
        options: [
            { label: "A", text: "function myFunction() {}", isCorrect: false },
            { label: "B", text: "const myFunction = function() {}", isCorrect: false },
            { label: "C", text: "const myFunction = () => {}", isCorrect: false },
            { label: "D", text: "All of the above", isCorrect: true }
        ]
    },
    {
        question: "What does the `Array.map()` method do?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Creates a new array with transformed elements", isCorrect: true },
            { label: "B", text: "Modifies the original array", isCorrect: false },
            { label: "C", text: "Filters array elements", isCorrect: false },
            { label: "D", text: "Sorts array elements", isCorrect: false }
        ]
    },
    {
        question: "Which method adds an element to the end of an array?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "array.push()", isCorrect: true },
            { label: "B", text: "array.pop()", isCorrect: false },
            { label: "C", text: "array.shift()", isCorrect: false },
            { label: "D", text: "array.unshift()", isCorrect: false }
        ]
    },
    {
        question: "What will `console.log(2 + '2')` output?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "4", isCorrect: false },
            { label: "B", text: "22", isCorrect: false },
            { label: "C", text: "'22'", isCorrect: true },
            { label: "D", text: "NaN", isCorrect: false }
        ]
    },
    {
        question: "How do you check if a variable is an array?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "typeof variable === 'array'", isCorrect: false },
            { label: "B", text: "Array.isArray(variable)", isCorrect: true },
            { label: "C", text: "variable.isArray()", isCorrect: false },
            { label: "D", text: "variable instanceof Array", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `console.log()`?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To output messages to the console", isCorrect: true },
            { label: "B", text: "To log errors to a file", isCorrect: false },
            { label: "C", text: "To create login functionality", isCorrect: false },
            { label: "D", text: "To display messages on the webpage", isCorrect: false }
        ]
    },
    {
        question: "Which keyword is used to declare a constant variable?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "var", isCorrect: false },
            { label: "B", text: "let", isCorrect: false },
            { label: "C", text: "const", isCorrect: true },
            { label: "D", text: "static", isCorrect: false }
        ]
    },
    {
        question: "What does the `Array.filter()` method do?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "Modifies the original array", isCorrect: false },
            { label: "B", text: "Creates a new array with elements that pass a test", isCorrect: true },
            { label: "C", text: "Filters out all elements", isCorrect: false },
            { label: "D", text: "Sorts the array", isCorrect: false }
        ]
    },
    {
        question: "How do you access an object property?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "D",
        options: [
            { label: "A", text: "object.property", isCorrect: false },
            { label: "B", text: "object['property']", isCorrect: false },
            { label: "C", text: "object.get('property')", isCorrect: false },
            { label: "D", text: "Both A and B", isCorrect: true }
        ]
    },
    {
        question: "What will `console.log(Boolean(''))` output?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "true", isCorrect: false },
            { label: "B", text: "false", isCorrect: true },
            { label: "C", text: "undefined", isCorrect: false },
            { label: "D", text: "null", isCorrect: false }
        ]
    },
    {
        question: "Which method converts a string to a number?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Number()", isCorrect: false },
            { label: "B", text: "parseInt()", isCorrect: false },
            { label: "C", text: "parseFloat()", isCorrect: false },
            { label: "D", text: "All of the above", isCorrect: true }
        ]
    },
    {
        question: "What is the result of `'5' - 3`?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "'53'", isCorrect: false },
            { label: "B", text: "2", isCorrect: true },
            { label: "C", text: "8", isCorrect: false },
            { label: "D", text: "NaN", isCorrect: false }
        ]
    },
    {
        question: "How do you create an object in JavaScript?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "D",
        options: [
            { label: "A", text: "const obj = {}", isCorrect: false },
            { label: "B", text: "const obj = new Object()", isCorrect: false },
            { label: "C", text: "const obj = Object.create()", isCorrect: false },
            { label: "D", text: "All of the above", isCorrect: true }
        ]
    },
    {
        question: "What does the `Array.forEach()` method do?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Executes a function for each array element", isCorrect: true },
            { label: "B", text: "Returns a new array", isCorrect: false },
            { label: "C", text: "Modifies the original array", isCorrect: false },
            { label: "D", text: "Filters array elements", isCorrect: false }
        ]
    },
    {
        question: "Which operator returns the remainder of a division?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "%", isCorrect: true },
            { label: "B", text: "/", isCorrect: false },
            { label: "C", text: "//", isCorrect: false },
            { label: "D", text: "mod", isCorrect: false }
        ]
    },
    {
        question: "What will `console.log(0.1 + 0.2 === 0.3)` output?",
        topic: "javascript",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "true", isCorrect: false },
            { label: "B", text: "false", isCorrect: true },
            { label: "C", text: "undefined", isCorrect: false },
            { label: "D", text: "NaN", isCorrect: false }
        ]
    },

    // Medium Questions (21–40)
    {
        question: "What is hoisting in JavaScript?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Variable/function declarations are moved to the top of their scope", isCorrect: true },
            { label: "B", text: "Variables are lifted to global scope", isCorrect: false },
            { label: "C", text: "Functions are elevated in priority", isCorrect: false },
            { label: "D", text: "A way to optimize code", isCorrect: false }
        ]
    },
    {
        question: "What is a closure in JavaScript?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "A function that closes the program", isCorrect: false },
            { label: "B", text: "A function with access to its outer function's scope", isCorrect: true },
            { label: "C", text: "A way to close variables", isCorrect: false },
            { label: "D", text: "A method to end execution", isCorrect: false }
        ]
    },
    {
        question: "What is the difference between `let` and `var`?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "let is function-scoped, var is block-scoped", isCorrect: false },
            { label: "B", text: "No difference", isCorrect: false },
            { label: "C", text: "let is block-scoped, var is function-scoped", isCorrect: true },
            { label: "D", text: "let is older, var is newer", isCorrect: false }
        ]
    },
    {
        question: "What does the `this` keyword refer to?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "D",
        options: [
            { label: "A", text: "The current function", isCorrect: false },
            { label: "B", text: "The global object", isCorrect: false },
            { label: "C", text: "The parent object", isCorrect: false },
            { label: "D", text: "It depends on the execution context", isCorrect: true }
        ]
    },
    {
        question: "What are promises used for?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Handling asynchronous operations", isCorrect: true },
            { label: "B", text: "Making synchronous code faster", isCorrect: false },
            { label: "C", text: "Creating guaranteed outcomes", isCorrect: false },
            { label: "D", text: "Replacing all functions", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `async/await`?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To make code run faster", isCorrect: false },
            { label: "B", text: "To write asynchronous code that looks synchronous", isCorrect: true },
            { label: "C", text: "To create async functions only", isCorrect: false },
            { label: "D", text: "To replace promises completely", isCorrect: false }
        ]
    },
    {
        question: "What is destructuring assignment?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "A way to destroy variables", isCorrect: false },
            { label: "B", text: "A method to break down objects", isCorrect: false },
            { label: "C", text: "Extracting values from arrays/objects into variables", isCorrect: true },
            { label: "D", text: "A type of function destruction", isCorrect: false }
        ]
    },
    {
        question: "What is the spread operator used for?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Spreading elements in arrays", isCorrect: false },
            { label: "B", text: "Copying objects", isCorrect: false },
            { label: "C", text: "Passing multiple arguments", isCorrect: false },
            { label: "D", text: "All of the above", isCorrect: true }
        ]
    },
    {
        question: "What is a higher-order function?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "A function that takes another function as argument or returns a function", isCorrect: true },
            { label: "B", text: "A function with higher priority", isCorrect: false },
            { label: "C", text: "A function that runs at higher speed", isCorrect: false },
            { label: "D", text: "A function with complex logic", isCorrect: false }
        ]
    },
    {
        question: "What is the event loop in JavaScript?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "A loop that handles events", isCorrect: false },
            { label: "B", text: "The mechanism that handles asynchronous callbacks", isCorrect: true },
            { label: "C", text: "A way to loop through events", isCorrect: false },
            { label: "D", text: "An event handling system", isCorrect: false }
        ]
    },
    {
        question: "What is memoization?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "Memorizing code", isCorrect: false },
            { label: "B", text: "A type of memory allocation", isCorrect: false },
            { label: "C", text: "Caching function results to improve performance", isCorrect: true },
            { label: "D", text: "Creating memory leaks", isCorrect: false }
        ]
    },
    {
        question: "What are template literals?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Strings that allow embedded expressions and multi-line strings", isCorrect: true },
            { label: "B", text: "HTML templates", isCorrect: false },
            { label: "C", text: "String templates for formatting", isCorrect: false },
            { label: "D", text: "Literal template strings", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `localStorage`?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To store data temporarily", isCorrect: false },
            { label: "B", text: "To store data persistently in the browser", isCorrect: true },
            { label: "C", text: "To manage local variables", isCorrect: false },
            { label: "D", text: "To create local databases", isCorrect: false }
        ]
    },
    {
        question: "What is currying in JavaScript?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "A cooking technique", isCorrect: false },
            { label: "B", text: "A way to curry functions", isCorrect: false },
            { label: "C", text: "Transforming a function to take multiple arguments one at a time", isCorrect: true },
            { label: "D", text: "A type of function decoration", isCorrect: false }
        ]
    },
    {
        question: "What is the difference between `==` and `===`?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "== performs type coercion, === does not", isCorrect: true },
            { label: "B", text: "=== is faster than ==", isCorrect: false },
            { label: "C", text: "== is stricter than ===", isCorrect: false },
            { label: "D", text: "No difference", isCorrect: false }
        ]
    },
    {
        question: "What is a pure function?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "A function with no side effects", isCorrect: false },
            { label: "B", text: "A function that always returns same output for same input and has no side effects", isCorrect: true },
            { label: "C", text: "A clean function", isCorrect: false },
            { label: "D", text: "A function that purifies data", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `fetch` API?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To fetch local files", isCorrect: false },
            { label: "B", text: "To get data from APIs", isCorrect: false },
            { label: "C", text: "To make HTTP requests", isCorrect: true },
            { label: "D", text: "To retrieve user data", isCorrect: false }
        ]
    },
    {
        question: "What are arrow functions?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Shorter function syntax", isCorrect: false },
            { label: "B", text: "Functions with lexical this", isCorrect: false },
            { label: "C", text: "Functions without own this, arguments, super, or new.target", isCorrect: false },
            { label: "D", text: "All of the above", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of `JSON.parse()`?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To convert JSON string to JavaScript object", isCorrect: true },
            { label: "B", text: "To parse JavaScript code", isCorrect: false },
            { label: "C", text: "To analyze JSON data", isCorrect: false },
            { label: "D", text: "To convert object to JSON", isCorrect: false }
        ]
    },
    {
        question: "What is event delegation?",
        topic: "javascript",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "Delegating events to other elements", isCorrect: false },
            { label: "B", text: "Using event bubbling to handle events at a parent level", isCorrect: true },
            { label: "C", text: "Assigning events to delegates", isCorrect: false },
            { label: "D", text: "A way to manage multiple events", isCorrect: false }
        ]
    },

    // Hard Questions (41–60)
    {
        question: "What is the prototype chain in JavaScript?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "The mechanism where objects inherit properties from other objects", isCorrect: true },
            { label: "B", text: "A chain of prototypes", isCorrect: false },
            { label: "C", text: "A way to link objects together", isCorrect: false },
            { label: "D", text: "A type of inheritance chain", isCorrect: false }
        ]
    },
    {
        question: "What is the difference between `null` and `undefined`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "null is assigned, undefined is not", isCorrect: false },
            { label: "B", text: "undefined means no value, null means empty value", isCorrect: false },
            { label: "C", text: "undefined is default value for uninitialized variables, null is intentional absence of value", isCorrect: true },
            { label: "D", text: "No difference", isCorrect: false }
        ]
    },
    {
        question: "What are generators in JavaScript?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "Functions that generate values", isCorrect: false },
            { label: "B", text: "Functions that can be paused and resumed, yielding multiple values", isCorrect: true },
            { label: "C", text: "Functions that generate other functions", isCorrect: false },
            { label: "D", text: "Functions that create iterators", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Symbol` in JavaScript?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To create unique identifiers", isCorrect: true },
            { label: "B", text: "To create symbolic links", isCorrect: false },
            { label: "C", text: "To represent special characters", isCorrect: false },
            { label: "D", text: "To create symbolic expressions", isCorrect: false }
        ]
    },
    {
        question: "What are Web Workers?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "Web developers", isCorrect: false },
            { label: "B", text: "Web services", isCorrect: false },
            { label: "C", text: "JavaScript running in background threads", isCorrect: true },
            { label: "D", text: "Web assembly workers", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Proxy` object?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To create proxy servers", isCorrect: false },
            { label: "B", text: "To create custom behavior for fundamental operations", isCorrect: true },
            { label: "C", text: "To proxy network requests", isCorrect: false },
            { label: "D", text: "To handle HTTP proxies", isCorrect: false }
        ]
    },
    {
        question: "What is the event bubbling and capturing?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Bubbling: events propagate inward, Capturing: outward", isCorrect: false },
            { label: "B", text: "Two ways to handle events", isCorrect: false },
            { label: "C", text: "Bubbling: events propagate outward, Capturing: inward", isCorrect: true },
            { label: "D", text: "Event propagation mechanisms", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `WeakMap` and `WeakSet`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To store weak references that don't prevent garbage collection", isCorrect: true },
            { label: "B", text: "Weaker versions of Map and Set", isCorrect: false },
            { label: "C", text: "To create weak data structures", isCorrect: false },
            { label: "D", text: "To handle memory weakly", isCorrect: false }
        ]
    },
    {
        question: "What is the difference between `setTimeout` and `setInterval`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "setTimeout runs once, setInterval runs repeatedly", isCorrect: true },
            { label: "B", text: "setInterval is faster", isCorrect: false },
            { label: "C", text: "setTimeout is for delays, setInterval for intervals", isCorrect: false },
            { label: "D", text: "No difference", isCorrect: false }
        ]
    },
    {
        question: "What are JavaScript modules?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "Small pieces of code", isCorrect: false },
            { label: "B", text: "Reusable pieces of JavaScript code that export/import functionality", isCorrect: true },
            { label: "C", text: "Modular components", isCorrect: false },
            { label: "D", text: "A way to organize code", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Object.freeze()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To make an object immutable", isCorrect: true },
            { label: "B", text: "To freeze object execution", isCorrect: false },
            { label: "C", text: "To make objects colder", isCorrect: false },
            { label: "D", text: "To prevent object changes temporarily", isCorrect: false }
        ]
    },
    {
        question: "What is the difference between `forEach` and `map`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "forEach returns a new array, map doesn't", isCorrect: false },
            { label: "B", text: "map is faster than forEach", isCorrect: false },
            { label: "C", text: "map returns a new array, forEach returns undefined", isCorrect: true },
            { label: "D", text: "No difference", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `bind()` method?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To bind variables", isCorrect: false },
            { label: "B", text: "To create a new function with specific this value", isCorrect: true },
            { label: "C", text: "To bind events", isCorrect: false },
            { label: "D", text: "To connect functions", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Array.reduce()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To reduce array to a single value", isCorrect: true },
            { label: "B", text: "To reduce array size", isCorrect: false },
            { label: "C", text: "To minimize array elements", isCorrect: false },
            { label: "D", text: "To filter array elements", isCorrect: false }
        ]
    },
    {
        question: "What are getters and setters?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "Ways to get and set values", isCorrect: false },
            { label: "B", text: "Special methods for properties", isCorrect: false },
            { label: "C", text: "Methods that get or set object properties with custom logic", isCorrect: true },
            { label: "D", text: "Data access methods", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Promise.all()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To handle all promises", isCorrect: false },
            { label: "B", text: "To wait for all promises to resolve or any to reject", isCorrect: true },
            { label: "C", text: "To create multiple promises", isCorrect: false },
            { label: "D", text: "To manage promise collections", isCorrect: false }
        ]
    },
    {
        question: "What is the difference between `class` and `prototype`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "class is syntactic sugar over prototype-based inheritance", isCorrect: true },
            { label: "B", text: "prototype is newer than class", isCorrect: false },
            { label: "C", text: "class is for OOP, prototype for functional programming", isCorrect: false },
            { label: "D", text: "No difference", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Object.create()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To create new objects", isCorrect: false },
            { label: "B", text: "To duplicate objects", isCorrect: false },
            { label: "C", text: "To create objects with specified prototype", isCorrect: true },
            { label: "D", text: "To generate object templates", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Array.from()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To convert to array from anything", isCorrect: false },
            { label: "B", text: "To create arrays from array-like or iterable objects", isCorrect: true },
            { label: "C", text: "To generate arrays from numbers", isCorrect: false },
            { label: "D", text: "To convert arrays from other formats", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Reflect` API?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To provide methods for interceptable JavaScript operations", isCorrect: true },
            { label: "B", text: "To reflect object properties", isCorrect: false },
            { label: "C", text: "To create reflective surfaces", isCorrect: false },
            { label: "D", text: "To handle light reflection", isCorrect: false }
        ]
    },

    // Very Hard Questions (61–80)
    {
        question: "What is the purpose of `BigInt` in JavaScript?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To create big integers", isCorrect: false },
            { label: "B", text: "To represent integers larger than 2^53 - 1", isCorrect: true },
            { label: "C", text: "To handle large numbers", isCorrect: false },
            { label: "D", text: "To create big numbers", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Object.defineProperty()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To define object properties", isCorrect: false },
            { label: "B", text: "To create property definitions", isCorrect: false },
            { label: "C", text: "To define or modify properties with descriptors", isCorrect: true },
            { label: "D", text: "To set property values", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `async generators`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To create generators that yield promises", isCorrect: true },
            { label: "B", text: "To generate async functions", isCorrect: false },
            { label: "C", text: "To create asynchronous iterators", isCorrect: false },
            { label: "D", text: "To generate async code", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `FinalizationRegistry`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To finalize objects", isCorrect: false },
            { label: "B", text: "To request cleanup when objects are garbage collected", isCorrect: true },
            { label: "C", text: "To register final objects", isCorrect: false },
            { label: "D", text: "To create final registries", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `WebAssembly` in JavaScript?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To assemble web pages", isCorrect: false },
            { label: "B", text: "To create web assembly", isCorrect: false },
            { label: "C", text: "To run high-performance code in the browser", isCorrect: true },
            { label: "D", text: "To assemble JavaScript code", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Atomics` object?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To provide atomic operations for SharedArrayBuffer", isCorrect: true },
            { label: "B", text: "To handle atomic physics", isCorrect: false },
            { label: "C", text: "To create atomic variables", isCorrect: false },
            { label: "D", text: "To manage atomic operations", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `globalThis`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To access global scope", isCorrect: false },
            { label: "B", text: "To access global object consistently across environments", isCorrect: true },
            { label: "C", text: "To create global variables", isCorrect: false },
            { label: "D", text: "To reference this globally", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Object.getOwnPropertyDescriptors()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To get property descriptions", isCorrect: false },
            { label: "B", text: "To describe own properties", isCorrect: false },
            { label: "C", text: "To get all own property descriptors of an object", isCorrect: true },
            { label: "D", text: "To list property descriptors", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `String.raw()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To get raw string form of template literals", isCorrect: true },
            { label: "B", text: "To create raw strings", isCorrect: false },
            { label: "C", text: "To handle raw text", isCorrect: false },
            { label: "D", text: "To process string inputs", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Promise.any()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To handle any promise", isCorrect: false },
            { label: "B", text: "To wait for any promise to fulfill", isCorrect: true },
            { label: "C", text: "To catch any promise error", isCorrect: false },
            { label: "D", text: "To manage multiple promises", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Array.prototype.flat()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To flatten arrays completely", isCorrect: false },
            { label: "B", text: "To make arrays flat", isCorrect: false },
            { label: "C", text: "To flatten nested arrays to specified depth", isCorrect: true },
            { label: "D", text: "To remove array dimensions", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Optional Chaining (?.)`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To safely access nested properties without throwing errors", isCorrect: true },
            { label: "B", text: "To chain operations optionally", isCorrect: false },
            { label: "C", text: "To create optional chains", isCorrect: false },
            { label: "D", text: "To handle optional properties", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Nullish Coalescing (??)`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To coalesce null values", isCorrect: false },
            { label: "B", text: "To provide default values only for null/undefined", isCorrect: true },
            { label: "C", text: "To handle null operations", isCorrect: false },
            { label: "D", text: "To combine null values", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Dynamic Import()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To import modules dynamically", isCorrect: false },
            { label: "B", text: "To load modules on demand", isCorrect: false },
            { label: "C", text: "To import modules asynchronously at runtime", isCorrect: true },
            { label: "D", text: "To create dynamic modules", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Object.hasOwn()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To check if object has property as own property (safer than hasOwnProperty)", isCorrect: true },
            { label: "B", text: "To check object ownership", isCorrect: false },
            { label: "C", text: "To determine if object has properties", isCorrect: false },
            { label: "D", text: "To verify object has own methods", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Array.prototype.at()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To access array elements", isCorrect: false },
            { label: "B", text: "To access array elements with negative indices", isCorrect: true },
            { label: "C", text: "To get array positions", isCorrect: false },
            { label: "D", text: "To find array elements", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Error Cause`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To create error causes", isCorrect: false },
            { label: "B", text: "To handle error origins", isCorrect: false },
            { label: "C", text: "To chain errors with cause property", isCorrect: true },
            { label: "D", text: "To determine error sources", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Top-level await`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To use await at top level of modules", isCorrect: true },
            { label: "B", text: "To await top level functions", isCorrect: false },
            { label: "C", text: "To handle top-level asynchronous operations", isCorrect: false },
            { label: "D", text: "To create top-level async code", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Private Class Fields`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To create private variables", isCorrect: false },
            { label: "B", text: "To create class fields that are private to the class", isCorrect: true },
            { label: "C", text: "To hide class fields", isCorrect: false },
            { label: "D", text: "To make fields inaccessible", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Static Class Fields`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To create static variables", isCorrect: false },
            { label: "B", text: "To make fields static", isCorrect: false },
            { label: "C", text: "To create class fields that belong to class, not instances", isCorrect: true },
            { label: "D", text: "To staticize class properties", isCorrect: false }
        ]
    },

    // Expert Questions (81–100)
    {
        question: "What is the purpose of `WeakRef`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To hold weak reference to an object without preventing GC", isCorrect: true },
            { label: "B", text: "To create weak references", isCorrect: false },
            { label: "C", text: "To reference objects weakly", isCorrect: false },
            { label: "D", text: "To handle weak object references", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `RegExp Match Indices`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To get regex match positions", isCorrect: false },
            { label: "B", text: "To get start/end indices of regex matches", isCorrect: true },
            { label: "C", text: "To index regex matches", isCorrect: false },
            { label: "D", text: "To handle regex indices", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Array.prototype.findLast()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To find last element", isCorrect: false },
            { label: "B", text: "To search array from end", isCorrect: false },
            { label: "C", text: "To find last element that satisfies condition", isCorrect: true },
            { label: "D", text: "To get final array element", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Object.groupBy()`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To group objects by property values", isCorrect: true },
            { label: "B", text: "To create object groups", isCorrect: false },
            { label: "C", text: "To group by object types", isCorrect: false },
            { label: "D", text: "To organize objects into groups", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Temporal API`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To handle temporal data", isCorrect: false },
            { label: "B", text: "To provide modern date/time functionality", isCorrect: true },
            { label: "C", text: "To create temporal objects", isCorrect: false },
            { label: "D", text: "To manage time-based operations", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Decorators`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To decorate code", isCorrect: false },
            { label: "B", text: "To add decorative patterns", isCorrect: false },
            { label: "C", text: "To modify classes and properties at design time", isCorrect: true },
            { label: "D", text: "To create decorative functions", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Record and Tuple`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To create immutable data structures", isCorrect: true },
            { label: "B", text: "To record and tuple data", isCorrect: false },
            { label: "C", text: "To handle data records", isCorrect: false },
            { label: "D", text: "To create data tuples", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Pipeline Operator (|>)`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To create data pipelines", isCorrect: false },
            { label: "B", text: "To chain function calls in readable way", isCorrect: true },
            { label: "C", text: "To pipe data between functions", isCorrect: false },
            { label: "D", text: "To handle function pipelines", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `Pattern Matching`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To match patterns in strings", isCorrect: false },
            { label: "B", text: "To handle pattern recognition", isCorrect: false },
            { label: "C", text: "To destructure data based on patterns", isCorrect: true },
            { label: "D", text: "To create pattern-based logic", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of `throw expressions`?",
        topic: "javascript",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To throw errors as expressions (not just statements)", isCorrect: true },
            { label: "B", text: "To express throws", isCorrect: false },
            { label: "C", text: "To create throwable expressions", isCorrect: false },
            { label: "D", text: "To handle expression errors", isCorrect: false }
        ]
    }
];










