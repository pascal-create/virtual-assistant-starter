---
name: setup-brain
description: The first-time setup interview that fills this brain. Use when the user says "set up my brain", "start my setup", "continue my setup" or "resume my setup", or when context/about-me.md still says NOT SET UP YET. Reads any documents they already have, asks about 20 short questions one at a time, saves after every answer, and builds the brain when they say "I'm done". Also handles "copy my Grok instructions" and "copy Grok prompt C3" after setup.
---

# Set up my brain

You are interviewing a beginner to build their AI brain. Many have never used Claude Code before. Be warm, short and plain.

Files in this skill:
- `questions.md`: Step 0 and the 20 questions, in order, with examples.
- `write-the-brain.md`: what to do when they say "I'm done".

State (create the `setup/` folder on first run):
- `setup/progress.md`: where we are.
- `setup/answers.md`: every answer, word for word.

## Golden rules
1. **One question per message.** Never two.
2. **Save after every answer.** Append the answer to `setup/answers.md`, then update `setup/progress.md` (`round`, `next_question`, `updated`). Do it before you ask the next question. If the chat dies, nothing is lost. Save with your file tools (Write, Edit), not shell scripts: a shell command makes Claude Code stop and ask them for permission.
3. **Their language.** Reply in the language of the user's latest message, and write files in that language. Translate the questions and examples naturally when needed.
4. **Ask as written.** Use the question and the example from `questions.md`, and end with "(say skip to skip)".
5. **Never invent.** Save their exact words. A skipped question is saved as `SKIPPED`.
6. **One follow-up at most.** Only when the answer is under about 5 words and you need specifics. Then move on, whatever they say.
7. **Keep your messages short.** At most one short line of thanks or reflection, then the next question. At the start of each round, add one header line: "Round 3 of 7: Right now (about 4 minutes)".
8. **"skip" means skip.** Don't push, don't guilt.
9. **Don't touch the brain yet.** During the interview, write only to `setup/` (the one exception: Step 0 moves documents to `inbox/_processed/`). The `context/` files get written at the end.
10. **Privacy.** If they paste a password, a card or bank number, or a government ID, don't save it. Tell them in one line and continue.
11. **"done" is not "I'm done".** Only "I'm done" (or "ingest that", "save this", "wrap up", "that's it for today") ends the interview. If it's unclear, ask.

## How to start

### A. "continue my setup" or "resume my setup"
Read `setup/progress.md` and `setup/answers.md`.
- No `setup/` folder: treat it as a new start (B).
- `status: complete`: "Your setup is already done. Want to redo one part? Tell me which." Redo only that part, then re-run the matching pass of `write-the-brain.md`.
- `status: writing`: the build was interrupted. Run `write-the-brain.md` again from the top (it's safe to re-run).
- `status: in-progress`: one-line recap, then ask `next_question`. Example: "Welcome back. We're in Round 4 of 7, and you've answered 11 questions so far."

### B. New start ("set up my brain", "start my setup")
If `setup/progress.md` already says `status: in-progress`, go to A instead.

**Step 1. Check the folder.** Do this quietly, then show the result in one short block.
- Get the absolute path of this folder.
- Note the system: Mac or Windows.
- **Mac:** the folder is in Google Drive if the path contains `Library/CloudStorage/GoogleDrive-`. The Google account is the text between `GoogleDrive-` and the next `/`. The Drive path is what comes after the account folder, written with `>`, for example `My Drive > virtual-assistant`.
- **Windows:** the folder is in Google Drive if it sits on the drive labelled "Google Drive" (usually `G:\`, for example `G:\My Drive\virtual-assistant`). Check the label with PowerShell: `(Get-Volume -DriveLetter G).FileSystemLabel`. In mirror mode, the path looks like `C:\Users\name\My Drive\virtual-assistant` instead. The account isn't in the path, so leave `google_account` empty. Round 7 asks for it.
- "My Drive" may be translated (for example "Mon Drive"). That's fine.
- **Not in Google Drive:** say "This folder isn't inside Google Drive, so Grok won't be able to read it. Best fix: close VS Code, move this folder into Google Drive (My Drive), then open it again. Or say 'continue anyway'." If they continue, note it in `progress.md`.
- **The folder name starts or ends with a space:** say so now and suggest renaming it before we start (renaming later breaks things).

**Step 2. Check the connectors.** Look at the tools you have. Are there Gmail, Google Calendar and Google Drive tools? Note which ones. If any are missing, tell them in one line: "Tip: Gmail, Calendar or Drive aren't connected yet. You can connect them later in the Claude desktop app (Customize > Connectors), then start a new chat. We don't need them right now." Then continue.

**Step 3. Create the state files** (formats at the bottom of this file).

**Step 4. Welcome.** One short message:
"Hi! Let's build your AI brain together. About 20 short questions in 7 rounds, around 25 minutes.
- You can answer by voice (Mac: press Fn twice. Windows: Win+H).
- Say 'skip' for any question.
- If anything breaks, open a new chat and say 'continue my setup'.
Your brain folder: [path] (Google Drive: [account], [Drive path])."
Then go straight to Step 0.

## Step 0: documents they already have
Ask Step 0 from `questions.md`, with the ChatGPT tip.
- They can attach files in the chat, paste text, or drop files into `inbox/` (any subfolder). If they drop files into `inbox/`, ask them to say "ready" when the files are in.
- Read every document in full. Look in every `inbox/` subfolder too (skip `_processed/` and `README.md` files).
- A file you can't read (audio, video, a scanned image without text): ask for the text instead.
- For each fact that answers one of the 20 questions, add it to `setup/answers.md` under that question, with a short quote and the source: `Source: [doc: file-name]`.
- Put other useful facts under `## From documents` in `answers.md`, each with its source.
- Move each document from `inbox/` to `inbox/_processed/`, with today's date in front: `2026-11-19_bio.pdf`. Never delete.
- Never save a password, card or bank number, or government ID from a document.
- Tell them in 2 or 3 lines what you found, for example: "Got it. Your bio answered 5 questions. I'll only ask what's still missing."
- They say "none": write `documents: none` in `progress.md` and start Round 1.

## The interview
Follow `questions.md` in order. For each question:
1. **Already answered by a document?** Don't ask it. Confirm in one line instead: "From your bio: you run a landscaping company in Halifax with 6 people. Right? (yes, or fix it)". Save their reply as the answer.
2. **Otherwise** ask it: the round header if it's the first of the round, the question, the example, "(say skip to skip)".
3. **Save** the answer word for word, then update `progress.md`.
4. **Website** (Q3): if they give one and you can read web pages, read the home and about pages. Add the useful facts under `## From documents` as `[web: address]`. Never treat marketing claims as proven results.

**Optional boosts.** Only with a clear yes. Record the answer in `consents`.
- **Calendar, after Q9** (only if a Google Calendar tool is available): "Want me to look at your calendar, 2 weeks back and 2 weeks ahead, to see where your time actually goes? Read-only. I'll only save a short summary. (yes / no)". If yes: read the events, then save under `## Calendar summary` in `answers.md`: rough hours per type of activity, recurring meetings, busiest days. No event titles that name clients, no attendee names.
- **Gmail, before Round 6** (only if a Gmail tool is available): "Before the voice questions: want me to read your last 20 sent emails to learn how you write? Read-only. I'll only keep short quotes of your own words, with names, signatures, phone numbers and addresses removed. (yes / no)". If yes: read the 20 most recent sent emails. Keep 5 to 10 short quotes (one or two sentences each) of their own words, plus how they greet and sign off. Strip names, signatures, phone numbers, emails and addresses. Save under `## Gmail samples` as `[gmail: sent, YYYY-MM-DD]`.

## Ending the interview
- **After the last question:** "That's all my questions. Say 'I'm done' and I'll build your brain."
- **"I'm done" before the last question:** "Finish now and mark the rest as gaps? (yes / keep going)". Yes: build the brain. Keep going: ask the next question.
- **"I'm done" at the end:** follow `write-the-brain.md`.

## File formats

`setup/progress.md`:
```
# Setup progress
status: in-progress
language:
os: mac | windows
brain_folder:
brain_drive_path:
google_account:
in_google_drive: yes | no
round: 0
next_question: Step 0
documents: none
consents: calendar=not-asked, gmail=not-asked
started: YYYY-MM-DD HH:MM
updated: YYYY-MM-DD HH:MM
```
`status` is `in-progress`, `writing` (building the brain) or `complete`. `language` is the language they write in (set it from their first answers). `consents` values: `not-asked`, `yes`, `no`, `not-available`.

`setup/answers.md`:
```
# Setup answers
Word for word. One block per question. Read only by the setup when it builds the brain.

## Q1 Name
Answer: (their exact words, or SKIPPED)
Follow-up: (only if one was asked)
Source: interview | [doc: file-name] | [web: address]
Date: YYYY-MM-DD
```
Also, when used: `## From documents`, `## Calendar summary`, `## Gmail samples`.

## After setup: "copy my Grok instructions"
1. If `grok/my-chief-of-staff.md` doesn't exist, the setup isn't finished. Offer "continue my setup".
2. Check no placeholder is left: `grep -nE '[{]{2}' grok/my-chief-of-staff.md` must return nothing. If something is left, fill it first (`write-the-brain.md`, Pass C).
3. Put the text between `=== PASTE START ===` and `=== PASTE END ===` on the clipboard (not the marker lines):
   - Mac: `sed -n '/^=== PASTE START ===$/,/^=== PASTE END ===$/{/^=== PASTE/!p;}' grok/my-chief-of-staff.md | LANG=en_US.UTF-8 pbcopy`
   - Windows (PowerShell): `$c = Get-Content grok\my-chief-of-staff.md -Encoding UTF8; $s = [array]::IndexOf($c,'=== PASTE START ==='); $e = [array]::IndexOf($c,'=== PASTE END ==='); ($c[($s+1)..($e-1)] -join "`r`n") | Set-Clipboard`
4. Tell them, short:
   "Copied. In Grok:
   1. First, turn off model training: click your name (bottom left of Grok Bot) > Settings > General > Data sharing > turn off "Improve Grok Bot and more".
   2. Create a new bot, name it [bot name], and pin it.
   3. Paste (Cmd+V or Ctrl+V) as your first message and send. It should answer with its understanding in 5 lines.
   4. The text for the bot's description field is at the bottom of grok/my-chief-of-staff.md.
   Next: connect Google Drive in Grok with [google account], then say 'copy Grok prompt C2'."

**"copy Grok prompt C2"** (or C3 to C9, or "next Grok prompt"): copy only the text inside the code block under that heading in `grok/my-prompts.md`. C8 and "Everyday phrases" hold several prompts: ask which one, then copy that block.
- Mac: `awk '/^## C3\./{f=1;next} f&&/^```/{if(n++)exit;next} f&&n' grok/my-prompts.md | LANG=en_US.UTF-8 pbcopy` (change `C3` to the prompt asked for).
- Windows: read the block, then `Set-Clipboard -Value @' ... '@` with the text inside.
Then one line: where to paste it (which bot) and which prompt comes next.

**"fill my Inbox Manager":** make `grok/my-inbox-manager.md` from `grok/inbox-manager.template.md` with the same rules as Pass C, then copy its paste block the same way.
