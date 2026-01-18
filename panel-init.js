// Panel initialization script (external file due to CSP)
console.log('========== REP+ PANEL HTML LOADED ==========');
console.log('[rep+] panel-init.js executed - Panel HTML loaded!');

// Test if browser API is available
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
console.log('[rep+] browserAPI:', browserAPI ? 'FOUND' : 'NOT FOUND');

if (browserAPI && browserAPI.devtools) {
    console.log('[rep+] devtools API:', browserAPI.devtools ? 'AVAILABLE' : 'NOT AVAILABLE');
    if (browserAPI.devtools.network) {
        console.log('[rep+] devtools.network API:', 'AVAILABLE');
        console.log('[rep+] IMPORTANT: Make sure Network panel was opened first!');
    } else {
        console.log('[rep+] NOTE: devtools.network will be available after Network panel is opened');
    }
} else {
    console.log('[rep+] NOTE: devtools API may not be fully available yet');
}

// Update page content if elements exist
document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.querySelector('.status p:first-child');
    if (statusElement) {
        statusElement.textContent = '✅ Panel loaded! Check Browser Toolbox Console for logs.';
    }
    
    // Debug info
    window.repPlusDebug = {
        loaded: true,
        timestamp: Date.now(),
        browserAPI: !!browserAPI,
        devtools: !!(browserAPI && browserAPI.devtools),
        network: !!(browserAPI && browserAPI.devtools && browserAPI.devtools.network)
    };
    console.log('[rep+] Debug info:', window.repPlusDebug);
});
