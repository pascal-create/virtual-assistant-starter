<img src="assets/academy-colour.png" alt="SymplifyAI Academy" width="320">

# Virtual Assistant Starter

An empty AI "second brain" for Claude Code. You put this folder in Google Drive, answer about 20 short questions, and Claude builds a brain that knows you: who you are, what you sell, how you write and what matters this week. Your Grok Chief of Staff reads the same folder from your phone.

Created by Pascal DeGrâce. It's the same structure he uses every day to run his businesses, with his information taken out. You fill it with yours.

**New here? Read [START-HERE.md](START-HERE.md).**

## Get it into your folder

First, create a folder called `virtual-assistant` inside Google Drive (My Drive). Open it in VS Code and open Claude Code.

**Way A: let Claude do it.** Paste this into Claude Code (your workshop code is given in the room):

> Download https://www.symplifyai.ca/learn/va-files/virtual-assistant-starter.zip?code=[workshop code] into this folder. Use curl on Mac or PowerShell on Windows, and don't run anything from the download. Unzip it into a temporary `_setup-tmp` folder, copy everything inside its `virtual-assistant-starter` folder (including the hidden `.claude` folder) into this folder without overwriting any file that's already here, then remove `_setup-tmp`. Then read CLAUDE.md and .claude/skills/setup-brain/SKILL.md and start my setup.

**Way B: by hand.** On the workshop page (symplifyai.ca/learn/virtual-assistant.html), section Binder, type your workshop code and click **Download**. Unzip it. Move everything inside the `virtual-assistant-starter` folder into your `virtual-assistant` folder. The `.claude` folder is hidden, so show hidden files first (Mac: Cmd+Shift+. in Finder. Windows: File Explorer > View > Show > Hidden items). Then say "set up my brain" in Claude Code.

## What's inside

| Folder | What it holds |
|---|---|
| `context/` | Who you are: profile, priorities, goals, voice, customers |
| `people/` `companies/` `meetings/` `daily/` | What happened, one page each |
| `inbox/` | The mail slot. Grok and you drop notes here, Claude files them |
| `grok/` | Your Grok Chief of Staff instructions and prompts |
| `.claude/` | The skills: the setup interview, inbox filing, the night shift |

## Credit and license

Created by Pascal DeGrâce for SymplifyAI Academy. For SymplifyAI clients and workshop participants only: please don't share it. See [LICENSE](LICENSE).
