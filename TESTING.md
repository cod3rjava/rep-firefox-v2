# Testing the Minimal Extension

## Step 1: Check Extension Status

1. Go to `about:debugging#/runtime/this-firefox`
2. Find "rep+ (minimal test)"
3. **Click "Inspect" button** - this opens the background script console
4. Check for any RED errors in that console

## Step 2: Enable Browser Toolbox

1. `about:config` → search `devtools.chrome.enabled` → set to `true`
2. Restart Firefox (important!)

## Step 3: Open Browser Toolbox

- Press `Ctrl+Shift+Alt+I` (or `Cmd+Opt+Shift+I` on Mac)
- A NEW WINDOW opens - this is Browser Toolbox
- Go to Console tab

## Step 4: Open DevTools

**CRITICAL:** `devtools.html` only loads when DevTools is OPEN!

1. Open any webpage (e.g., `https://example.com`)
2. **Press F12** to open DevTools
3. **IMMEDIATELY check Browser Toolbox Console**
4. You should see logs starting with `==========`

## What to Look For

### In Browser Toolbox Console (after opening DevTools):

```
========== devtools.html SCRIPT TAG EXECUTED ==========
========== devtools.html BODY SCRIPT EXECUTED ==========
========== STEP 1: devtools.js FILE EXECUTED ==========
STEP 2: All checks passed, creating panel...
STEP 3: Panel created successfully!
```

### In DevTools:

- Look for **"Rep+"** tab
- If it appears, click it
- Panel should show "Panel loaded successfully!"

## Troubleshooting

### No logs at all in Browser Toolbox?

1. **Is Browser Toolbox enabled?** (`devtools.chrome.enabled = true`)
2. **Did you restart Firefox?** (required after enabling)
3. **Did you open DevTools?** (F12 - devtools.html only loads when DevTools is open)
4. **Check "Inspect" console** in about:debugging for errors

### Extension shows errors in about:debugging?

- Click "Inspect" button
- Check console for errors
- Common issues:
  - Invalid manifest.json
  - Missing files
  - Syntax errors

### Panel doesn't appear?

- Check Browser Toolbox Console for errors
- Look for "ERROR creating panel" messages
- Check if panel.html file exists

## Next Steps

Once you see the logs and panel appears, we'll add network capture in Step 2.
