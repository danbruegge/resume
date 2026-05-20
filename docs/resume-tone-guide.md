# Resume Summary Tone Guide

Every `work[].summary` field in `resume.json` should follow this template. Highlights stay as bullet lists for team size, tools, devops, etc.

## Structure

One paragraph, **40–70 words**, hard cap **75**.

1. **Opener (one clause)**: names the project/platform. Mention the team/squad **only if it has a distinctive name** (e.g. *Website Journey Squad*, *Team Green*, *Performance Crew*, *Tracking Team*). Don't write "on a 4-person SCRUM team"; that data lives in highlights.
2. **Action body**: **3–4 parallel past-tense verbs**, joined by commas or one semicolon. Each verb names a concrete deliverable.
3. **Outcome anchors**: attach a short "to X" or "for Y" clause to **one or two** of the actions, not all of them.

## Split of concerns: summary vs highlights

To avoid duplication, structural team info has one home:

| Field | What lives here |
|-------|-----------------|
| Summary | Project/platform name, domain hint, team/squad **name** (if distinctive), duration (if notable), the *what you did* |
| Highlights | Team **size** + **methodology** on a single line, phrased as a noun phrase: `"SCRUM team of ~8 people"`, `"Agile team of ~15 people"`, or `"Team of ~5 people"` if there was no formal methodology. Tools, DevOps, anything else structural. |

If the team had a memorable name *and* a methodology label, append it in parens: `"Agile team of ~8 people (Website Journey Squad)"`.

## Voice

- **Implicit first-person.** No "I"; the verbs carry agency.
- **Past tense** for completed engagements ("Migrated…", "Built…").
- **Gerund opener** ("Contributing to…") for ongoing engagements, followed by a past-tense action body. This keeps the entry feeling current without making every verb a clunky gerund.
- **Tools stay in highlights**, not in the summary. Mention a tool inline only when the action *is* the tool migration (e.g. "from Contentful to Builder.io").

## Spelling

**American English.** `modernized`, `optimized`, `centered`, `organized`.

## Punctuation

**Avoid em-dashes (`—`)**. Em-dashes feel insertive and break the reading flow, especially when used for appositives describing the company or project. Pick one of these alternatives, in this order of preference:

1. **Commas**: default choice when the appositive is short (≤8 words).
   > Joined Webfleet, Bridgestone's fleet-management SaaS, for a year on Team Green.

2. **Parentheses**: use when the main sentence already has a comma-heavy structure (e.g. a long action-verb list follows) and adding more commas would create ambiguity.
   > Contributed to the Mediamarkt/Saturn shop system (the e-commerce platform for one of Europe's largest electronics retailers) across two squads.

3. **Split into two sentences**: use when the appositive is long enough (~12+ words) to stand on its own as context.
   > Contributing to Boehringer Ingelheim's sales-forecasting React application. The pharma-industry tool visualizes multi-year sales predictions produced by Python/Flask backend models.

4. **Restructure to tighten**: collapse the appositive into the main clause when possible.
   > Built CarNet, Volkswagen's connected-car web interface for vehicle owners, over 14 months on-site in Wolfsburg…

The same rule applies to the guide itself (this file). If you find an em-dash here, replace it.

## Verb bank

`migrated · modernized · rewrote · rebuilt · refactored · delivered · shipped · launched · implemented · integrated · established · set up · improved · optimized · reduced · led · mentored · owned`

## Anti-patterns (delete on sight)

- "The website is a modern and accessible website…": empty descriptor.
- "The main tasks were to…": bureaucratic; replace with action verbs.
- "All written code was covered with tests (unit, integration and e2e)": move to highlights or drop entirely.
- "with Accessibility in mind": vague hedge; either name what you fixed or omit.
- Naming the project/tool 3+ times in two sentences.
- Two-clause narratives joined by "I worked… I also adapted…": convert to parallel verb list.
- Em-dashes for appositives. See the Punctuation section above.

## Reference summaries (canonical examples)

**SumUp**, tightest example, ~50 words, ongoing engagement:

> Contributing to SumUp's multi-locale marketing website as part of the Website Journey Squad. Migrated the header navigation and shared layout from Contentful to Builder.io with Circuit UI parity, delivered accessibility improvements across menus, accordions and image rendering, and shipped a video hero for the homepage rebrand.

**Boehringer Ingelheim**, ongoing engagement with split-sentence pattern (long appositive):

> Contributing to Boehringer Ingelheim's sales-forecasting React application. The pharma-industry tool visualizes multi-year sales predictions produced by Python/Flask backend models. Shipped new features, migrated the codebase from Create React App to Vite for faster builds, and established a Storybook + Cypress test workflow.

**Webfleet (Bridgestone)**, completed engagement with named squad in the opener:

> Joined Webfleet, Bridgestone's fleet-management SaaS, for a year on Team Green. Built the camera-event pipeline that processed streams from connected in-vehicle Android devices, and shipped improvements to the order-management workflow.

## Edge cases

- **Very short engagements (≤3 months)**: one tight sentence is fine.
- **No standout deliverable**: opt for a stewardship framing ("Maintained X, contributed Y, and shipped Z") rather than padding.
- **Multi-year roles**: pick the 3 deliverables that best signal seniority; don't try to list everything.

## Checklist before saving an entry

- [ ] Opener names project; team/squad name only if distinctive
- [ ] No "X-person SCRUM team" duplication (team size + methodology belong to highlights)
- [ ] 3–4 action verbs in past tense (or gerund opener if ongoing)
- [ ] At least one concrete tool/platform/system named in an action
- [ ] At most two "to X" outcome clauses
- [ ] ≤75 words
- [ ] American spelling
- [ ] No em-dashes (use commas, parens, or split sentences instead)
- [ ] No anti-patterns from the list above
- [ ] Highlights: team size + methodology on one line as a noun phrase (`"SCRUM team of ~X people"`)
