// Browser API compatibility for Firefox
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
// Starring State Management
export const starringState = {
    starredPages: new Set(),
    starredDomains: new Set()
};

