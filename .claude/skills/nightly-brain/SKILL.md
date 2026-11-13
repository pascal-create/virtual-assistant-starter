---
name: nightly-brain
description: The night shift. Files the day's inbox, pulls new meetings if a meeting recorder is connected, updates people and company pages, merges duplicate folders and pages, rolls up open commitments, flags stale files and writes today's daily note with at most 3 things for tomorrow. Use when the user says "run the nightly", "run the night shift", "clean up my brain", "update my brain from today", or when it runs on a schedule (see references/nightly-routine.md).
---

# Night shift

Everything from the day gets filed, linked and cleaned, and the user wakes up to one daily note. It runs by hand ("run the nightly") or every night as a routine in the Claude desktop app (`references/nightly-routine.md`).

Page formats are in `templates/`. The filing rules are in `.claude/skills/process-brain/SKILL.md`.

**Which day:** if it's before noon, this is a catch-up for a missed night (the computer was off or asleep). File yesterday's date. Otherwise file today.

**Unattended runs** (the routine): ask no questions and wait for no approval. Anything that needs a yes goes under "Waiting for your OK" in the daily note.

## Steps

### 1. Pull new meetings (only if connected)
- If a meeting recorder is connected (for example Fireflies), list its meetings from the last 3 days. No recorder connected? Skip this step without comment.
- Skip any meeting already filed: its id is already in a `recording_id:` line under `meetings/`.
- A Grok bot may also save transcripts into `inbox/transcripts/`. If that meeting is already in `meetings/`, just move the file to `_processed/`. If not, file it like a recorder meeting.
- For each new meeting: read the summary and the full transcript, then write `meetings/YYYY-MM-DD-short-slug.md` from `templates/meeting.md`. Fill `source:` and `recording_id:`. Pull out decisions (what, who, why), commitments (who, what, by when, real dates), preferences (how people work and communicate) and key insights. Skip small talk.

### 2. File the inbox
Follow the `process-brain` steps for everything new in `inbox/`. Unattended: proposals for `about-me.md` or `goals.md`, and decisions you're not sure the user made, go under "Waiting for your OK".

### 3. Merge duplicates
- **Duplicate folders.** Google Drive sometimes makes copies of a folder, like `people (1)`, `people 2`, `inbox (1)` or `daily copy`. For each one:
  1. Move every file into the real folder.
  2. Same file name in both? Merge the two into the real file: keep every fact, mark disagreements with `CONTRADICTION:`.
  3. Move the emptied duplicate folder to `archives/duplicates-YYYY-MM-DD/`. Never delete it.
- **Duplicate pages.** The same person or company under two names (for example `Julie Martin.md` and `julie-martin.md`): keep the lowercase-with-dashes file name, move the content over, and leave the other file as one line: `Moved to [[julie-martin]]`.
- A page in `companies/` about the user's own business doesn't belong there: propose its facts for `about-me.md` instead.

### 4. Compound
For every page created or changed today:
1. **People and companies.** Find each person and outside company mentioned. Update their page: a History line, preferences, open commitments, `last_contact`. Create a missing page only with real substance: a role, a commitment or a second mention.
2. **Commitments.** Collect open `- [ ]` commitments across meetings, people and companies. Tick one only with proof that it's done (an email, a meeting, a file). List the overdue ones and those due in the next 3 days.
3. **Indexes.** Add new pages to their folder's `_index.md`, one line each, meetings newest first.
4. **Staleness.** Flag it if `context/current-priorities.md` is older than 30 days, if `context/goals.md` is from a past quarter, or if a page contradicts `context/about-me.md` (about-me wins: flag it, don't fix it).

### 5. Write the daily note
`daily/YYYY-MM-DD.md` from `templates/daily.md`. If it already exists (an "I'm done" save wrote it), add to it. Don't replace it.
- **What happened:** 3 to 5 lines, with links.
- **Decisions:** only real ones.
- **Waiting for your OK:** proposed about-me and goals changes, decisions to confirm, contradictions, anything you couldn't read.
- **For tomorrow:** 3 at most. Overdue commitments and anything about to become a dropped ball come first. Then the top priority from `context/current-priorities.md`.
- Add the day to `daily/_index.md`.

### 6. Report
By hand: 5 lines at most. Unattended: the daily note is the report, plus these 5 lines at the end of the run.
```
Meetings filed:
Pages created or updated:
Commitments due:
Waiting for your OK:
Daily note: daily/YYYY-MM-DD.md
```

## Rules
- Dates: before you turn "Friday" or "next week" into a date, run `date '+%A %Y-%m-%d'` on its own (Windows: `Get-Date -Format 'dddd yyyy-MM-dd'`), then count forward one day at a time. Never guess a weekday. Use real times from `date`, never made-up ones.
- Never change `context/about-me.md` in an unattended run. By hand, only after a yes.
- Never delete anything. Things move to `_processed/` or `archives/`.
- Never send an email or a message, never post, never pay, and never write to any outside app. This job reads from the outside and writes only inside this folder.
- Never run git.
- Never invent a number, date, name, email or phone number. Unsure? `[GAP: ...]`.
- The "Private" section of `about-me.md` never goes into people, company or meeting pages.
- No em dashes. Links use the file name: `[[julie-martin|Julie]]`.
