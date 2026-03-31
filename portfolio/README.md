# Graham Nessler — Portfolio Site

Personal portfolio site for Graham Nessler, AWS-certified infrastructure and AI engineer based in San Antonio, Texas.

## Tech Stack

- [Astro 5](https://astro.build) — static site framework
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- TypeScript

## Setup

**Requirements:** Node.js >= 22.12.0

```sh
npm install && npm run dev
```

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |
| `npm run check`   | Run Astro type checking                     |
| `npm test`        | Run unit tests (Vitest)                     |
| `npm run test:e2e`| Run end-to-end tests (Playwright)           |

## Project Structure

```
src/
  components/   NavBar and other shared components
  layouts/      BaseLayout wrapping all pages
  pages/        index, portfolio, work-accomplishments, history
  styles/       global CSS
public/
  assets/       screenshots and static images
  favicon.svg
```

## Deployment

Deployed to [Cloudflare Pages](https://pages.cloudflare.com). Production builds run `npm run build` and serve the `dist/` directory.
