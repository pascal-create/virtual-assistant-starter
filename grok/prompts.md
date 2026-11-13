# Grok prompts

Several of these started from a Dan Martell video; these are SymplifyAI's versions.

**How to use them**
- The setup copies this file to `grok/my-prompts.md` and fills in the placeholders (the words in capitals between double curly braces): your name, your Chief of Staff's name, your brief time, your time zone and your brain's Drive path.
- Anything in [square brackets] is yours to fill in when you use the prompt.
- In Claude Code, say "copy Grok prompt C3" and it lands on your clipboard. Paste it into your Chief of Staff's chat.
- One prompt at a time. Run it once, check the result, then move on.
- C1 is your Chief of Staff's instructions: `grok/my-chief-of-staff.md` (say "copy my Grok instructions").

## The bot recipe: 6 parts

Every good bot prompt has the same 6 parts. It's the 4-part request you use with Claude, plus a schedule and guardrails.

1. **Name the job.** One bot, one job. "Hire an inbox manager."
2. **Connect it.** Say what it may read: your email, your calendar, your brain.
3. **Schedule it.** When it runs, in plain words: "every weekday at 6 AM".
4. **Shape the output.** How short, in what order, and what to leave out.
5. **Set guardrails.** Read-only, drafts only, never pay, ask before you submit, never guess.
6. **Let it ask.** "Ask me any questions before you start."

**Start in review mode.** Everything is a draft until the bot has learned how you work, like training wheels on a bike. They come off later, one job at a time, when the drafts barely need edits.

## C2. Remember me
**When:** right after you create your Chief of Staff and connect Google Drive in Grok.
```text
Hi {{BOT_NAME}}, I'm {{FIRST_NAME}}. I'm not technical, so keep it short. Everything about me is in my brain folder on Google Drive: {{BRAIN_DRIVE_PATH}}. Read index.md, then the context folder. Save the 10 most important facts to shared memory, then tell me in 5 lines who I am and my top 3 priorities. Ask me anything that's unclear.
```

## C3. Morning brief
**When:** day 1, once Google Calendar and Gmail are connected in Grok.
```text
Create a routine called Morning brief, every weekday at {{BRIEF_TIME}} {{TIMEZONE}}. Read my calendar and my brain ({{BRAIN_DRIVE_PATH}}: context/current-priorities.md and the newest note in daily/). Send me one short brief:
- today's meetings, who they're with, and what to prep
- conflicts or double bookings
- emails waiting on my reply
- my top 3 for today, from my brain
Flag it if admin is eating my mornings. On Mondays, add the whole week. Keep it under one page. Leave out newsletters, receipts and FYI mail. Ask me any questions first, then run it once now.
```

## C4. Make it pay for itself
**When:** day 1. Read-only, nothing gets changed.
```text
Look through my email for subscriptions, renewals and recurring payments. List what I could cancel, downgrade or renegotiate, with the yearly savings for each. Read-only: change nothing, cancel nothing. Draft (don't send) the emails I'd need, and send the list to my brain.
```

## C5. Hire an Inbox Manager
**When:** week 1, after your Chief of Staff has run well for a few days. For the full profile, say "fill my Inbox Manager" in Claude Code and paste it where it says.
```text
Hire an inbox manager and give it a fun name. Connect my Gmail. Every weekday at 6:00 AM {{TIMEZONE}}, sort new mail into the folders I already use (ask me what they are). Draft replies for anything that needs me, in my voice (read context/my-voice.md in my brain and my past sent emails). Never send, never delete. It reports to you; put what needs my decision in my morning brief.
Its full profile: [paste the profile]
Give it our safety rules and the brain rules. Then tell me its name, its routine and the rules it confirmed.
```

## C6. Bots talk to each other
**When:** week 1, once the Inbox Manager runs. Send it to your Chief of Staff.
```text
When something urgent comes in, the inbox manager flags it to you right away, and you propose a time on my calendar to handle it. Ask me before booking anything.
```

## C7. Friday learning loop
**When:** week 2, after the Inbox Manager has drafted for a week. Send it to your Chief of Staff for the Inbox Manager.
```text
Every Friday at 4:00 PM {{TIMEZONE}}, compare your drafts with what I actually sent: what I cut, how long my replies are, how I sign off. Send the learnings to my brain so my voice file gets better, and use them next week.
```
Claude files the learnings into `context/my-voice.md` with "process my inbox" or the night shift.

## C8. Next hires
**When:** when the first two bots run smoothly. Give one at a time to {{BOT_NAME}}. Each one follows the 6-part recipe.

**People: no new bot needed.** Your brain's `people/` folder already does this job. After you meet someone, tell {{BOT_NAME}}:
```text
Send to brain: I met [name, exact spelling], [role] at [company]. We talked about [topic]. Next step: [who does what by when].
```
Later, ask {{BOT_NAME}} "Who is [name]?" and it reads the person's page.

**Money check (read-only)**
```text
Hire a money assistant with read-only access to my accounting software and my email. Every weekday at 7:00 AM {{TIMEZONE}}, send me three lines: money in the bank, bills due this week, and anything that looks unusual. Read-only: never pay, move money or change anything. If a number is missing, say so instead of guessing. Ask me what you need before you start.
```

**Family organizer**
```text
Hire a family organizer connected to my personal calendar and email. Watch for school notes, appointments and kids' activities. Put each one on my calendar with the time, the place and what to bring, and remind me the evening before. Every Sunday at 6:00 PM {{TIMEZONE}}, send me the family's week in one short message. Fill in forms only when I ask, and show me before you submit anything. Ask me any questions first.
```

**Trip planner**
```text
Hire a trip planner. Ask me once about my travel preferences (seats, hotels, budget, food) and save them. When I give you a trip, compare the options and send me the best 3, with prices. When I pick one, prepare the booking and wait for my yes before you pay anything. Then add every detail to my calendar.
```

**Bottleneck finder**
```text
Hire a bottleneck finder with read-only access to [my sales tracker, spreadsheet or accounting]. Every Sunday evening, look at the path from first contact to paying customer. Find the one step where the most people drop off, show me the numbers, and suggest one small test for next week. If data is missing, tell me instead of guessing.
```

**Follow-up keeper**
```text
Hire a follow-up keeper with access to my email. Every weekday at 8:00 AM {{TIMEZONE}}, list the quotes with no reply after 3 days and the leads with no next step. Draft a short follow-up for each, in my voice (read context/my-voice.md in my brain). Never send. Never contact a customer without my yes.
```

**Team pulse**
```text
Hire a team pulse assistant that reads the meetings folder in my brain ({{BRAIN_DRIVE_PATH}} > meetings). Every Friday at 3:00 PM {{TIMEZONE}}, send me a short summary: the decisions made this week, open commitments by person, and anything that doesn't match my top 3 in context/current-priorities.md. Link the source of each point, and tell me what you couldn't read.
```

## C9. Second-brain sync
**When:** week 1. Your Chief of Staff sweeps your day into the brain twice a day, and Claude's night shift files it.
```text
Create a routine called Second-brain sync, weekdays at 12:00 PM and 5:00 PM {{TIMEZONE}}. Pull what's new from my email, my calendar and my bots' reports to you. Save ONE new file in {{BRAIN_DRIVE_PATH}} > inbox > other, named YYYY-MM-DD-HHMM-sync.md, with the sections People, Companies, Decisions, Commitments, Facts to update and Contradictions, and a source on every line. Inbox only, no new folders, plain .md. If nothing is new, save no file.
```

## Everyday phrases

**Send something to your brain**
```text
Send this to my brain: [paste or describe]. Use the send-to-brain format, save it in the right inbox subfolder, and tell me the file name.
```

**Check the safety rules**
```text
Repeat back your safety rules in 5 lines.
```

**Hire any bot** (the hiring prompt)
```text
Please create a new specialist bot for me.
Name: [a name, or pick a fun one]
Job: [the job] for {{FULL_NAME}}
Reports to: you, {{BOT_NAME}}. It sends its results to you, not to me, unless a step needs me personally (a sign-in, or an approval in my own words).
Its profile: [paste the profile, or describe the job with the 6-part recipe]
Then:
1. Tell it to read index.md and the context folder in my brain ({{BRAIN_DRIVE_PATH}}) first.
2. Give it our safety rules and the brain rules: it only writes send-to-brain notes into inbox, nothing else.
3. Send it its first brief and ask it to create its own routine with the schedule I gave.
4. Add it to your routing list.
5. Report back with its name, its routine and schedule, and the rules it confirmed.
```

Other phrases that work any time: "What's waiting on me?" and "New standing rule: [the rule]."
