---
name: landing-page-foundation
description: Use when starting a landing page from zero or when the request is still vague. This skill turns a loose idea into a design-ready foundation with objective, audience, offer, stack, tone, constraints, and explicit anti-slop guardrails before visual exploration begins.
metadata:
  short-description: Foundation for premium landing pages
---

# Landing Page Foundation

## Overview

Use this skill to prevent the project from falling into the "template trap". It converts a fuzzy request into a constrained creative brief that is specific enough to support real design decisions.

## Use This Skill When

- The user says "build me a landing page" without a solid brief.
- The offer, audience, CTA, stack, or brand tone is still ambiguous.
- The project is at level 1 and needs vocabulary, direction, and guardrails.
- A previous design pass looks generic and the problem starts at the brief, not the UI polish.

## Inputs To Collect

- Product or service being sold.
- Primary conversion goal.
- Secondary conversion goal, if any.
- Target audience and buyer awareness level.
- Technical stack preference.
- Tone keywords and words to avoid.
- Color, typography, and brand constraints.
- Required sections and hard exclusions.
- Proof assets already available: logo, screenshots, testimonials, demo, pricing, social proof.

## Workflow

1. Restate the product in one sentence.
2. Define the page objective in business terms, not layout terms.
3. Identify the single primary CTA and reject CTA sprawl.
4. Choose the stack based on speed, editability, and interaction needs.
5. Translate vague adjectives into usable art direction.
   Example: "premium" is not enough; turn it into contrast level, density, motion profile, type attitude, and palette logic.
6. Write anti-generic constraints.
   Example: avoid purple AI gradients, default SaaS cards, empty dashboard mockups, and interchangeable feature grids.
7. Produce a compact brief that can drive visual work without reopening the same questions.

## Required Output

Return a foundation pack with these sections:

- `One-line proposition`
- `Audience`
- `Primary CTA`
- `Secondary CTA`
- `Tech stack`
- `Brand tone`
- `Visual guardrails`
- `Required sections`
- `Assets available`
- `Open risks`

## Exit Criteria

Do not move to the next stage until all of these are true:

- The conversion goal is singular and explicit.
- The page has a defined audience.
- The stack decision is justified.
- The tone has concrete visual consequences.
- There is a short list of things the design must not look like.

## Avoid

- Jumping into code before defining the offer.
- Treating "clean", "modern", or "premium" as sufficient direction.
- Allowing multiple equally important CTAs above the fold.
- Choosing a stack because it is fashionable instead of appropriate.

## Hand-off

Once the brief is stable, move to `$landing-page-skill-stacking` to decide which supporting skills and evaluation lenses should govern the work.
