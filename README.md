# new-portfolio-site

This is a new personal portfolio site that showcases things like my best work, a version of my resume, and personal writings. For more details, see .cursor/features/1-project-overview-new-portfolio-site.md

## Git hooks

Hooks live in a tracked `.githooks/` directory, but git does not pick them up
automatically. Run this once per clone:

```bash
git config core.hooksPath .githooks
```

They block AWS account IDs, ARNs, access keys and private-key headers in staged
content, in filenames, and in the commit message. Until you run that line, a
fresh clone commits unprotected.
