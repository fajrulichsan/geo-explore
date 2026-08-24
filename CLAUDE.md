@AGENTS.md

# geo-explore

Next.js 16 (App Router) + React 19 + Tailwind 4 + Supabase. Learning module app (Peta9 steps: exploration, classification, discussion, evaluation, etc).

## Before coding: sync graphify
Before writing/editing code, check if `graphify-out/` is stale vs current source (e.g. compare `graphify-out/manifest.json` timestamp/hash against recently changed files). If stale, run `/graphify` to update it first, then use it to understand structure/relationships before making changes.

## Code style
- Keep components small, single-purpose, colocated with the step/feature they belong to.
- No premature abstraction — duplicate a few lines before introducing a shared helper for <3 usages.
- Prefer Server Components by default; use `"use client"` only when interactivity/state is needed.
- Type everything; avoid `any`.
- No comments unless explaining non-obvious *why*.
- Keep Supabase calls in dedicated data-access files, not scattered in components.

## Workflow
- Run `npm run lint` after non-trivial changes.
- Don't add new deps unless necessary.
