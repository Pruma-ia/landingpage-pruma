---
name: landing-page-component-curation
description: Use when the project needs better heroes, navbars, cards, forms, or micro-interactions sourced from curated component libraries or custom assets. This skill selects, evaluates, and integrates components without creating a Frankenstein page.
metadata:
  short-description: Curate and integrate premium components
---

# Landing Page Component Curation

## Overview

Use this skill to upgrade specific page parts with curated components, custom hero assets, or motion elements while keeping the system coherent.

## Use This Skill When

- The layout is solid but the components are weak.
- The hero needs a stronger image, illustration, or subtle looped video.
- The team wants to pull from 21st.dev, CodePen, or similar libraries.
- The page risks becoming generic because every section is custom-built from nothing.

## Inputs To Collect

- Components that need replacement.
- Candidate sources or reference components.
- Stack and dependency constraints.
- Existing color, type, and motion system from prior stages.

## Workflow

1. Define the target component role.
2. Gather two to four serious candidates, not dozens.
3. Evaluate each candidate for code quality, accessibility, responsiveness, and style fit.
4. Decide whether to integrate, adapt heavily, or rebuild from the idea only.
5. Normalize spacing, radii, shadows, motion, and typography to the page system.
6. Check that the upgraded component improves the whole, not only itself.

## Required Output

Return:

- `Target components`
- `Candidates reviewed`
- `Why the winner fits`
- `Required adaptations`
- `System alignment notes`
- `Risks introduced`

## Exit Criteria

- Each imported component has a reason to exist.
- The page still feels like one design system.
- Motion, type, spacing, and visual density remain coherent.
- Asset choices reinforce the story instead of filling space.

## Avoid

- Importing a component because it looks cool in isolation.
- Mixing multiple component ecosystems without normalization.
- Letting the hero asset dominate the product message.
- Shipping heavy animation or video without mobile fallback.

## Hand-off

If the next problem is layout polish, pixel refinement, or visual feedback loops, move to `$landing-page-live-canvas`. If the next problem is deeper motion or 3D architecture, move to `$landing-page-immersive-architecture`.
