---
title: "How I Built This Portfolio Site with AI Agents"
description: "The story behind building a portfolio site using multi-agent orchestration — including what went wrong and what I learned from pivoting."
date: 2026-04-08
tags: ["ai", "agents", "web-development", "astro"]
---

I built this portfolio site almost entirely with AI agents. Not one agent — a whole orchestrated team of them. And the process taught me as much about adaptability as it did about AI.

## The Original Plan

The idea was ambitious: design a multi-agent workflow where specialized AI agents each handled a different phase of the project. A researcher agent would evaluate tech stacks. A planner agent would create a detailed implementation plan. Two developer agents would build the site independently, competing against each other without being able to see each other's work. A judge agent would pick the winner. Then QA and review agents would polish the result.

Ten stages total. Three human checkpoints where I'd review progress and approve before the next phase kicked off.

I mapped out every agent's responsibilities in detail — what tools they could use, what constraints they operated under, and how they'd hand off work. I wrote instruction documents for each one. I designed evaluation rubrics. I thought through edge cases.

The planning was meticulous. And that mattered, even when the plan itself didn't survive contact with reality.

## What Actually Happened

The early stages worked well. The researcher agent evaluated frameworks and recommended Astro with Tailwind CSS — a clean, modern stack that fit the project's needs. The planner agent produced a solid implementation plan. I approved it and moved on to the development phase.

That's where things got interesting.

My competitive developer agent approach — two agents building independently, then a judge picking the winner — ran straight into a wall. The problem wasn't the agents' capabilities. It was the infrastructure around them. Managing two isolated development environments, handling permissions across parallel workstreams, and keeping the orchestration layer stable turned into what I can only describe as prompt permission hell.

The overhead of maintaining two parallel builds was eating into the time I'd saved by using agents in the first place. The agents themselves were capable, but the coordination cost was too high for a project of this scope.

## The Pivot

So I pivoted. Instead of two competitive agents, I appointed a single developer agent to build the site, then ran it through the planned QA and code review processes. I was able to salvage some of the work that one of the competitive agents had already done, so the effort wasn't wasted.

The result was a cleaner workflow. One developer agent built out the MVP — the four-page site you're looking at now, with the cat logo, dark mode, responsive navigation, and all the content. A review agent caught issues. A QA agent ran accessibility checks and flagged bugs. Then the developer agent incorporated that feedback.

The final product came together faster and more reliably than the competitive approach would have.

## What I Learned

Three things stand out:

**Multi-agent orchestration is powerful but not magic.** You can't just throw agents at a problem and expect coordination to happen automatically. The instruction documents, handoff protocols, and evaluation criteria I wrote were essential. Without clear structure, the agents would have floundered.

**Planning matters even when plans change.** The detailed planning I did for the competitive approach wasn't wasted. It gave me a clear mental model of the project's requirements, which made the pivot smoother. When I switched to a single developer agent, I already knew exactly what the site needed. The planning phase also produced the content documents and design specifications that guided the entire build.

**Know when to simplify.** The competitive agent approach was a good idea in theory. In practice, the coordination overhead outweighed the benefits for a project of this size. Recognizing that early and pivoting — rather than sinking more time into making it work — was the right call. Sometimes the best engineering decision is to reduce complexity.

## The Technical Details

The site is built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). It's a static site — no runtime JavaScript overhead beyond the dark mode toggle and mobile menu. The design uses a black, gray/silver, and red color scheme inspired by clean developer portfolios, with a custom cat logo that I'm unreasonably fond of.

Accessibility was a priority throughout. The site meets WCAG AA standards with proper ARIA attributes, keyboard navigation, skip links, and good color contrast in both light and dark modes.

The whole thing is deployed on Cloudflare Pages, which gives fast global delivery without the complexity of managing servers.

## Looking Ahead

This blog is the latest addition to the site, and it's built using Astro's content collections — the same static-first approach as the rest of the site. I plan to write more here about AI agent orchestration, infrastructure engineering, and the intersection of technology and the humanities.

Building this site reinforced something I already believed: the most valuable skill in tech isn't mastery of any single tool. It's the ability to plan carefully, execute decisively, and pivot when the situation demands it. Those are skills that transfer across domains — from historical research to cloud architecture to AI agent orchestration.

The agents built the site. But the human directed the orchestra.
