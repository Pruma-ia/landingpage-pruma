---
name: landing-page-immersive-architecture
description: Use when the landing page aims for agency-grade motion, 3D, WebGL, shaders, or highly choreographed interactive storytelling. This skill evaluates whether immersive techniques are justified, then scopes them with strict performance and fallback discipline.
metadata:
  short-description: Scope advanced motion and 3D safely
---

# Landing Page Immersive Architecture

## Overview

Use this skill for the frontier end of the process: advanced motion systems, Three.js scenes, WebGL, shader effects, and scroll-driven storytelling. The default posture is skepticism until the performance case is defensible.

## Use This Skill When

- The page needs a hero interaction beyond conventional 2D motion.
- The user explicitly wants 3D, WebGL, shaders, or high-end agency feel.
- Scroll choreography is central to the story, not just decorative.
- The team is ready to trade implementation cost for distinctiveness.

## Decision Gate

Before designing the experience, answer:

- What business or narrative job does the immersive layer perform?
- Could a 2D treatment achieve 80 percent of the value?
- What devices and browsers must hold up?
- What is the fallback when performance is poor?

If those answers are weak, do not escalate into 3D.

## Workflow

1. Define the experience in one sentence.
2. Choose the lightest technical approach that can deliver it.
3. Budget for performance before aesthetics explode.
4. Scope fallbacks for mobile, reduced motion, and low-power devices.
5. Build the interaction as a system, not as isolated wow effects.
6. Measure frame stability and input responsiveness.

## Required Output

Return:

- `Narrative purpose`
- `Chosen technology level`
- `Performance budget`
- `Fallback strategy`
- `Interaction scope`
- `Validation plan`

## Exit Criteria

- The immersive layer has a clear job.
- Reduced-motion and mobile paths are defined.
- The experience is scoped to what can run well.
- Performance is treated as a product requirement, not cleanup.

## Avoid

- Adding 3D because it sounds premium.
- Shipping heavy scenes without testing weaker devices.
- Treating lag as acceptable because the effect is impressive.
- Allowing the hero spectacle to overpower the offer and CTA.

## Hand-off

If the immersive layer is not justified, return to `$landing-page-live-canvas` and solve the problem with stronger 2D design, motion restraint, and better storytelling.
