// Browser API compatibility for Firefox
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
// Request History State Management
export const historyState = {
    requestHistory: [],
    historyIndex: -1
};

