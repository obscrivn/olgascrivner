# Research publication guardrails

Updated 9 November 2026. These restrictions apply to future research-page content, project cards, metadata, figures, links and related portfolio updates.

Primary evidence: Kage's research portfolio (`Olga_Scrivner_AI_Agent_Research_Portfolio.docx`, maintained locally and excluded from the public repository). The internal Phase 1 review maps that inventory to the page and is also kept local. This document records the user's binding publication restrictions; it does not replace the inventory or authorize publishing.

## Public narrative

The page should communicate, in order:

1. **What I have studied:** reusable capability discovery, skill representation, descriptive package analysis and evidence-linked measurement. Distinguish conceptual frameworks from empirical observations.
2. **What I have built or investigated:** inspectable research implementations, descriptive studies, the calibrated instrument, the conservative refinement pilot and accurately attributed application prototypes. State each artifact's status and limitations.
3. **What I am trying to understand next:** the three themes and six questions below. Present them as open research questions, not completed results.

Use concise academic language for a personal research website. Preserve the general research agenda rather than presenting a product launch or company-specific proposal.

## Public research questions

These six questions preserve the Phase 1 mapping of Kage's portfolio, organized into the user's three themes. They are editorial formulations for future page implementation, not evidence of additional experiments.

### Capability Discovery and Representation

1. What evidence justifies promoting a recurring workflow into a reusable capability?
2. How should skills represent packaged resources and encoded instructions, and how do these relate to runtime exposure and actual use?

### Evaluation, Reliability, and Improvement

3. How should agents select and invoke capabilities, abstain when evidence is insufficient, and recover from failures?
4. How can refinement preserve capabilities and avoid evaluator-induced errors, and which changes improve held-out performance under controlled, paired evaluation?

### Agent Architecture and Computational Efficiency

5. How do agent composition, validation and approval boundaries affect reliability and task outcomes?
6. How should task benefit be evaluated alongside token use, latency and computational cost?

Coverage: questions 1–2 retain workflow promotion and representation; question 3 retains selection, invocation, abstention and recovery; question 4 retains preservation, evaluator errors and held-out performance; questions 5–6 retain architecture, validation, approval and computational cost. Splitting the previous combined architecture/cost question makes room to combine the closely related refinement and held-out evaluation questions without dropping either topic. Controlled evaluation requires fixed model/harness conditions, repeated runs and explicit handling of infrastructure failures.

## Binding evidence restrictions

- Do not expose the private M5.5 analysis, private taxonomy notebook links or private-only numerical findings in public page content, downloadable assets, metadata or source data shipped to the browser. A report about public benchmark results is not necessarily a public report. Public state files and tests are not substitutes for unavailable public analysis artifacts.
- Prefer the public M3.4 dependency-linkage report when relevant and verified. Do not expose the private Drive original. The inventory identifies the public report at `https://github.com/obscrivn/skillbench-meta-reseach/blob/main/reports/M3.4-deterministic-resource-dependency-linkage.md`; confirm the source and revision before public implementation. Static reachability does not establish runtime exposure, use or benefit. “No detected path” does not mean unused or harmful.
- Do not claim independent validation of the taxonomy or encoded-capability instrument. Distinguish Chapter 3's conceptual vocabulary, physical packaging layers and the versioned semantic codebook. The recorded single-model calibration does not establish independent annotation agreement, a gold standard or predictive validity.
- Do not report skill refinement benefits without completed paired task evaluation. Preserve the final pilot disposition: one retained refinement, five no-ops and one revert, followed by a stop before paired evaluation. Procedural completion and accepted edits are not performance gains. A quota-blocked exploratory check is neither an improvement nor a measured null result.
- Do not infer causal performance improvements from descriptive structural associations. Package size, composition and capability labels are not quality rankings. Preserve confounding and infrastructure-exclusion limitations. Do not claim that smaller skills improve performance from these observations.
- Preserve implementation boundaries: the standalone review tooling differs from distributed optimizer helpers. Simulated validation gates, incomplete checks and remaining URL-handling defects prevent claims of enforced library safety or reliable autonomous evolution.
- Keep proposed Skill Factory and Skill Bench products distinct from verified implementations and from external SkillsBench. Do not invent releases, benchmark ownership, adoption, deployments or outcome metrics.

## TravelWell identities and attribution

| Identity | Supported status in Kage's inventory | Restrictions |
| --- | --- | --- |
| `obscrivn/travelwell-ai` | Personal multi-agent fitness-finder prototype; sequential discovery, ranking and policy agents; authored skill packages. | Policy validation uses an LLM; tools mix live, fixture and hardcoded data. No controlled skill-loading or ablation benefit. Do not inherit team-project CI, deployment or booking claims. |
| `obscrivn/travelwell-voice` | Separate voice-first prototype with one consolidated agent and integration surfaces. | Mock in-memory profiles are not durable memory. Fixed content and fallback paths remain; live Sabre success is unverified. Do not describe it as the original three-agent runtime. |
| `scrivner-solutions/travelwell-agent` | Team-developed trip/wellness planning prototype with typed contracts, provenance, validation, approval and recorded CI/staging evidence. | Verify Olga's individual contribution; most subsequent implementation is attributed to Duy Le in the inventory. Simulated or handoff reservations are not autonomous booking; executor calendar writes and delivered notifications are not established. Do not equate branch CI with a different main revision. |

Verify individual contribution claims for every collaborative artifact before assigning first-person implementation or leadership credit. Use evidence-supported “co-developed” or “team-developed” where appropriate; commit counts alone do not establish intellectual ownership or leadership. FDA AI Navigator is a team prototype, not a clinically validated system. Radient's public synthetic architecture/demo package does not establish hospital deployment or clinical/throughput outcomes. Where contribution wording remains unresolved, flag it for review or omit the individual claim.

## Publications, source status and unresolved decisions

- Flag uncertain titles, authors, dates, venues, peer-review status and URLs rather than inventing corrections. Existing website metadata is not independent verification. Do not declare older publications false merely because this inventory does not audit them.
- Distinguish conceptual Medium articles, public research reports, recorded experiments and published scholarship. Preserve online-publication versus citation-year distinctions; the portfolio records Safety by Design online in August 2026 with a 2027 publisher citation year.
- Use dated frozen reports and codebooks for definitions and numerical claims. Earlier notebook proposals and Stage 3 dispositions must not override later final records. Preserve source revisions and the spelling `skillbench-meta-reseach`.
- Kage's unresolved evidence and publication decisions remain binding. Private material requires a separate publication decision and an appropriate public evidence package before use. Do not silently treat unresolved decisions as approval. Repairs, independent annotation, runtime tracing and paired evaluations remain future work until supported by new evidence.
- Before a future website update, check claim provenance, artifact status, public-source accessibility, contribution wording and publication metadata. Record uncertainties explicitly in review documentation and keep unsupported statements out of public copy.

## Task boundaries

The original implementation task did not authorize publication, deployment, changes to repository visibility or experiments. Do not publish private sources or change their sharing permissions. Follow the repository workflow and the user's authorized phase for any later implementation.

The subsequent deployment-test request authorizes committing reviewed website changes on the current feature branch, pushing that branch to GitHub and checking its automatic Vercel preview after lint, build and diff review pass. It does not authorize merging into `main`, production deployment, repository visibility changes, experiments or changes to Vercel or GoDaddy settings. Private source documents and internal research reviews must remain outside the pushed changes.

The user's later production-release request authorizes the reviewed homepage and research-page revisions, replacing public email contact with the verified LinkedIn profile, committing and pushing these changes, merging the feature branch into `main` and checking the resulting automatic Vercel production deployment. It does not authorize repository visibility changes, experiments, private-source publication or changes to Vercel or GoDaddy settings. This release authorization supersedes the earlier local-only and preview-only restrictions for these website changes.

## Local implementation record — 9 November 2026

The user subsequently authorized research-page implementation in this task. Local changes on `codex/research-portfolio` organize `/ai-agent-research` around research foundations, selected artifacts, writing and the three question themes. `src/data/agent-research.ts` holds public copy; the page renders as a Server Component with route-specific metadata. The existing palette, typography, card layouts and dark footer are retained. Navigation wraps on mobile; the maturity filter was replaced by accurate per-artifact status labels. All six questions match this document.

Featured work follows Kage's selection: miner; corpus/linkage; instrument; pilot; conceptual series; original TravelWell; FDA Navigator. The latter is labeled team-developed without unverified individual responsibility claims. Optional voice/team TravelWell and Radient cases were not added. Their identities and limits remain recorded above. Older publication entries with unresolved metadata were omitted from this research page, not corrected by inference; the homepage was left untouched by this implementation.

Source checks retrieved public pinned M2, M3.4, instrument-freeze/calibration, final-pilot and P07 records through the GitHub connector, along with the miner README/journal and the original TravelWell/FDA agent implementations. The three Medium article pages and Springer record were accessible; article titles/bylines/dates and the chapter's listed authors/online date were checked. Kage's inventory remains the primary evidence; no experiments or source-project tests were rerun. Existing Scholar/contact destinations were retained rather than independently audited. Publication and contribution uncertainties in the Phase 1 review remain unresolved wherever they were not supported by these checks.

Validation: lint passed with zero errors and seven existing homepage warnings. The initial restricted-network build failed to fetch Google Fonts; the network-enabled rerun passed compilation, TypeScript and static generation. Local browser checks covered desktop (1440px) and mobile (390px) rendering, section anchors and six visible question items, with no horizontal overflow at those widths. Source and DOM checks found no private Drive/notebook links or private M5.5 findings in the research page. No publication, deployment, repository visibility change or experiment was performed.
