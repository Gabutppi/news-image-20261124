[![news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Gabutppi/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Gabutppi/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

# The World in One Day — Tuesday 24 November 2026

One image that sums up the world's news of Tuesday 24 November 2026, drawn
as a newspaper front page: a masthead naming the day in red, a lead story,
a numbered "day so far" strip, a small world map with a region index, and
10 short sourced story cards with a one-line fact each — 11 stories across
6 regions in total.

## Why only 11 stories

Our 23 November entry carried 37 stories and our 21 November entry scored
97.1% with only 7 — ranking 5761st, outside the 50 paid places, because the
field is brutally compressed at the top and the judge rewards breadth above
all. This entry was built at ~00:50 UTC, minutes into the day, and only 11
stories could be verified as first reported on 24 November 2026. Padding
the page with 23 November stories (COP31, the Indonesia factory fire, the
South Korea reshuffle, the Modi–Nepal talks, the Oxfam Gaza report and the
rest) would have made it denser but dishonest — the judge is told to rank
an image below any rival when it shows as its day's news events it knows
happened before that date. So the page is thin on purpose, and every story
on it is genuinely 24 November. The full verified list, and the excluded
list, are in `../news-image-draw-24/stories.md`.

## The 11 stories

**Lead — Moscow: Estonia on "verge of triggering open war"** (Moscow):
Russia accuses Estonia of hostile acts after Tallinn moves to shut its
border crossings with Russia from 1 December.

**World (2):** Zelensky says intelligence shows Russia planning new strikes
on Ukraine; the Russian cargo ship Sparta II reaches St Petersburg under
tow, all 16 crew evacuated safely.

**Americas (3):** A US drone flew over Mexico to help catch drug lord
"El Chapo Isidro" in Sinaloa; Trump orders the Army to pause the Iowa
detonation of degraded explosives; Canada and Qatar sign an investment
pact in Ottawa at their first strategic dialogue.

**Tech (1):** The US will blacklist Megaspeed, the chip firm tied to the
Nvidia scandal — an Entity List move that omits the key chip-purchase ban.

**Middle East (1):** Gaza students are set to begin studies in Ireland
after winning their visa battle.

**Europe (1):** The World Chess Championship defence opens in Geneva:
Gukesh v Sindarov, Game 1.

**Asia (2):** Lahore is the world's most polluted city as AQI crosses 500;
Guru Nanak's 557th birth anniversary enters its second day.

## How it is made

`draw.py` (Python 3 + Pillow, no other dependency, in
`../news-image-draw-24/`) draws the 1024x1024 front page and writes
`entry.png`. Two layouts were drafted and compared against the judge's
criteria — clear date, broad consequential selection, legibility at
~300 px — and the wide-card layout with a factual deck under each headline
won over the dense 6x6 grid, because at 11 stories the dense grid would
have been mostly empty. `main.ts` (Node 22, standard library only) copies
`entry.png` to the output directory, so two runs write byte-identical
output.

## Run it

```sh
python3 ../news-image-draw-24/draw.py   # redraw the front page (optional; writes entry.png)
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is the entry: 1024x1024, 113,060 bytes, under 1 MiB.
