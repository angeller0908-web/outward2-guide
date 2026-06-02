<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Git workflow (owner's standing instruction)

The owner trusts the agent to ship. For this repo:

- Work directly on `main`. Do not create feature branches unless explicitly asked.
- After finishing a code change, proactively commit AND push to `origin/main`
  without waiting to be asked. Pushing `main` triggers the Cloudflare Pages deploy
  (that is the intended "publish" step).
- Still verify before pushing: run `npm run build` and make sure it passes.
