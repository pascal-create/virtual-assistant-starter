---
name: show-my-brain
description: Open the 3D globe of this brain in the browser (tools/3d-brain), or close it. Use when the user says "show my brain", "open my 3D brain", "brain globe", "see my brain", or "close my brain".
---

# Show my brain (3D)

The viewer lives in `tools/3d-brain/`. It is read-only and runs only on this computer (127.0.0.1). It never edits a note; the only file it writes is `tools/3d-brain/data/graph.json`.

## Open it
1. **Check Node.js:** run `node -v`. It must say v22 or higher.
   - Missing or older: stop and tell the user, in two lines: "The 3D view needs Node.js, a free program. Go to nodejs.org, download the LTS version, install it, then say 'show my brain' again." Don't install it yourself (it asks for the computer's password).
2. **Already running?** Check http://localhost:4640 (Mac: `curl -s -o /dev/null -w "%{http_code}" http://localhost:4640/`; Windows PowerShell: `(Invoke-WebRequest http://localhost:4640/ -UseBasicParsing).StatusCode`).
   - Yes: refresh it with the latest notes by opening http://localhost:4640/api/graph?rebuild=1 the same way, then go to step 4.
3. **Start it in the background** from this folder:
   - Mac: `nohup node tools/3d-brain/serve.mjs > tools/3d-brain/serve.log 2>&1 &`
   - Windows PowerShell: `Start-Process node -ArgumentList 'tools/3d-brain/serve.mjs' -WindowStyle Hidden`
   - Wait up to 10 seconds until http://localhost:4640 answers.
   - If it says "Port 4640 is occupied": another program uses that port. Never stop it. Change `"port"` in `tools/3d-brain/brain.config.json` to 4641 and start again (use the new port everywhere below).
4. **Open the browser:** Mac `open http://localhost:4640`, Windows `Start-Process http://localhost:4640`.
5. **Tell the user**, short: "Your brain is open in your browser. Drag to turn it, click a dot to read a note, and try Play history. Before a screenshot, turn off 'Show all labels': it shows real names."

## Name on the globe
If `brain.config.json` still says `"name": "My Brain"` and `context/about-me.md` has the user's first name, change it to "[First name]'s Brain" before starting.

## Close it
- Mac: `pkill -f "tools/3d-brain/serve.mjs"`
- Windows PowerShell: `Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -like '*3d-brain*serve.mjs*' } | ForEach-Object { Stop-Process -Id $_.ProcessId }`
Then say "Closed."

## If something's off
- A category shows a notice instead of dots: that folder is empty or missing. Normal on a new brain; it fills as the brain grows.
- "Claude memory" is empty: Claude hasn't saved a memory for this folder yet. It appears on its own later.
- Errors: read `tools/3d-brain/serve.log` (Mac) and explain in one plain sentence.
