// Browser API compatibility for Firefox
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
// Bulk Replay State Management
export const bulkReplayState = {
    positionConfigs: [],
    currentAttackType: 'sniper',
    shouldStopBulk: false,
    shouldPauseBulk: false
};

