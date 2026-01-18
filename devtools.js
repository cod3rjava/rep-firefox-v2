// Minimal DevTools extension
console.log('========== STEP 1: devtools.js LOADED ==========');

const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
console.log('browserAPI:', browserAPI ? 'FOUND' : 'NOT FOUND');

if (!browserAPI || !browserAPI.devtools || !browserAPI.devtools.panels) {
    console.error('ERROR: devtools.panels API not available');
} else {
    console.log('STEP 2: Creating panel...');
    
    browserAPI.devtools.panels.create(
        "Rep+",
        null, // No icon for now
        "panel.html",
        function(panel) {
            if (browserAPI.runtime.lastError) {
                console.error('ERROR creating panel:', browserAPI.runtime.lastError.message);
            } else {
                console.log('STEP 3: Panel created successfully!');
                console.log('Panel object:', panel);
            }
        }
    );
}
