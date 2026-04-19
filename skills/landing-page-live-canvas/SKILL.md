---
name: landing-page-live-canvas
description: Use when the landing page already has a direction but needs pixel-level refinement through a visual tool or canvas workflow. This skill governs iterative visual polish, asset handling, and bidirectional translation between mockups and code.
metadata:
  short-description: Refine the page with a live canvas
---

# Landing Page Live Canvas

## Overview

Use this skill when the design has substance and now needs visual iteration with real feedback loops. The goal is to stop coding blind and use one visual surface to guide refinement.

## Use This Skill When

- The broad direction is already approved.
- The team is iterating on spacing, layering, cards, alignment, or section polish.
- A live design tool or visual MCP workflow is available.
- The problem is refinement, not first-principles strategy.

## Tool Rule

Pick one live-canvas tool for the current cycle and stay with it until the pass is complete. Switching tools mid-pass usually destroys momentum and consistency.

## Workflow

1. Freeze the current implementation as the baseline.
2. Identify the exact zones that need refinement.
3. Generate or edit visual alternatives in the chosen tool.
4. Translate the winning visual decisions back into code.
5. Verify on desktop and mobile.
6. Repeat only where the changes materially improve the page.

## Refinement Checklist

- Typography scale and line length.
- Spacing rhythm between sections.
- Surface depth, borders, and translucency.
- Asset cropping and negative space.
- Motion restraint and timing.
- Scroll continuity from one section to the next.
- Mobile fallback for media-heavy areas.

## Required Output

Return:

- `Baseline issues`
- `Chosen tool`
- `Areas refined`
- `Visual decisions adopted`
- `Code implications`
- `Remaining rough edges`

## Exit Criteria

- The page looks intentionally composed at multiple breakpoints.
- Refinements are visible in the shipped code, not trapped in a mockup.
- Asset and motion choices are consistent across sections.
- The page has fewer rough edges, not just more effects.

## Avoid

- Opening multiple design tools because one pass feels slow.
- Chasing infinite polish without a concrete issue list.
- Treating mockups as success if the code does not catch up.
- Adding detail that weakens clarity or conversion.

## Hand-off

If the next requirement is immersive motion, shader-like visuals, or advanced scroll behavior, move to `$landing-page-immersive-architecture`.
