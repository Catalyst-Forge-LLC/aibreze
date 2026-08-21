<p align="center">
  <img src="site/static/logo.svg" alt="aiBreze" width="128" />
</p>

# aiBreze

An installable writing rule set for AI agents.

Editorial rules for prose that says something instead of sounding like it.
AI-assisted or not. Written **aiBreze**. npm **`aibreze`**. A spray, not a
breeze.

Spray the prose, not the author. Earn the word.

**Docs:** [aibreze.com/docs](https://aibreze.com/docs) · **Site:** [aibreze.com](https://aibreze.com)

## Install

```bash
pnpm add -D aibreze
```

Copy `node_modules/aibreze/rules/cursor.mdc` to `.cursor/rules/aibreze.mdc`.
Keep a short overlay. Full wiring: [docs](https://aibreze.com/docs/install).

Or skip npm and [install the skill](https://aibreze.com/skill) as a folder.

## Not a humanizer

aiBreze does not determine whether a human or a model wrote something, and it
does not try to fool AI detectors. Same standard either way. If the prose
smells, spray it.

<!-- xfacts-nutrition-label -->

## Nutrition label

- **AppFacts:** [viewer](https://appfacts.dev/v#af1.eNp1kU1rAyEQhv_KMmeTpVePDRRa0l42t1LKrE6Mjaui4xYb8t-Lu6GQQ29-PO_H6AVmkA8CPE4EEtA-JvohEMA1tgNnx4SpgoDMyCU3RrGdG-KsIp8b9fp8WAl1BnkBh94UNO3mUCMNKtnIonvBGdc1CEjFs10y34Km7VdeDKqz3oCE3TCAgFPIfNu7UPTRYWq5EdUZDX1O6NFQAgnRxwmuAjTFDPL9Ah4kfCf0xlFqijuLTlN0oU7kGa5ihQ3x0TqKiXK-CXRQpTHINvhuDVs1HwLyrP6C7sq1OrfeHXrdkTbUqTDFsozStGOxTrd3-n-QRDFkyyHVZsccs-x7Y_lUxq0KU79DRlczb55CMrTZ73c92nH5uusvQqie3Q) · [raw](https://github.com/Catalyst-Forge-LLC/aibreze/blob/main/APP_FACTS.md)
- **SkillFacts:** [viewer](https://skillfacts.dev/v#sf1.eNq9VE1v2zgQ_SsD9dIYlu3mECzU0_Yji2DTIkCCvViBQUu0RUQiBZKy4Gbzu3rvL-vMUJLt2AHSHoogcTxfnHnz3jxGmyh5N460qGSUREItrfwmo3GUy40sTS0tWj8KL8qt83Bp7JqcG2mdMhpds8m7yQVanBe-cVQh82pDMaXKpHZU9MvVHX5_UDrHL1ljnbGxe1Blida6sbXhqM-58sYqUYJtSulgZSzUzbJUrhDLUkJtMe49uNqK7RhEg-H4ofM-KK6Fc9Aa-7AqTRvy_76K0aiclzm0Vnml1_SmNRuphc7w2cfImcbSf1Hhfe2S6XStfNEsJ5mppv3gMQ8eX19_nO4Q6t49hdDTOFLaedsgGEa7hZUiK_ixQuLYSaSNphJaemoYDaqqSyVztK0UTo-lZIVmTMypmjempDIraSX2jUDO78fRstF5KfOFsF6tEHjEf_4Y1cIXlEooTjNj5aTKd_gbTx0_jZ_FMZ6vCcxKoSp3KhIbkmsrnaNBvSxlJb3d7obNpcMFCEaE-sexClPJWqz30e_wJfgxx0pkB_Fi-xsLsqLFrDiOU810WzBGi468CaTM3lkapZron0CXmuqB_AkcbjbVz7IvKDuQH_OZ-6nuqJ8AMj_VhFIC-7xPdUd7qvKHeE999nAncALtVO_A3gW8CmucZ5BUkmqAoKlfrgIwaOoY-GNBhadIUQkQx-hrp6gEOkGRbaeoBEhQqX4uJ640v0_1kaLYEwNJIIEDSZEDICyXFXAc2YvqFaGDrE7EBlVxJ4OsdhPvyyrhIdZSSyt8N1aO_yVwPju_iGd_xeczsnURBmEukEqxaHyBU-HjGf5V3dhDnUWrqNN-m8xhRmeCQqHIZaNKv1huic-He8Mx-7S2bSdZ51yRj_lAvGSJpvoN3FJluKTSmDjwItX_A_7gB0byL1lGo0-9TEcj9D97uIv5L-iVI1iwveOWRcv2oNvecR3Uyx4UcG_-F1fCtn0lkzPVoy9iCyvps2IgcM57DdSDlTUV7EkNhAMBpcBecbPG-vdh1a1ykhnqoDRZfxGmkxGj8wZuwtWgb3_qanQPD_J-aRm3rHh0_JLkA7Y3vehPLpEbuNoTP7D4X2yE7gHaSR6h_NdwEtDW3YRgvhyuAnoI9OGxO7oOsLsOZH5L9c66gA_hSsBwJUIzN6hnrEVEOWrr4HRgEO8b9lz9rTjlG47DvpM7-cyn4SUs7vprcYDHp72DgY4wWajIQhz90-seSPcwZ1WyKO_fnr4BZ_DjO6KCRwCWW5gfLnGXdPoCnCG9o6efXsK6pA) · [raw](https://github.com/Catalyst-Forge-LLC/aibreze/blob/main/skills/aibreze/SKILL_FACTS.md)

## Development

```bash
pnpm install
pnpm test
pnpm site:dev
```

Site (FilePress + docs mount): `pnpm ship`. The maintainer publishes to npm.
Agents must not run `npm publish`.

## License

MIT. Copyright Catalyst Forge LLC.
