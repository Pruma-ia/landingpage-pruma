---
name: landing-page-visual-direction
description: Use when the user can provide screenshots, references, or examples of websites they admire. This skill converts scattered inspiration into a coherent visual direction with specific pull-through decisions instead of vague "make it like this" prompting.
metadata:
  short-description: Turn references into visual direction
---

# Landing Page Visual Direction

## Overview

Use this skill to close the "vibe gap". It interprets references, isolates what is actually working, and converts multiple screenshots into a usable direction system for the landing page.

## Use This Skill When

- The user has screenshots, links, or saved references.
- The team is describing visuals poorly with text alone.
- Previous iterations are directionless or visually inconsistent.
- Multiple references need to be merged into one coherent language.

## Inputs To Collect

- Reference screenshots or URLs.
- A note for each reference explaining what the user likes.
- Priority areas: hero, navigation, cards, typography, spacing, motion, backgrounds, forms.
- Elements that must not be copied literally.

## Workflow

1. Review each reference and label the attractive traits.
   Example: oversized typography, asymmetrical composition, dense hero, muted palette, segmented background, editorial spacing.
2. Separate structural traits from cosmetic traits.
3. Find repeated patterns across references.
4. Resolve conflicts between references instead of blending everything blindly.
5. Produce one direction statement for the page.
6. Convert the direction into decisions the implementation can honor.

## Direction Template

Return a visual direction sheet with:

- `Core mood`
- `Typography posture`
- `Palette logic`
- `Surface treatment`
- `Layout behavior`
- `Motion stance`
- `Component references`
- `What to borrow`
- `What to avoid`

## Exit Criteria

- The reference set has a point of view, not just a mood board.
- Each chosen visual trait is tied to a concrete UI decision.
- Conflicting references have been resolved.
- The team can explain why each reference matters.

## Avoid

- Saying only "I like this site".
- Mixing five different design systems without arbitration.
- Copying a screenshot literally when the real need is a technique or rhythm.
- Using references only for hero style and ignoring the rest of the page.

## Hand-off

If the design only needs interpretation, proceed to implementation with the active design stack. If a specific reference effect must be dissected technically, move to `$landing-page-structural-teardown`.
