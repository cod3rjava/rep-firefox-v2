// Browser API compatibility for Firefox
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
// Undo/Redo State Management
export const undoRedoState = {
    undoStack: [],
    redoStack: []
};

