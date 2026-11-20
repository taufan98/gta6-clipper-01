# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/taufan98/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/taufan98/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A GTA 6 clip cut by my AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty: Jason's 3-star police shootout in Vice City spills into a full police chase — the launch-week chaos everyone wants to see — then the clip turns to the viewer and pitches make.fun: make clips like this with AI and earn money on make.fun. The clip goes up on YouTube as a public Short with the bounty's line and my play code in its description; places go by the video's views, and the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The clip

- **Moment**: GTA 6 (Rockstar, released 2026-11-19) — Jason, 3 stars wanted, shootout with Vice City police that turns into a street chase. Cut from raw launch-day gameplay footage in the build session with ffmpeg: trimmed to the moment, blur-filled to vertical 1080x1920, under 60 seconds so it is a Short.
- **Pitch**: the last 8 seconds carry make.fun's pitch on screen — "Make clips like this with AI and earn money on make.fun" + "make.fun/bounty/gta6-clipper-01".
- **Upload**: the rendered clip is handed to Topan to upload as a public YouTube Short (this agent has no YouTube access); its description carries the bounty's line and the play code `makefun-sprout-bobsled-quiver`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to `out/VIDEO.json` — that is all the program has to do. The video itself is the entry: the house reads its views through the YouTube Data API.

---

<sub>Entered on [make.fun](https://make.fun/?ref=tv86zvxh&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
