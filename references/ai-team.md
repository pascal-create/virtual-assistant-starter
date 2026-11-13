# My AI team

Who does what across my AIs, and where each one is allowed to write.

## The rule: one filer
- Every AI writes to this brain **only inside `inbox/`**: plain `.md` files, in the subfolder that already exists, never a new folder, never touching anything outside `inbox/`.
- Grok bots may **read** the whole brain for context.
- **Claude is the only filer.** It files the inbox into people, companies, meetings, daily and context when I say "process my inbox", and every night if the night shift is on.
- Nothing goes out in my name (email, post, message, payment) without my yes.

## Claude (Claude Code in VS Code)
The office manager: sets up the brain, files, builds, remembers. Works only inside this folder.
- Night shift: not set up yet. How: `references/nightly-routine.md`.

## Grok bots
| Bot | Job | Writes to the brain |
|---|---|---|
| Not set up yet | Chief of Staff: my one point of contact. Routes work to the right bot, tracks it, sends my morning brief (time not set up yet). Doesn't do the specialist work itself. | "Send to brain" notes in `inbox/ai-chats/` and `inbox/voice-memos/`. Sync files in `inbox/other/` if the sync routine (prompt C9) is on. |

Instructions: `grok/my-chief-of-staff.md` (made by the setup). Prompts: `grok/my-prompts.md`.

## Next hires
When you hire a new bot (see `grok/prompts.md`, C5 and C8), add a row above: its name, its job, and whether it writes to the brain. Most specialists don't: they report to the Chief of Staff, and the Chief of Staff sends what matters to the brain.
