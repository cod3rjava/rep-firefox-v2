# Force Push Instructions

## What We Did
✅ Used `git filter-branch` to remove the `rules/` directory from **all commits** in history
✅ Cleaned up backup refs and garbage collected
✅ All secrets are now removed from git history

## Next Step: Force Push

**IMPORTANT**: Since we rewrote history, you need to force push:

```bash
git push --force-with-lease origin main
```

### Why `--force-with-lease` instead of `--force`?
- `--force-with-lease` is safer - it will fail if someone else pushed to the remote
- `--force` is dangerous and can overwrite others' work

### If `--force-with-lease` fails:
If you get an error, you may need to:
1. Fetch first: `git fetch origin`
2. Then force push: `git push --force-with-lease origin main`

Or if you're the only one working on this branch:
```bash
git push --force origin main
```

## Verification
After pushing, verify by:
1. Going to GitHub repository
2. Checking that `rules/` directory doesn't exist in any commit
3. Push should succeed without secret scanning errors
