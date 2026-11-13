# Your 3D Brain

A 3D globe of your second brain: one dot per note, lines for the links between them. It runs only on your computer, reads your notes and never changes them.

**Open it:** in Claude Code, say **"show my brain"**. Claude starts it and opens it in your browser at http://localhost:4640.

**Needs:** Node.js 22 or newer (free, from nodejs.org, the LTS version). Nothing else to install: the 3D engine is already built in `dist/`.

**Use it:** drag to turn the globe, scroll to zoom, click a dot to read the note, press `/` to search. "Play history" replays your brain growing, note by note. "What's in here" > Rebuild picks up new notes.

**Before you share a screenshot or put it on a projector:** the labels show real names from your notes. Turn off "Show all labels" and check what's visible.

**Change what it shows:** edit `brain.config.json` (the categories, colours and folders), then Rebuild. `@claude-memory` means your Claude memory for this folder, found automatically.

**Stop it:** say "close my brain", or restart your computer.

Credit: based on Nate Herk's `3d-brain` from AIS-OS (MIT license, see `LICENSE`), adapted by Pascal DeGrâce (history replay, category slices). The MIT license above covers this folder's code. Third-party licenses: `THIRD-PARTY-NOTICES.txt`.
