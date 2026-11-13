# The night shift (nightly routine)

Every night, Claude files your inbox, updates people and companies, merges duplicate folders and writes tomorrow's daily note. Grok's notes get filed in the brain's format without you asking. You set it up once, in the Claude desktop app.

**Good to know:** your computer must be on and the Claude desktop app open at that time. If it was off or asleep, the routine catches up at the next start, or you can say "process my inbox" any time.

## Set it up (5 minutes)
1. Open the Claude desktop app.
2. Click **Code** (the </> button at the top left), then **Routines**, then **New routine**, then **Local**.
3. **Name:** Night shift
4. **Folder:** choose your `virtual-assistant` folder in Google Drive (the folder itself, not the folder above it).
5. **Schedule:** every night at 11:00 PM.
6. **Permission mode:** Auto, so it can work while you sleep. Never Bypass.
7. If you see an option like "Only on this computer", turn it on.
8. **Instructions:** paste the text below. Save.
9. **Test it once:** click Run now. Then open `daily/` and check today's note.

The exact menu names can change a little between versions of the app.

## Instructions to paste

```text
Run the nightly-brain skill (.claude/skills/nightly-brain/SKILL.md) in this folder. It uses the process-brain skill for the inbox.

This is an unattended run. Ask no questions and wait for no approval.
- Before noon means you are catching up on a missed night: file yesterday's date. Otherwise file today.
- If a meeting recorder is connected, pull new meetings from the last 3 days into meetings/. Skip ones already filed.
- File everything new in inbox/, including Grok's notes and sync files. Move each filed item to inbox/_processed/ with the date in front. Leave README.md files and run logs alone.
- Merge duplicate folders and pages (like "people (1)"). Update or create pages in people/ and companies/, and roll up open commitments.
- Write or add to daily/YYYY-MM-DD.md: what happened, decisions, waiting for my OK, max 3 things for tomorrow.

Never change context/about-me.md: list proposed changes under "Waiting for your OK". Never delete anything. Never send an email or a message, never write to any outside app, and never run git. No em dashes.

End with five lines: meetings filed, pages created or updated, commitments due, waiting for my OK, link to the daily note.
```

## After it runs
- Open the newest file in `daily/`. "Waiting for your OK" lists anything that needs your yes.
- To say yes, open Claude Code in VS Code and say, for example: "Yes to the about-me changes in today's daily note."
