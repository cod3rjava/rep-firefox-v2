const browserAPI = typeof browser !== "undefined" ? browser : chrome;
// Request Blocking State Management
export const blockingState = {
    blockRequests: false,
    blockedQueue: []
};

