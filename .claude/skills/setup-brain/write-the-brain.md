# Build the brain (after "I'm done")

Run this when the user says "I'm done" at the end of the interview, or says yes to "Finish now and mark the rest as gaps?". It's safe to run again: it overwrites only the files listed here, never anything else.

## Before you start
1. Set `status: writing` in `setup/progress.md`.
2. Tell them in one line: "Building your brain now. It takes a few minutes."
3. Read `setup/answers.md` in full, and the formats in `templates/`.

## Rules for every pass
- **Facts come only from `setup/answers.md`**: their answers, their documents, their website, the calendar summary, the Gmail samples. Never invent a number, a name, a price, a date or a result.
- **Skipped or thin = a gap.** Write `[GAP: what's missing, in plain words]`, for example `[GAP: your prices per service, even rough ones]`. Never put a number, price or date inside a gap, not even as an example: Grok reads these files and could repeat it as real.
- **Their language.** Write in the `language` from `progress.md`.
- **Cite sources** the short way: `[setup Q4]`, `[doc: bio.pdf]`, `[web: address]`, `[calendar]`, `[gmail]`.
- **Fill, don't restructure.** Keep every heading. Replace the HTML comment under a heading with the content (or the gap). Remove the line `Status: NOT SET UP YET...` from each file you fill.
- **No em dashes, no emojis**, unless their answers say they like them.
- **Use your file tools** (Read, Write, Edit) to fill files, not Python or shell scripts. Scripts make Claude Code stop and ask them for permission, again and again.
- **The Private section** (Q12, and anything they called private) goes only into the "Private" section of `context/about-me.md`. Nowhere else.

## Pass A: the facts

| File | Section | From |
|---|---|---|
| `context/about-me.md` | Who I am | Q1 (name), Q2 (languages, with whom), where they live and work (Q3) |
| | My work | Q3, website, documents |
| | What I sell and to whom | Q4. Prices only if they gave them. |
| | My team | Q5. One line per person, linked: `[[luc-tremblay]]` |
| | Tools I use | Q6 |
| | What I want | Q7 in one or two lines, plus "Details: goals.md" |
| | How I work best | The parts of Q12 they said can be shared. If none: "See Private." |
| | How to help me | Q9 (what to hand off, hours a week) and Q10 (how to answer) |
| | Never do | Q11 |
| | Private (never used in anything written for someone else) | Q12, and anything they called private |
| `context/goals.md` | In 12 months | Q7, close to their words |
| | This quarter | Only goals they gave for the next 3 months. Otherwise a gap: `[GAP: 2 or 3 goals for the next 3 months, each with a date]` |
| | Milestones | Numbers and dates from Q7 or documents. Otherwise a gap. |
| `context/current-priorities.md` | Updated | Today's date, YYYY-MM-DD |
| | Top 3 | Q8, numbered, close to their words |
| | Where my time goes | Q9 with the hours, plus the calendar summary if there is one |
| | Parked | "Nothing parked yet." |
| `context/my-audience.md` | One real customer | Q13. No names. |
| | What they say (their words) | Q14, as quotes |
| | What makes them hesitate | Q15 |
| | What they want | Only what Q13 to Q15 or documents actually say. No guessing. |
| `context/how-to-work-with-me.md` | My preferences | Q10 and Q11 as short bullets. If they like emojis or dashes, say so here. Replace "Not set up yet..." |


Then:
- **People.** For each team member from Q5 with a name AND a role, create `people/firstname-lastname.md` from `templates/person.md` (`relationship: team`). Only a first name? Use `people/firstname.md` and write `[GAP: last name]`. No contact details unless they gave them. Set `company:` to the business name in plain text, not a link: their own business never gets a page in `companies/`. Under "Open commitments", write "None yet." with no checkbox, so the night shift doesn't count it as open. Add each one to `people/_index.md` under "Team".
- **`references/ai-team.md`.** In the Grok bots table, replace "Not set up yet" with the Chief of Staff's name (Q19), and "time not set up yet" with the brief time and time zone (Q20). Leave the night shift line as it is until the routine exists.
- **`index.md`.** Replace the line that starts with `**Whose brain:**` with `**Whose brain:** [Full name]. Set up on YYYY-MM-DD.`
- **`decisions/log.md`.** Append one line: `[YYYY-MM-DD] DECISION: Set up my AI brain | REASONING: [Q9 in a few of their words, for example "to hand off about 8 hours a week of quotes and invoices"] | CONTEXT: Setup interview. Files in context/, people/, grok/.`
- **Daily note.** Create `daily/YYYY-MM-DD.md` from `templates/daily.md`:
  - What happened: "Set up my AI brain." plus one line on what got filled.
  - Decisions: "Set up my AI brain."
  - Waiting for your OK: the 3 biggest gaps, one line each.
  - For tomorrow, exactly 3: (1) their first priority from Q8, (2) "Set up the Grok Chief of Staff: say 'copy my Grok instructions'", (3) fill the biggest gap (name it).
  - Add the day to `daily/_index.md`.
- **Indexes.** When you add the first line to an `_index.md`, remove its "No ... yet" line.

## Pass B: the voice (always last)
Write `context/my-voice.md` last, from their raw words only.
- Re-read only these parts of `answers.md`: Q16, Q17, Q18, `## Gmail samples`, and any word-for-word lines from other answers. Don't open the files you wrote in Pass A, and don't work from your own summary of them.
- **Every point needs a quote.** No quote, no point. Cite it: `[setup Q16]`, `[gmail]`.
- **Copy quotes exactly.** Every quote must appear word for word in `answers.md`. Remove names, phone numbers and addresses from samples.

| Section | What goes in it |
|---|---|
| Languages I write in | Q2, with whom |
| How I sound (with proof) | 3 to 5 observations, each with a short quote. Example: "Short sentences, straight to the point. Proof: 'We can start Tuesday at 8.' [setup Q18]" |
| Words I actually use | The phrases from Q17, plus phrases that repeat in Q16, Q18 and the Gmail samples |
| Words I'd never use | The second half of Q17 |
| How I write email | Only what Q18 and the Gmail samples show: length, structure, tone |
| How I open and close | Greetings and sign-offs seen in Q18 and the Gmail samples |
| Verbatim samples | An excerpt of Q16 (up to about 150 words, word for word), Q18 with private details removed, 2 or 3 Gmail quotes |

Too little to work with? Write `[GAP: paste 2 or 3 emails you sent, or say "read my last 20 sent emails" once Gmail is connected]`.

## Pass C: the Grok files
Copy `grok/chief-of-staff.template.md` to `grok/my-chief-of-staff.md`, and `grok/prompts.md` to `grok/my-prompts.md`. Never edit the template files themselves. In the copies, replace every placeholder. Placeholders are a name in capitals between double curly braces, like BOT_NAME:

| Placeholder | Value |
|---|---|
| `BOT_NAME` | Q19. Skipped: "Chief of Staff" |
| `FIRST_NAME` | Q1, what to call them |
| `FULL_NAME` | Q1, full name |
| `BUSINESS_SUMMARY` | 1 or 2 sentences from Q3 and Q4, in the first person ("I run..."). No prices. |
| `TOP_GOAL` | Q7 in one short line |
| `GOOGLE_ACCOUNT` | `google_account` from `progress.md` |
| `BRAIN_DRIVE_PATH` | `brain_drive_path` from `progress.md`, for example `My Drive > virtual-assistant` |
| `LANGUAGES` | Q2 in a few words, for example "English and French" |
| `WORK_RULES` | 3 to 5 lines starting with "- ", from Q10 and the defaults in `how-to-work-with-me.md` (include their emoji and dash preference) |
| `NEVER_DO` | Q11 as lines starting with "- ". Skipped: "- Nothing beyond the safety rules above." |
| `BRIEF_TIME` | Q20 time, for example "7:00 AM" |
| `TIMEZONE` | Q20 time zone in plain words plus the standard name, for example "Atlantic time (America/Halifax)" |

- In the copies, replace everything above `=== PASTE START ===` (or, in `my-prompts.md`, the title and the first "How to use" bullet) with one line: "Filled in by the setup on YYYY-MM-DD. Say 'copy my Grok instructions' (or 'copy Grok prompt C3') in Claude Code." Title the files `# My Chief of Staff instructions` and `# My Grok prompts`.
- A value is missing (skipped, unknown)? Write a plain bracket they can fill, like `[your brief time]`, and list it in the final summary.
- **Never** put Q12 or anything from the Private section in a Grok file.
- Check: `grep -nE '[{]{2}' grok/my-chief-of-staff.md grok/my-prompts.md` must return nothing (no placeholder left).
- Check: the text between `=== PASTE START ===` and `=== PASTE END ===` in `grok/my-chief-of-staff.md` stays under about 6,000 characters. Too long? Shorten WORK_RULES and BUSINESS_SUMMARY first.

## Memory
Save 3 or 4 short notes with your memory, the same way you would for "remember that...":
1. Who: "[Name] runs [business in a few words]. Full profile: context/about-me.md in this folder. It wins on any fact."
2. Where: "Brain folder: [absolute path] (Google Drive: [account], [Drive path]). Never move or rename it."
3. Language: "Answer [Name] in [language]. [Other languages] with [whom]."
4. Save phrase: "When [Name] says 'I'm done' or 'ingest that', run the save protocol in CLAUDE.md."

## Finish
1. Set `status: complete` and `updated` in `setup/progress.md`. Keep the `setup/` folder: it's how "continue my setup" and redoing a part work.
2. Send the final summary, short:
   - A table: File | What's in it (about-me, current-priorities, goals, my-voice, my-audience, how-to-work-with-me, people/, references/ai-team.md, grok/my-chief-of-staff.md, grok/my-prompts.md, the daily note, decisions/log.md).
   - "Hours a week you said you'd hand off: X" (or "You didn't give a number. Tell me any time.").
   - The gaps, max 6, one line each with how to fill them.
   - Then exactly these two lines:

"Start a new chat (the + at the top of this panel) and ask: What do you know about me? What are my top 3 priorities?"

"When you're ready for Grok, say 'copy my Grok instructions' and I'll put them on your clipboard."
