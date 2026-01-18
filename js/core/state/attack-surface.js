// Browser API compatibility for Firefox
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
// Attack Surface State Management
export const attackSurfaceState = {
    attackSurfaceCategories: {}, // { requestIndex: { category, confidence, reasoning, icon } }
    domainsWithAttackSurface: new Set(), // Track which domains have been analyzed
    isAnalyzingAttackSurface: false
};

