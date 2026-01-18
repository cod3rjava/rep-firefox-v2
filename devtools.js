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
        
        // Firefox: panels.create() signature (from MDN):
        // browser.devtools.panels.create(title, iconPath, pagePath)
        // Returns: Promise<ExtensionPanel>
        // All 3 parameters are required:
        //   - title: string
        //   - iconPath: string (can be empty string "" if no icon)
        //   - pagePath: string
        console.log('Calling panels.create with correct Firefox signature...');
        console.log('Parameters: title="Rep+", iconPath="", pagePath="panel.html"');
        
        // Try with empty string for icon (MDN says this is valid)
        browserAPI.devtools.panels.create(
            "Rep+",        // title: string (required)
            "",            // iconPath: string (empty string is valid per MDN)
            "panel.html"   // pagePath: string (required)
        ).then(function(panel) {
            console.log('STEP 3: ✅ Panel created successfully!');
            console.log('Panel object:', panel);
            console.log('Panel properties:', Object.keys(panel || {}));
            
            // Test panel events
            if (panel) {
                if (panel.onShown) {
                    panel.onShown.addListener(function(window) {
                        console.log('✅ Panel shown!');
                    });
                }
                
                if (panel.onHidden) {
                    panel.onHidden.addListener(function() {
                        console.log('Panel hidden');
                    });
                }
            }
        }).catch(function(error) {
            console.error('❌ ERROR creating panel:', error);
            console.error('Error message:', error.message);
            console.error('Error name:', error.name);
            console.error('Error stack:', error.stack);
        });
    }
} catch (e) {
    console.error('EXCEPTION in devtools.js:', e);
    console.error('Stack:', e.stack);
    alert('EXCEPTION: ' + e.message);
}
