// Browser API compatibility for Firefox
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
// Request State Management
export const requestState = {
    requests: [],
    selectedRequest: null
};

