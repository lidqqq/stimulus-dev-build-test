# Stimulus dev-build test

https://github.com/stimulusjs/stimulus/pull/202#issuecomment-520001308

## Run server

```bash
$ npx serve -l 3030 -n

# ┌───────────────────────────────────────────┐
# │                                           │
# │   Serving!                                │
# │                                           │
# │   - Local:   http://localhost:3030        │
# │                                           │
# └───────────────────────────────────────────┘
```

## Logs

```
# chronological order

# reccomened v2 version in #202, this works correctly
http://localhost:3030/b8cc8c4
# build hash: https://github.com/stimulusjs/dev-builds/releases/tag/b8cc8c4%2Fstimulus

# Last commit which works correctly
http://localhost:3030/2878422
# build hash: https://github.com/stimulusjs/dev-builds/releases/tag/2878422%2Fstimulus

# Doesn't work since this commit
http://localhost:3030/40366c8
# build hash: https://github.com/stimulusjs/dev-builds/releases/tag/40366c8%2Fstimulus

# Latest commit, it dosen't
http://localhost:3030/eb1d40c
# build hash: https://github.com/stimulusjs/dev-builds/releases/tag/eb1d40c%2Fstimulus
```
