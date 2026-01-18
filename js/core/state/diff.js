// Browser API compatibility for Firefox
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
// Diff State Management
export const diffState = {
    regularRequestBaseline: null,
    currentResponse: null
};

