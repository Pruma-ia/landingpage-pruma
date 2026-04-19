---
name: landing-page-skill-stacking
description: Use when the landing-page brief exists but the execution still lacks design intelligence. This skill chooses and orchestrates the right supporting skills, review lenses, and heuristics so the work stops depending on a single generic prompt.
metadata:
  short-description: Stack the right skills and lenses
---

# Landing Page Skill Stacking

## Overview

Use this skill to decide which skills, workflows, and evaluation criteria should be active before design and implementation begin. The goal is to replace "one prompt does everything" with an intentional stack.

## Use This Skill When

- A foundation brief already exists.
- The design output is improving but still feels like polished AI template work.
- You need to choose which specialist skills should shape the work.
- You want an explicit review rubric before iterating visually.

## Skill Stacking Logic

Start from the brief and choose only the minimum stack that materially improves the result.

- If the problem is taste, hierarchy, or composition, use a design skill such as `design-taste-frontend` when available.
- If the problem is reference analysis, move next to `$landing-page-visual-direction`.
- If the problem is reverse engineering a real site, move next to `$landing-page-structural-teardown`.
- If the problem is component quality or integration, move next to `$landing-page-component-curation`.
- If the problem is refinement on a visual canvas, move next to `$landing-page-live-canvas`.
- If the problem is immersive motion or 3D ambition, move next to `$landing-page-immersive-architecture`.

## Workflow

1. Read the brief and classify the current bottleneck.
2. Separate strategic gaps from execution gaps.
3. Select the active skills for the current pass.
4. Define the order of use.
5. Define the review rubric before any redesign.

## Review Rubric

Evaluate every iteration against these lenses:

- `Clarity`: does the page communicate value fast?
- `Hierarchy`: is the eye path intentional?
- `Distinctiveness`: could this belong to any random SaaS?
- `Cohesion`: do sections feel from the same system?
- `Interaction`: do motion and affordances add meaning?
- `Conversion`: does the CTA feel earned and obvious?

## Required Output

Return:

- `Current bottleneck`
- `Active skill stack`
- `Execution order`
- `Review rubric`
- `Reasons for excluded skills`

## Exit Criteria

- There is a clear stack, not a pile of generic advice.
- Each chosen skill has a job.
- The next execution step is obvious.
- The team can evaluate output with a repeatable rubric.

## Avoid

- Activating every available skill by default.
- Using skills as decoration instead of orchestration.
- Skipping the evaluation rubric and relying on vague taste judgments.

## Hand-off

If the next gap is visual language, move to `$landing-page-visual-direction`. If the next gap is technical mimicry of a live reference, move to `$landing-page-structural-teardown`.
