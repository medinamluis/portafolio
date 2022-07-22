function greeting(msg : string) {
    console.log(msg);
}

// OK:  -- al JS is valid TS
greeting('Second test...');
// Error:
// greeting(123);

// 1. COMPILE with "tsc 01_hello.ts"
// 2. RUN with "node 01_hello[.js]"