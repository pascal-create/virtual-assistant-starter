---
name: process-brain
description: Files everything waiting in inbox/ (Grok "send to brain" notes and sync files, emails, transcripts, voice memo text, AI chats, documents) into the right place in this brain, and sorts documents the user drops or pastes into the chat. Updates context files, people, companies, meetings, decisions and today's daily note. Use when the user says "process my inbox", "process brain", "file this", "sort these documents", "update my brain", or drops files into inbox/ or the chat.
---

# Process my inbox

The inbox is the mail slot. Anyone can drop notes there: Grok bots, other AIs, the user. You are the only one who files them. Every note ends up on the right page, in the right format, linked to the right people.

## Where each kind of information goes

| What you find | Where it goes | Write it yourself? |
|---|---|---|
| A meeting or call (notes, transcript, recap) | `meetings/YYYY-MM-DD-short-slug.md`, from `templates/meeting.md` | Yes |
| A person: role, contact details, how they work, what they promised | `people/firstname-lastname.md`, from `templates/person.md` | Yes, only with real substance (see step 4) |
| An outside company: client, prospect, supplier, partner | `companies/company-slug.md`, from `templates/company.md` | Yes |
| A decision the user made | `decisions/log.md`, one dated line at the bottom | Yes, when the note clearly says the user decided it. Unclear? Ask. |
| How the user writes and talks, in their own words | `context/my-voice.md`, with a quote | Yes |
| What customers say: pains, objections, questions, in their words | `context/my-audience.md`, with a quote | Yes |
| A change of focus or a new top priority | `context/current-priorities.md` (update the date) | Yes |
| A new or changed goal | `context/goals.md` | No. Propose, wait for a yes. |
| A fact about the user or their business: price, offer, team, status, tool | `context/about-me.md` | No. Propose, wait for a yes. |
| A price list, a how-to, a process, a brand guide, an example of good work | `references/`, as a `.md` file | Yes |
| Work on a project | `projects/project-name/` | Yes, if that folder exists. Otherwise ask. |
| What happened today | `daily/YYYY-MM-DD.md`, from `templates/daily.md` | Yes |
| A password, a card or bank number, a government ID | Nowhere | Never copy it. Tell the user. |

## Steps

1. **Find the files.**
   - Look in `inbox/` and every subfolder: `emails/`, `transcripts/`, `voice-memos/`, `ai-chats/`, `other/`, and any new one.
   - Skip `_processed/`, every `README.md`, and run logs like `_sync-log.md` (leave them alone).
   - Also include any document the user attached or pasted in this chat.
   - **Duplicate folders.** Google Drive sometimes makes copies like `people (1)`, `inbox 2` or `daily copy`. Merge them into the real folder the way `nightly-brain` step 3 says.
   - Nothing to file? Say "Your inbox is empty. Nothing to file." and stop.

2. **Already filed?** Search `daily/`, `meetings/`, `people/` and `companies/` for the file name. If a page already cites it, or a meeting page already has its recording link or `recording_id`, just move it to `_processed/`.

3. **Read each file in full** before you write anything.
   - Audio or video: you can't read it. Leave it where it is and ask for the text (a transcript).
   - A `.gdoc` or `.gsheet` file is only a link on this computer. Read the real content through the Google Drive connector (search by file name, then read it). Save a plain `.md` copy next to it when you move it to `_processed/`. No connector? Leave it and tell the user how to connect it (Claude desktop app, Customize > Connectors, then a new chat).
   - A PDF or Word file you can't read: ask the user to paste the text.
   - AI chats: only the user's own messages show their voice. The AI's replies don't.
   - Transcripts with several people: the user's lines can feed `my-voice.md`, customers' lines can feed `my-audience.md`.
   - **"Send to brain" notes** (from Grok or another AI) have fixed sections: Summary, Decisions, Commitments, People and companies, Facts to update, Raw. Each section maps straight onto the table above. Sync files add a Contradictions section: treat each line as a contradiction (step 4).

4. **Sort and write.** One file can feed many pages.
   - Use the templates. Link every person and company by file name: `[[julie-martin]]`, `[[julie-martin|Julie]]`.
   - **Update before you create.** Search `people/` and `companies/` for the name, its aliases and the first name. Add a History line, update `last_contact`, add open commitments.
   - **Create a new page only with real substance:** a role, a commitment, or a second mention. A first name alone isn't enough.
   - **Quote, don't paraphrase,** when the exact words matter. Cite the source file in brackets: `[inbox/other/2026-11-19-1200-sync.md]`.
   - **Add, don't rewrite.** Don't rewrite a section that's already backed by evidence.
   - **Contradiction?** Something new disagrees with a page: add it with `CONTRADICTION:` and both sources. Don't overwrite. The user decides.
   - **Dates are absolute:** 2026-11-19, never "next Tuesday". Can't work out the date? `[GAP: date]`.
   - Thin or unclear? Write `[GAP: ...]`. Never invent.

5. **Documents about the user or their business** (a bio, an "about us", a price list, a ChatGPT profile, a brand guide): take them apart.
   - Facts about them or the business: proposals for `about-me.md` (step 6).
   - Their own writing: `my-voice.md`, with quotes.
   - Customer words (reviews, messages): `my-audience.md`, with quotes.
   - Named people with a role: `people/`.
   - Price lists, processes, brand rules: `references/`.
   - The original goes to `_processed/` (if it was in the inbox).

6. **Proposals for `about-me.md` and `goals.md`.** Collect them as a short list: what the file says now, what the new information says, the source. Show the list. Edit only after the user says yes. Unattended (the night shift): put the list under "Waiting for your OK" in today's daily note instead.

7. **Indexes.** Add each new page to its folder's `_index.md`: one line each, meetings newest first. Remove the "No ... yet" line when you add the first one.

8. **Daily note.** Add 1 to 3 lines under "What happened" in today's `daily/YYYY-MM-DD.md` (create it from the template if it doesn't exist).

9. **Move each filed item** to `inbox/_processed/`, with today's date in front: `2026-11-19_original-name.md`. Never delete.

10. **Report**, short and plain:

```
Filed: X files

Meetings: pages created, or "none"
People: created / updated, or "none"
Companies: created / updated, or "none"
Decisions logged: or "none"
Voice and audience: what changed, or "no changes"
Waiting for your yes: about-me or goals changes (list), or "none"

Gaps: what's thin or missing
Next: one suggestion (for example "no voice memos yet, a 2-minute one would help")
```

## Rules
- Dates: before you turn "Friday" or "next week" into a date, run `date '+%A %Y-%m-%d'` on its own (Windows: `Get-Date -Format 'dddd yyyy-MM-dd'`), then count forward one day at a time. Never guess a weekday. Use real times from `date`, never made-up ones.
- `context/about-me.md` wins on any fact. Never change it without a yes.
- Never invent a name, number, price, date, email or phone number.
- Never delete. Things only move: to `_processed/` or to `archives/`.
- Only create folders inside `projects/` (for a new project the user asked for) or `archives/`. Never anywhere else.
- The "Private" section of `about-me.md` never goes into any other page.
- Never copy a password, card or bank number, or government ID anywhere. If a file contains one, tell the user and suggest they delete that file themselves.
- No em dashes. Write in the user's language.
