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
        question: "What is Node.js primarily used for?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "Frontend development", isCorrect: false },
            { label: "B", text: "Server-side JavaScript runtime", isCorrect: true },
            { label: "C", text: "Database management", isCorrect: false },
            { label: "D", text: "Mobile app development", isCorrect: false }
        ]
    },
    {
        question: "Which of these is NOT a built-in module in Node.js?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "D",
        options: [
            { label: "A", text: "fs", isCorrect: false },
            { label: "B", text: "http", isCorrect: false },
            { label: "C", text: "path", isCorrect: false },
            { label: "D", text: "express", isCorrect: true }
        ]
    },
    {
        question: "How do you import a module in Node.js?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "require()", isCorrect: true },
            { label: "B", text: "import", isCorrect: false },
            { label: "C", text: "include()", isCorrect: false },
            { label: "D", text: "using()", isCorrect: false }
        ]
    },
    {
        question: "Which global object is available in all Node.js modules?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "globalThis", isCorrect: false },
            { label: "B", text: "window", isCorrect: false },
            { label: "C", text: "global", isCorrect: true },
            { label: "D", text: "root", isCorrect: false }
        ]
    },
    {
        question: "What does the fs module stand for?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "File Stream", isCorrect: false },
            { label: "B", text: "File System", isCorrect: true },
            { label: "C", text: "File Service", isCorrect: false },
            { label: "D", text: "File Storage", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to create a new directory in Node.js?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "fs.mkdir()", isCorrect: true },
            { label: "B", text: "fs.createDir()", isCorrect: false },
            { label: "C", text: "fs.newDir()", isCorrect: false },
            { label: "D", text: "fs.dir()", isCorrect: false }
        ]
    },
    {
        question: "What is the default port for a Node.js HTTP server?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "8080", isCorrect: false },
            { label: "B", text: "80", isCorrect: false },
            { label: "C", text: "No default port", isCorrect: true },
            { label: "D", text: "3000", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to read environment variables in Node.js?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "env.get()", isCorrect: false },
            { label: "B", text: "process.env", isCorrect: true },
            { label: "C", text: "system.env", isCorrect: false },
            { label: "D", text: "global.env", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the __dirname variable?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Directory name of the current module", isCorrect: true },
            { label: "B", text: "Name of the current file", isCorrect: false },
            { label: "C", text: "Path to the Node.js installation", isCorrect: false },
            { label: "D", text: "Name of the parent directory", isCorrect: false }
        ]
    },
    {
        question: "Which of these is a popular package manager for Node.js?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "D",
        options: [
            { label: "A", text: "pip", isCorrect: false },
            { label: "B", text: "composer", isCorrect: false },
            { label: "C", text: "gem", isCorrect: false },
            { label: "D", text: "npm", isCorrect: true }
        ]
    },
    {
        question: "What is the entry point file for a Node.js application?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "index.html", isCorrect: false },
            { label: "B", text: "index.js or main.js", isCorrect: true },
            { label: "C", text: "app.js", isCorrect: false },
            { label: "D", text: "server.js", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to execute a function after a delay?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "setInterval()", isCorrect: false },
            { label: "B", text: "setTimeout()", isCorrect: true },
            { label: "C", text: "delay()", isCorrect: false },
            { label: "D", text: "wait()", isCorrect: false }
        ]
    },
    {
        question: "What does the path module provide?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Utilities for working with file and directory paths", isCorrect: true },
            { label: "B", text: "Routing for web applications", isCorrect: false },
            { label: "C", text: "Pathfinding algorithms", isCorrect: false },
            { label: "D", text: "Network path utilities", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to parse JSON strings?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "JSON.parse()", isCorrect: true },
            { label: "B", text: "JSON.decode()", isCorrect: false },
            { label: "C", text: "JSON.toObject()", isCorrect: false },
            { label: "D", text: "JSON.read()", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the events module?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To handle DOM events", isCorrect: false },
            { label: "B", text: "To manage system events", isCorrect: false },
            { label: "C", text: "To handle and create custom events", isCorrect: true },
            { label: "D", text: "To log application events", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to write to the console?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "console.log()", isCorrect: true },
            { label: "B", text: "print()", isCorrect: false },
            { label: "C", text: "log()", isCorrect: false },
            { label: "D", text: "write()", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the os module?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To handle operating system commands", isCorrect: false },
            { label: "B", text: "To provide operating system-related utility methods", isCorrect: true },
            { label: "C", text: "To manage operating system processes", isCorrect: false },
            { label: "D", text: "To interface with the operating system kernel", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to create an HTTP server?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "http.createServer()", isCorrect: true },
            { label: "B", text: "http.server()", isCorrect: false },
            { label: "C", text: "http.newServer()", isCorrect: false },
            { label: "D", text: "http.startServer()", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the url module?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To parse and format URL strings", isCorrect: true },
            { label: "B", text: "To handle URL routing", isCorrect: false },
            { label: "C", text: "To validate URLs", isCorrect: false },
            { label: "D", text: "To shorten URLs", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to read a file asynchronously?",
        topic: "nodejs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "fs.readFile()", isCorrect: true },
            { label: "B", text: "fs.readFileSync()", isCorrect: false },
            { label: "C", text: "fs.read()", isCorrect: false },
            { label: "D", text: "fs.readAsync()", isCorrect: false }
        ]
    },

    // Medium Questions (21–40)
    {
        question: "What is the event loop in Node.js?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "A loop that handles file I/O operations", isCorrect: false },
            { label: "B", text: "A loop that manages memory allocation", isCorrect: false },
            { label: "C", text: "A mechanism that handles asynchronous operations", isCorrect: true },
            { label: "D", text: "A loop that monitors CPU usage", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the buffer class?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To handle binary data", isCorrect: true },
            { label: "B", text: "To buffer network requests", isCorrect: false },
            { label: "C", text: "To manage memory buffers", isCorrect: false },
            { label: "D", text: "To handle stream buffering", isCorrect: false }
        ]
    },
    {
        question: "Which module is used to create child processes?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "process", isCorrect: false },
            { label: "B", text: "child_process", isCorrect: true },
            { label: "C", text: "spawn", isCorrect: false },
            { label: "D", text: "worker", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the stream module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To handle data streaming", isCorrect: true },
            { label: "B", text: "To create video streams", isCorrect: false },
            { label: "C", text: "To manage network streams", isCorrect: false },
            { label: "D", text: "To handle audio streams", isCorrect: false }
        ]
    },
    {
        question: "What is the difference between setImmediate() and setTimeout()?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "D",
        options: [
            { label: "A", text: "setImmediate() runs before setTimeout()", isCorrect: false },
            { label: "B", text: "setTimeout() is more accurate than setImmediate()", isCorrect: false },
            { label: "C", text: "setImmediate() runs in the current tick, setTimeout() in the next", isCorrect: true },
            { label: "D", text: "They are identical", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the cluster module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To create child processes that share server ports", isCorrect: true },
            { label: "B", text: "To manage database clusters", isCorrect: false },
            { label: "C", text: "To handle memory clustering", isCorrect: false },
            { label: "D", text: "To create server clusters", isCorrect: false }
        ]
    },
    {
        question: "What is the difference between process.nextTick() and setImmediate()?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "process.nextTick() runs after setImmediate()", isCorrect: false },
            { label: "B", text: "process.nextTick() runs before setImmediate()", isCorrect: true },
            { label: "C", text: "setImmediate() is faster than process.nextTick()", isCorrect: false },
            { label: "D", text: "They are identical", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the util module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To provide utility functions", isCorrect: true },
            { label: "B", text: "To handle utility classes", isCorrect: false },
            { label: "C", text: "To manage utility processes", isCorrect: false },
            { label: "D", text: "To create utility servers", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the crypto module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To provide cryptographic functionality", isCorrect: true },
            { label: "B", text: "To handle cryptocurrency", isCorrect: false },
            { label: "C", text: "To manage crypto assets", isCorrect: false },
            { label: "D", text: "To create crypto wallets", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the zlib module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To handle zip files", isCorrect: false },
            { label: "B", text: "To provide compression functionality", isCorrect: true },
            { label: "C", text: "To manage zlib archives", isCorrect: false },
            { label: "D", text: "To create compressed streams", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the readline module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To read lines from files", isCorrect: false },
            { label: "B", text: "To handle line-by-line input", isCorrect: true },
            { label: "C", text: "To create readline interfaces", isCorrect: false },
            { label: "D", text: "To manage readline streams", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the vm module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To compile and run code in a sandbox", isCorrect: true },
            { label: "B", text: "To create virtual machines", isCorrect: false },
            { label: "C", text: "To manage virtual memory", isCorrect: false },
            { label: "D", text: "To handle virtualization", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the dns module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To handle DNS queries", isCorrect: true },
            { label: "B", text: "To manage DNS servers", isCorrect: false },
            { label: "C", text: "To create DNS records", isCorrect: false },
            { label: "D", text: "To handle DNS caching", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the net module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To handle network operations", isCorrect: true },
            { label: "B", text: "To manage network interfaces", isCorrect: false },
            { label: "C", text: "To create network servers", isCorrect: false },
            { label: "D", text: "To handle network protocols", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the dgram module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To handle UDP datagrams", isCorrect: true },
            { label: "B", text: "To manage data grams", isCorrect: false },
            { label: "C", text: "To create datagram servers", isCorrect: false },
            { label: "D", text: "To handle datagram protocols", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the tls module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To handle TLS/SSL connections", isCorrect: true },
            { label: "B", text: "To manage TLS certificates", isCorrect: false },
            { label: "C", text: "To create TLS servers", isCorrect: false },
            { label: "D", text: "To handle TLS encryption", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the https module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To handle HTTPS requests", isCorrect: true },
            { label: "B", text: "To manage HTTPS certificates", isCorrect: false },
            { label: "C", text: "To create HTTPS servers", isCorrect: false },
            { label: "D", text: "To handle HTTPS encryption", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the punycode module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To convert Unicode to ASCII", isCorrect: true },
            { label: "B", text: "To handle punycode encoding", isCorrect: false },
            { label: "C", text: "To manage punycode decoding", isCorrect: false },
            { label: "D", text: "To create punycode converters", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the querystring module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To parse and format query strings", isCorrect: true },
            { label: "B", text: "To handle query string parameters", isCorrect: false },
            { label: "C", text: "To create query string objects", isCorrect: false },
            { label: "D", text: "To manage query string encoding", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the string_decoder module?",
        topic: "nodejs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To decode buffer objects to strings", isCorrect: true },
            { label: "B", text: "To handle string encoding", isCorrect: false },
            { label: "C", text: "To create string decoders", isCorrect: false },
            { label: "D", text: "To manage string decoding", isCorrect: false }
        ]
    },

    // Hard Questions (41–60)
    {
        question: "What is the purpose of the async_hooks module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To track asynchronous resources", isCorrect: true },
            { label: "B", text: "To handle async operations", isCorrect: false },
            { label: "C", text: "To create async hooks", isCorrect: false },
            { label: "D", text: "To manage async resources", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the perf_hooks module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To measure performance", isCorrect: true },
            { label: "B", text: "To handle performance metrics", isCorrect: false },
            { label: "C", text: "To create performance hooks", isCorrect: false },
            { label: "D", text: "To manage performance monitoring", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the trace_events module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To trace events", isCorrect: true },
            { label: "B", text: "To handle event tracing", isCorrect: false },
            { label: "C", text: "To create trace events", isCorrect: false },
            { label: "D", text: "To manage event traces", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the v8 module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To access V8 engine features", isCorrect: true },
            { label: "B", text: "To handle V8 engine", isCorrect: false },
            { label: "C", text: "To create V8 engine instances", isCorrect: false },
            { label: "D", text: "To manage V8 engine", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the worker_threads module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To create worker threads", isCorrect: true },
            { label: "B", text: "To handle worker threads", isCorrect: false },
            { label: "C", text: "To manage worker threads", isCorrect: false },
            { label: "D", text: "To run JavaScript in parallel", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the wasi module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To run WebAssembly System Interface", isCorrect: true },
            { label: "B", text: "To handle WebAssembly", isCorrect: false },
            { label: "C", text: "To create WebAssembly instances", isCorrect: false },
            { label: "D", text: "To manage WebAssembly modules", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the diagnostics_channel module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To provide diagnostics channel", isCorrect: true },
            { label: "B", text: "To handle diagnostics", isCorrect: false },
            { label: "C", text: "To create diagnostics channels", isCorrect: false },
            { label: "D", text: "To manage diagnostics", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the inspector module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To interact with V8 inspector", isCorrect: true },
            { label: "B", text: "To handle inspector", isCorrect: false },
            { label: "C", text: "To create inspector instances", isCorrect: false },
            { label: "D", text: "To manage inspector", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the repl module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To create REPL sessions", isCorrect: true },
            { label: "B", text: "To handle REPL", isCorrect: false },
            { label: "C", text: "To manage REPL", isCorrect: false },
            { label: "D", text: "To run REPL", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the module module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To interact with module system", isCorrect: true },
            { label: "B", text: "To handle modules", isCorrect: false },
            { label: "C", text: "To create modules", isCorrect: false },
            { label: "D", text: "To manage modules", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the timers module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To handle timers", isCorrect: true },
            { label: "B", text: "To manage timers", isCorrect: false },
            { label: "C", text: "To create timers", isCorrect: false },
            { label: "D", text: "To run timers", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the constants module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To provide constants", isCorrect: true },
            { label: "B", text: "To handle constants", isCorrect: false },
            { label: "C", text: "To create constants", isCorrect: false },
            { label: "D", text: "To manage constants", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the domain module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To handle domain errors", isCorrect: true },
            { label: "B", text: "To manage domains", isCorrect: false },
            { label: "C", text: "To create domains", isCorrect: false },
            { label: "D", text: "To run domains", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the assert module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To provide assertion testing", isCorrect: true },
            { label: "B", text: "To handle assertions", isCorrect: false },
            { label: "C", text: "To create assertions", isCorrect: false },
            { label: "D", text: "To manage assertions", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the console module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To provide console output", isCorrect: true },
            { label: "B", text: "To handle console", isCorrect: false },
            { label: "C", text: "To create console", isCorrect: false },
            { label: "D", text: "To manage console", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the process module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To interact with current process", isCorrect: true },
            { label: "B", text: "To handle process", isCorrect: false },
            { label: "C", text: "To create process", isCorrect: false },
            { label: "D", text: "To manage process", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the timers/promises module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To provide timer promises", isCorrect: true },
            { label: "B", text: "To handle timer promises", isCorrect: false },
            { label: "C", text: "To create timer promises", isCorrect: false },
            { label: "D", text: "To manage timer promises", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the stream/promises module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To provide stream promises", isCorrect: true },
            { label: "B", text: "To handle stream promises", isCorrect: false },
            { label: "C", text: "To create stream promises", isCorrect: false },
            { label: "D", text: "To manage stream promises", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the fs/promises module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To provide file system promises", isCorrect: true },
            { label: "B", text: "To handle file system promises", isCorrect: false },
            { label: "C", text: "To create file system promises", isCorrect: false },
            { label: "D", text: "To manage file system promises", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the dns/promises module?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To provide DNS promises", isCorrect: true },
            { label: "B", text: "To handle DNS promises", isCorrect: false },
            { label: "C", text: "To create DNS promises", isCorrect: false },
            { label: "D", text: "To manage DNS promises", isCorrect: false }
        ]
    },

    // Very Hard Questions (61–80)
    {
        question: "What is the purpose of the --inspect flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To inspect code", isCorrect: false },
            { label: "B", text: "To enable debugger", isCorrect: false },
            { label: "C", text: "To enable inspector", isCorrect: true },
            { label: "D", text: "To inspect memory", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --experimental-modules flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To enable ES modules", isCorrect: true },
            { label: "B", text: "To enable experimental modules", isCorrect: false },
            { label: "C", text: "To enable module experiments", isCorrect: false },
            { label: "D", text: "To enable experimental features", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --loader flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To specify a custom loader", isCorrect: true },
            { label: "B", text: "To load custom modules", isCorrect: false },
            { label: "C", text: "To load experimental features", isCorrect: false },
            { label: "D", text: "To load custom code", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --require flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To require a module", isCorrect: true },
            { label: "B", text: "To load a module", isCorrect: false },
            { label: "C", text: "To preload a module", isCorrect: false },
            { label: "D", text: "To import a module", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --trace-warnings flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To trace warnings", isCorrect: true },
            { label: "B", text: "To log warnings", isCorrect: false },
            { label: "C", text: "To track warnings", isCorrect: false },
            { label: "D", text: "To monitor warnings", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --trace-deprecation flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To trace deprecations", isCorrect: true },
            { label: "B", text: "To log deprecations", isCorrect: false },
            { label: "C", text: "To track deprecations", isCorrect: false },
            { label: "D", text: "To monitor deprecations", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --throw-deprecation flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To throw deprecations", isCorrect: true },
            { label: "B", text: "To error on deprecations", isCorrect: false },
            { label: "C", text: "To throw errors on deprecations", isCorrect: false },
            { label: "D", text: "To fail on deprecations", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --no-deprecation flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To silence deprecations", isCorrect: true },
            { label: "B", text: "To ignore deprecations", isCorrect: false },
            { label: "C", text: "To disable deprecations", isCorrect: false },
            { label: "D", text: "To hide deprecations", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --trace-sync-io flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To trace sync I/O", isCorrect: true },
            { label: "B", text: "To log sync I/O", isCorrect: false },
            { label: "C", text: "To track sync I/O", isCorrect: false },
            { label: "D", text: "To monitor sync I/O", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --trace-events-enabled flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To enable trace events", isCorrect: true },
            { label: "B", text: "To log trace events", isCorrect: false },
            { label: "C", text: "To track trace events", isCorrect: false },
            { label: "D", text: "To monitor trace events", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --trace-event-categories flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To specify trace event categories", isCorrect: true },
            { label: "B", text: "To set trace event categories", isCorrect: false },
            { label: "C", text: "To define trace event categories", isCorrect: false },
            { label: "D", text: "To create trace event categories", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --trace-event-file-pattern flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To specify trace event file pattern", isCorrect: true },
            { label: "B", text: "To set trace event file pattern", isCorrect: false },
            { label: "C", text: "To define trace event file pattern", isCorrect: false },
            { label: "D", text: "To create trace event file pattern", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --unhandled-rejections flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To handle unhandled rejections", isCorrect: true },
            { label: "B", text: "To set unhandled rejections", isCorrect: false },
            { label: "C", text: "To define unhandled rejections", isCorrect: false },
            { label: "D", text: "To create unhandled rejections", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --enable-source-maps flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To enable source maps", isCorrect: true },
            { label: "B", text: "To set source maps", isCorrect: false },
            { label: "C", text: "To define source maps", isCorrect: false },
            { label: "D", text: "To create source maps", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --experimental-vm-modules flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To enable experimental VM modules", isCorrect: true },
            { label: "B", text: "To set experimental VM modules", isCorrect: false },
            { label: "C", text: "To define experimental VM modules", isCorrect: false },
            { label: "D", text: "To create experimental VM modules", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --experimental-wasm-modules flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To enable experimental WASM modules", isCorrect: true },
            { label: "B", text: "To set experimental WASM modules", isCorrect: false },
            { label: "C", text: "To define experimental WASM modules", isCorrect: false },
            { label: "D", text: "To create experimental WASM modules", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --experimental-worker flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To enable experimental worker", isCorrect: true },
            { label: "B", text: "To set experimental worker", isCorrect: false },
            { label: "C", text: "To define experimental worker", isCorrect: false },
            { label: "D", text: "To create experimental worker", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --experimental-policy flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To enable experimental policy", isCorrect: true },
            { label: "B", text: "To set experimental policy", isCorrect: false },
            { label: "C", text: "To define experimental policy", isCorrect: false },
            { label: "D", text: "To create experimental policy", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --experimental-specifier-resolution flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To enable experimental specifier resolution", isCorrect: true },
            { label: "B", text: "To set experimental specifier resolution", isCorrect: false },
            { label: "C", text: "To define experimental specifier resolution", isCorrect: false },
            { label: "D", text: "To create experimental specifier resolution", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the --experimental-top-level-await flag?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To enable experimental top-level await", isCorrect: true },
            { label: "B", text: "To set experimental top-level await", isCorrect: false },
            { label: "C", text: "To define experimental top-level await", isCorrect: false },
            { label: "D", text: "To create experimental top-level await", isCorrect: false }
        ]
    },

    // Expert Questions (81–100)
    {
        question: "What is the purpose of the NODE_OPTIONS environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To set Node.js options", isCorrect: true },
            { label: "B", text: "To pass options to Node.js", isCorrect: false },
            { label: "C", text: "To configure Node.js", isCorrect: false },
            { label: "D", text: "To define Node.js options", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_PATH environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To set Node.js path", isCorrect: true },
            { label: "B", text: "To define Node.js path", isCorrect: false },
            { label: "C", text: "To specify additional module paths", isCorrect: false },
            { label: "D", text: "To create Node.js path", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_DEBUG environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To enable debug output", isCorrect: true },
            { label: "B", text: "To set debug output", isCorrect: false },
            { label: "C", text: "To define debug output", isCorrect: false },
            { label: "D", text: "To create debug output", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_ENV environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To set Node.js environment", isCorrect: true },
            { label: "B", text: "To specify the environment", isCorrect: false },
            { label: "C", text: "To define the environment", isCorrect: false },
            { label: "D", text: "To create the environment", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_NO_WARNINGS environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To disable warnings", isCorrect: true },
            { label: "B", text: "To set no warnings", isCorrect: false },
            { label: "C", text: "To define no warnings", isCorrect: false },
            { label: "D", text: "To create no warnings", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_DISABLE_COLORS environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To disable colors", isCorrect: true },
            { label: "B", text: "To set no colors", isCorrect: false },
            { label: "C", text: "To define no colors", isCorrect: false },
            { label: "D", text: "To create no colors", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_EXTRA_CA_CERTS environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To add extra CA certificates", isCorrect: true },
            { label: "B", text: "To set extra CA certificates", isCorrect: false },
            { label: "C", text: "To define extra CA certificates", isCorrect: false },
            { label: "D", text: "To create extra CA certificates", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_REDIRECT_WARNINGS environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To redirect warnings", isCorrect: true },
            { label: "B", text: "To set redirect warnings", isCorrect: false },
            { label: "C", text: "To define redirect warnings", isCorrect: false },
            { label: "D", text: "To create redirect warnings", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_TLS_REJECT_UNAUTHORIZED environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To reject unauthorized TLS connections", isCorrect: true },
            { label: "B", text: "To set reject unauthorized", isCorrect: false },
            { label: "C", text: "To define reject unauthorized", isCorrect: false },
            { label: "D", text: "To create reject unauthorized", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_V8_COVERAGE environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To enable V8 coverage", isCorrect: true },
            { label: "B", text: "To set V8 coverage", isCorrect: false },
            { label: "C", text: "To define V8 coverage", isCorrect: false },
            { label: "D", text: "To create V8 coverage", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_ICU_DATA environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To set ICU data", isCorrect: true },
            { label: "B", text: "To define ICU data", isCorrect: false },
            { label: "C", text: "To specify ICU data path", isCorrect: false },
            { label: "D", text: "To create ICU data", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_REPL_HISTORY environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To set REPL history", isCorrect: true },
            { label: "B", text: "To define REPL history", isCorrect: false },
            { label: "C", text: "To specify REPL history file", isCorrect: false },
            { label: "D", text: "To create REPL history", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_REPL_EXTERNAL_MODULE environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To set REPL external module", isCorrect: true },
            { label: "B", text: "To define REPL external module", isCorrect: false },
            { label: "C", text: "To specify REPL external module", isCorrect: false },
            { label: "D", text: "To create REPL external module", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_REPL_MODE environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To set REPL mode", isCorrect: true },
            { label: "B", text: "To define REPL mode", isCorrect: false },
            { label: "C", text: "To specify REPL mode", isCorrect: false },
            { label: "D", text: "To create REPL mode", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_REPL_HISTORY_SIZE environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To set REPL history size", isCorrect: true },
            { label: "B", text: "To define REPL history size", isCorrect: false },
            { label: "C", text: "To specify REPL history size", isCorrect: false },
            { label: "D", text: "To create REPL history size", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_REPL_DISABLE_SAVE environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To disable REPL save", isCorrect: true },
            { label: "B", text: "To set REPL disable save", isCorrect: false },
            { label: "C", text: "To define REPL disable save", isCorrect: false },
            { label: "D", text: "To create REPL disable save", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_REPL_SKIP_NEW_LINE environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To skip REPL new line", isCorrect: true },
            { label: "B", text: "To set REPL skip new line", isCorrect: false },
            { label: "C", text: "To define REPL skip new line", isCorrect: false },
            { label: "D", text: "To create REPL skip new line", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_REPL_USE_STRICT environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To use strict mode in REPL", isCorrect: true },
            { label: "B", text: "To set REPL use strict", isCorrect: false },
            { label: "C", text: "To define REPL use strict", isCorrect: false },
            { label: "D", text: "To create REPL use strict", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_REPL_WORD_WRAP environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To enable word wrap in REPL", isCorrect: true },
            { label: "B", text: "To set REPL word wrap", isCorrect: false },
            { label: "C", text: "To define REPL word wrap", isCorrect: false },
            { label: "D", text: "To create REPL word wrap", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the NODE_REPL_HIGHLIGHT environment variable?",
        topic: "nodejs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To enable syntax highlighting in REPL", isCorrect: true },
            { label: "B", text: "To set REPL highlight", isCorrect: false },
            { label: "C", text: "To define REPL highlight", isCorrect: false },
            { label: "D", text: "To create REPL highlight", isCorrect: false }
        ]
    }
];










