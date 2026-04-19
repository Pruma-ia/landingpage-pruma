---
name: landing-page-structural-teardown
description: Use when a reference site has a specific effect, layout behavior, or interaction that must be understood at code level. This skill deconstructs HTML, CSS, and JavaScript patterns from real sites so they can be reinterpreted without blind copying.
metadata:
  short-description: Reverse-engineer real website techniques
---

# Landing Page Structural Teardown

## Overview

Use this skill when screenshots are no longer enough. It is for dissecting how a reference actually works so the project can adapt the technique rather than guess at it.

## Use This Skill When

- The user wants to reproduce a real effect from a live site.
- A screenshot-based pass is visually close but technically wrong.
- The team needs to understand which code pattern creates which visual behavior.
- The next move is not design exploration but technical deconstruction.

## Inputs To Collect

- Target site or target section URL.
- The exact behavior to study.
- The project stack receiving the adapted implementation.
- Legal and ethical constraint: adapt the technique, do not ship a clone.

## Workflow

1. Define the effect being studied with precision.
2. Inspect the site structure: HTML skeleton, CSS sources, JS behavior.
3. Separate essential mechanics from incidental implementation details.
4. Name the technique in plain language.
   Example: layered radial masks, sticky scroll choreography, marquee ticker, grid noise background, staggered reveal.
5. Rebuild the effect in the target stack with project-specific styling and semantics.
6. Explain the adaptation so the pattern becomes reusable knowledge.

## Required Output

Return:

- `Observed effect`
- `Likely technical ingredients`
- `What matters`
- `What can be replaced`
- `Adaptation plan`
- `Performance risks`

## Exit Criteria

- The team understands the mechanism, not just the appearance.
- The adapted version fits the project's structure and brand.
- The implementation plan is decoupled from the original site's naming and assets.
- Performance tradeoffs are explicit.

## Avoid

- Copy-pasting source without understanding it.
- Porting framework-specific code verbatim into an incompatible stack.
- Confusing decoration with mechanism.
- Treating teardown as permission to plagiarize.

## Hand-off

Once the technique is understood, either implement it directly or continue with `$landing-page-component-curation` if the next step is integrating specific production-ready components.
