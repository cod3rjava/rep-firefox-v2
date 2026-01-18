// Browser API compatibility for Firefox
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
// Filter State Management
export const filterState = {
    currentFilter: 'all', // all, GET, POST, etc. (legacy, kept for compatibility)
    selectedMethods: new Set(), // Set of selected HTTP methods (e.g., ['GET', 'POST'])
    starFilterActive: false, // Whether star filter is active
    currentColorFilter: 'all', // all, red, green, blue, etc.
    currentSearchTerm: '',
    useRegex: false,
    hideDuplicates: localStorage.getItem('rep_hide_duplicates') === 'true' // Whether to hide duplicate requests (show only first occurrence)
};

