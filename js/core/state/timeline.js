// Browser API compatibility for Firefox
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
// Timeline Filter State Management
export const timelineState = {
    timelineFilterTimestamp: null,
    timelineFilterRequestIndex: null
};

