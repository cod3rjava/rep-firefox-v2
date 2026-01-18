// Minimal DevTools extension
console.log('========== STEP 1: devtools.js FILE EXECUTED ==========');

try {
    const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
    console.log('browserAPI:', browserAPI ? 'FOUND' : 'NOT FOUND');
    console.log('browserAPI.devtools:', browserAPI?.devtools);
    
    if (!browserAPI) {
        console.error('ERROR: No browser or chrome API found!');
        alert('ERROR: No browser API found!');
    } else if (!browserAPI.devtools) {
        console.error('ERROR: browserAPI.devtools not available');
        console.error('Available properties:', Object.keys(browserAPI));
        alert('ERROR: devtools API not available!');
    } else if (!browserAPI.devtools.panels) {
        console.error('ERROR: browserAPI.devtools.panels not available');
        console.error('Available devtools properties:', Object.keys(browserAPI.devtools));
        alert('ERROR: devtools.panels API not available!');
    } else {
        console.log('STEP 2: All checks passed, creating panel...');
        
        browserAPI.devtools.panels.create(
            "Rep+",
            null, // No icon for now
            "panel.html",
            function(panel) {
                if (browserAPI.runtime.lastError) {
                    const error = browserAPI.runtime.lastError.message;
                    console.error('ERROR creating panel:', error);
                    alert('ERROR creating panel: ' + error);
                } else {
                    console.log('STEP 3: Panel created successfully!');
                    console.log('Panel object:', panel);
                    
                    // Test panel events
                    if (panel.onShown) {
                        panel.onShown.addListener(function(window) {
                            console.log('Panel shown!');
                        });
                    }
                }
            }
        );
    }
} catch (e) {
    console.error('EXCEPTION in devtools.js:', e);
    console.error('Stack:', e.stack);
    alert('EXCEPTION: ' + e.message);
}
