# RYUOLOGY — GEO / AEO / SEO Studio

A single-page site for a fictional **generative-engine optimization** studio, built so AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews, Claude) can read and **cite** its content.

It is both a demo *and* a proof of the method: the markup itself is the optimization.

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | The site — dark brutalist tech-studio design, all CSS/JS inline. |
| `llms.txt` | AI-crawler manifest: definitions + key facts in extractable form. |
| `robots.txt` | Explicitly allows AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended…). |
| `sitemap.xml` | Standard sitemap. |

## GEO / AEO features

- **JSON-LD structured data** — `Organization`, `Service`, and `FAQPage` schema.
- **Crawlable FAQ** built from semantic `<details>` elements mapped to FAQ schema.
- Semantic HTML5, full meta + Open Graph tags, answer-first copy.

## Tech

Plain HTML/CSS/JS. No build step. Fonts: Space Grotesk (display) + Space Mono (technical).

## View locally

Open `index.html` in any browser.

---

© 2026 RYUOLOGY Studio
