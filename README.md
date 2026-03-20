# Jake Lynch — The Ledger

Dark editorial personal website built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Content Update Workflow

1. **Add a game**
   - Save a cover image as `public/games/[slug].[ext]`
   - Add one object entry to `content/games.ts` with matching `slug` and `imageExt`

2. **Add a recipe**
   - Save a dish photo as `public/cooking/[slug].[ext]`
   - Add one object entry to `content/cooking.ts` with matching `slug` and `imageExt`

3. **Add an essay**
   - Add one object entry to `content/writing.ts`
   - Use either:
     - `url` for an external link, or
     - `content` for inline markdown shown on-site

4. **Add or swap a company logo**
   - Drop the logo file in `public/logos/`
   - Set `logoFile` in `content/experience.ts` to that filename

5. **Hide a section**
   - Set that section key to `false` in `content/config.ts`

6. **Deploy**
   - Push `main` to GitHub with `git push`
   - Vercel auto-deploys from `main`
