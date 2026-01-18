# Rep+ Firefox Extension - Minimal Test

## Step 1: Load Extension

1. Open Firefox
2. Go to `about:debugging#/runtime/this-firefox`
3. Click **"Load Temporary Add-on"**
4. Select the `manifest.json` file from this folder

## Step 2: Enable Browser Toolbox (to see logs)

1. Type `about:config` in Firefox address bar
2. Search for: `devtools.chrome.enabled`
3. Set it to **`true`** (double-click)
4. Close `about:config`

## Step 3: Open Browser Toolbox

- Press **`Ctrl+Shift+Alt+I`** (Windows/Linux) or **`Cmd+Opt+Shift+I`** (Mac)
- OR: `Tools` → `Web Developer` → `Browser Toolbox`
- A new window opens - keep it open

## Step 4: Test Extension

1. **Open any webpage** (e.g., `https://example.com`)
2. **Open DevTools** (press **F12**)
3. **Look for "Rep+" tab** in DevTools
4. **Click "Rep+" tab**
5. **Check Browser Toolbox Console** - you should see:
   ```
   ========== STEP 1: devtools.js LOADED ==========
   STEP 2: Creating panel...
   STEP 3: Panel created successfully!
   ========== STEP 4: panel.html LOADED ==========
   ```

## What to Verify

✅ Extension loads without errors in `about:debugging`  
✅ "Rep+" tab appears in DevTools  
✅ Panel shows "Panel loaded successfully!" message  
✅ Logs appear in Browser Toolbox Console  

## If This Works

We'll move to Step 2: Add network capture functionality.

## Troubleshooting

- **No "Rep+" tab?** → Check `about:debugging` for errors
- **No logs in Browser Toolbox?** → Make sure `devtools.chrome.enabled = true`
- **Extension not loading?** → Check manifest.json for syntax errors
