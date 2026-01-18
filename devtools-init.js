// Initialization script for devtools.html
// This must be in an external file due to CSP restrictions

console.log('========== devtools-init.js LOADED ==========');
console.log('Timestamp:', new Date().toISOString());

// Test browser API availability
console.log('typeof browser:', typeof browser);
console.log('typeof chrome:', typeof chrome);

// Load devtools.js will be handled by the script tag in HTML
