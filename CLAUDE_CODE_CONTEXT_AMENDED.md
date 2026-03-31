# Portfolio Website Context for Claude Code

## Project Overview

Build a professional portfolio website for Graham Nessler, an AWS-certified infrastructure and AI engineer with a background in academic history. The site should showcase technical work, AI projects, professional accomplishments, and personal interests in a clean, modern design.

## About Graham

### Professional Background
- **Current Role:** Infrastructure & Security Engineer at a major healthcare company (2022-Present)
- **Previous Career:** History professor and scholar specializing in Latin American/Caribbean history
- **Education:** PhD in History (focus: Haitian Revolution, slavery, emancipation)
- **Location:** San Antonio, Texas
- **Career Transition:** Left academia for tech via Turing School's second front-end cohort

### Technical Profile
- AWS Certified Solutions Architect Associate (2025)
- 574+ completed technical initiatives demonstrating infrastructure, security, and automation expertise
- Focus areas: AI agent orchestration, cloud architecture, developer tooling, LLM applications
- Active member of [Alamo Tech Collective](https://alamotechcollective.com/)

### Technical Stack
**Primary:** Python, JavaScript/TypeScript, React, Node.js, AWS (Lambda, S3, EC2, CloudFormation), Docker, AI/LLM integration, infrastructure as code, CI/CD pipelines

**AWS Services:** Lambda, S3, EC2, RDS, CloudFront, IAM, KMS, Security Hub, Prisma Cloud, AWS CDK, CloudFormation, EventBridge, WAF

### Personal Details
- Born: March 3, 1982
- Married to Sarah
- Languages: English (native), French (fluent), Spanish (fluent)
- Interests: International travel, history, technology
- Values: Inclusiveness, collaboration, mutual respect, low hierarchy, continuous learning

### Political Views
- Left of center politically
- Active in local Democratic politics and "resistance" to Trump
- Values-driven but shy about door-to-door activism
- Interested in writing op-eds and letters to Congress

## Site Structure & Content

### Pages Required

#### 1. Hero/Home Page (`/`)

**Top Section (Below Header):**

I'm Graham Nessler — an AWS-certified infrastructure and AI engineer building the future of intelligent systems. By day, I architect, secure, and scale cloud infrastructure at a major healthcare company. By night, I'm prototyping AI agents, contributing to open source, or deep in a book on history or tech.

I'm an infrastructure engineer for a major health care company. Some of my main accomplishments over the past few years are:
- **Remediated 93 security vulnerabilities** across AWS infrastructure, including 18 high-priority threats
- **Saved my team hundreds of dollars** in S3 storage costs by optimizing storage for dozens of buckets
- **Executed 348 zero-downtime configuration changes** maintaining 99.9%+ uptime in production
- **Delivered emergency security remediations quickly** when our infrastructure encountered problems.
- **Managed our relationship with our AWS third-party vendor**, including everything from patching to emergency responses to routine assistance requests.

For more on my work accomplishments, see [the Work Accomplishments section](/work-accomplishments)

Based in San Antonio, Texas, I'm an active member of [Alamo Tech Collective](https://alamotechcollective.com/), where we're building a thriving, inclusive tech community. My journey into tech began at Turing School's second front-end cohort — a transformative experience that launched thousands of careers. Since then, I've evolved into full-stack development, earned my AWS certification, and specialized in infrastructure engineering and AI systems. I'm particularly focused on AI agent orchestration, cloud architecture, developer tooling, and practical applications of LLMs.

I believe deeply in the values that drive communities like Alamo Tech Collective and Turing: inclusiveness, collaboration, mutual respect, and low hierarchy. Technology is stronger when diverse voices shape it. We build better systems together.

**Bottom Section (Below Portfolio Tiles):**

My path to tech was unconventional. Before Turing, I was a history scholar and university instructor. I wrote [an academic book](https://www.amazon.com/Islandwide-Struggle-Freedom-Emancipation-Reenslavement-ebook/dp/B015ZTG2UM/ref=sr_1_1?ie=UTF8&qid=1446851797&sr=8-1&keywords=graham+nessler) on revolution and slavery in the Caribbean and taught courses spanning U.S. history, Ancient Rome, and Latin America. But academia couldn't provide what I needed:

- Career stability and growth potential
- A field where continuous learning is the norm, not the exception
- Geographic flexibility and remote work options

I found all three in tech. As AI reshapes our industry, I believe adaptability and intellectual curiosity matter more than ever. When I'm not building or learning, I'm traveling internationally, maintaining fluency in French and Spanish, and spending time with my wife and her family.

#### 2. Portfolio Page (`/portfolio`)

**Top Section (Below Header):**

Here's what I've been building.

**Project Tiles (4 projects):**

1. **Friendly Advice Columnist**
   - GitHub: https://github.com/gness1804/friendly-advice-columnist
   - Screenshot: `fac_ss.png`
   - Description: An AI-powered advice service that provides thoughtful, nuanced guidance on interpersonal challenges. Built with a three-stage LLM pipeline: screening for appropriate questions, generating initial responses, and refining output to match my voice and values. Demonstrates practical multi-agent orchestration and prompt engineering.

2. **Receipt Ranger**
   - GitHub: https://github.com/gness1804/receipt-ranger
   - Screenshot: `Receipt Ranger Screenshot.png`
   - Description: AI-powered receipt parser that transforms photos into structured, spreadsheet-ready data. Uses computer vision and LLMs to extract line items, totals, and merchant details. Features direct Google Sheets integration for automated expense tracking.

3. **Recipe Chatbot**
   - GitHub: https://github.com/gness1804/recipes-ai-app
   - Screenshot: `Recipe Chatbot screenshot.png`
   - Description: Intelligent recipe assistant built with retrieval-augmented generation (RAG). Searches a vector database of curated recipes for matches, falling back to LLM generation when needed. Demonstrates practical implementation of semantic search and hybrid AI systems.

4. **Cursor File System**
   - GitHub: https://github.com/gness1804/cursor-file-system
   - Screenshot: `CFS screenshot.png`
   - Description: An opinionated filesystem designed specifically for AI agent development. Organizes work into categories (features, bugs, refactors, tests) with executable instruction documents that agents can run directly. Includes GitHub Issues synchronization and workflow automation for AI-assisted development.

**Bottom Section:**

I'm also active in open source and have contributed to projects focused on developer tooling, infrastructure automation, and AI systems. My work emphasizes practical, production-ready solutions — not just proofs of concept. Whether building RAG pipelines, orchestrating AI agents, or designing cloud architectures, I focus on creating tools that solve real problems and scale effectively.

Specific open source contributions include:
- Built out a more comprehensive system for non-profit organizations to connect with users and fixed critical bugs for [River City Resources](https://github.com/Alamo-Tech-Collective/River-City-Resources), a project that connects those with disabilities to available resources in San Antonio.
- Added new plugins to CHARLOTTE, an AI-driven cybersecurity app (now closed source).
- Built out modern, attractive front end for [Taco Price Index](https://github.com/Alamo-Tech-Collective/Taco-Price-Index), a service for tracking taco prices in San Antonio.

**Certifications:** AWS Certified Solutions Architect Associate (2025)

**Core technical skills:** Python, JavaScript/TypeScript, React, Node.js, AWS (Lambda, S3, EC2, CloudFormation), Docker, AI/LLM integration, infrastructure as code, CI/CD pipelines, and full-stack web development.

#### 3. Work Accomplishments Page (`/work-accomplishments`)

**Content:**

# Work Accomplishments

## Infrastructure & Security Engineering
*Major healthcare company | 2022-Present*

### Security Leadership
- **Remediated 93 security vulnerabilities** across AWS infrastructure, including 18 high-priority threats
- **Resolved 91 Prisma Cloud violations** ensuring SOC 2 compliance and hardening cloud security posture
- Enforced HTTPS-only policies across 140+ S3 buckets preventing data exposure

### Infrastructure Modernization
- **Executed 348 zero-downtime configuration changes** maintaining 99.9%+ uptime in production
- Decommissioned 11 deprecated Lambda functions and optimized serverless architecture
- Managed 143 S3 initiatives including bucket security, encryption, and cross-account access

### Access & Identity Management
- Administered 66 IAM policy updates implementing least-privilege access control
- Managed 97 access requests and conducted regular security audits
- Implemented automated access key rotation reducing credential exposure risk

### Automation & Tooling
- Built EventBridge + Lambda solution for automated RDS snapshot lifecycle management
- Created Python scripts for S3 bucket security auditing and public access blocking
- Designed AWS CDK templates for repeatable Aurora Serverless database deployment

### Cloud Architecture
- Configured 37 CloudFront distribution updates with enhanced security headers
- Upgraded AWS WAF Classic to WAF v2 improving DDoS and threat protection
- Implemented VPC Flow Logs and network monitoring for security compliance

### Database Infrastructure
- Upgraded RDS clusters to PostgreSQL 15.6/16.6 for performance and security
- Created dev/staging RDS environments for SaaS pricing API development
- Researched and documented cost optimization opportunities with RDS reserved instances

---

## Impact at Scale

**574 completed technical initiatives** since Jan. 1, 2024, demonstrating breadth across cloud infrastructure, security, automation, and operational excellence. Consistent track record of securing critical healthcare infrastructure while maintaining high availability and reducing operational overhead through automation.

**Technical Stack:** AWS (Lambda, S3, EC2, RDS, CloudFront, IAM, KMS, Security Hub), AWS CDK, CloudFormation, Python, PostgreSQL, Prisma Cloud

#### 4. History Page (`/history`)

**Content:**

I'm a professionally trained historian specializing in Latin American and Caribbean history. My research focused on the Haitian Revolution — an 18th-century slave rebellion on the island of Hispaniola that fundamentally shaped the modern world. This work resulted in [*An Islandwide Struggle for Freedom: Revolution, Emancipation, and Reenslavement in Hispaniola, 1789-1809*](https://www.amazon.com/Islandwide-Struggle-Freedom-Emancipation-Reenslavement-ebook/dp/B015ZTG2UM/ref=sr_1_1?ie=UTF8&qid=1446851797&sr=8-1&keywords=graham+nessler) (University of North Carolina Press, 2016).

[Book image: `Island-wide struggle cover.png`]
[Book link: https://www.amazon.com/Islandwide-Struggle-Freedom-Emancipation-Reenslavement-ebook/dp/B015ZTG2UM/ref=sr_1_1?ie=UTF8&qid=1446851797&sr=8-1&keywords=graham+nessler]

Why spend years researching a single revolution? Because it reveals how our modern world was forged. The rise of Europe and the United States, patterns of global inequality, the structures of modern capitalism — these didn't emerge naturally. They were built through specific historical processes: racial ideologies, transatlantic slavery, violent resistance, and brutal counter-revolution.

The sugar you stir into your coffee. Contemporary American politics. Why some nations are wealthy and others struggle. All of these trace back, in significant ways, to centuries of enslavement, resistance, and the systems built to maintain or challenge those hierarchies. For several years, I had the privilege of teaching students to see these connections — to understand the present through the lens of this deeper history. I hope I helped them think more critically about the world they inherited.

My broader historical interests include Ancient Rome, U.S. Reconstruction and Civil Rights, and mainland Latin American history.

### Navigation Structure

Main navigation should include:
- Home (hero page)
- Portfolio
- Work Accomplishments
- History

## Design Requirements

### Style Guidelines
- **Aesthetic:** Clean, modern, professional but not corporate
- **Tone:** Approachable but competent; personal but professional
- **Typography:** Readable, modern sans-serif for body text; consider serif for headings if it fits the aesthetic
- **Color Scheme:** Professional palette that works well for a tech portfolio (suggest blues/grays, but open to modern alternatives)
- **Responsive:** Must work flawlessly on mobile, tablet, and desktop

### Key Design Principles
- Content-first approach: text should be highly readable
- Clear visual hierarchy
- Generous white space
- Fast loading times
- Accessible (WCAG 2.1 AA minimum)

### Technical Preferences
- Modern tech stack (React, Next.js, or similar)
- Good SEO practices
- Clean, maintainable code
- Include basic analytics (Google Analytics or similar)
- Deploy to Vercel, Netlify, or similar platform

## Assets Available

### Images
Located in `/workspace/group/portfolio-site/docs-for-evaluation/site-content/assets/`:

**Project Screenshots:**
- `fac_ss.png` - Friendly Advice Columnist
- `Receipt Ranger Screenshot.png` - Receipt Ranger
- `Recipe Chatbot screenshot.png` - Recipe Chatbot
- `CFS screenshot.png` - Cursor File System

**Personal Images:**
- `hero.jpg` - Hero section image (if needed)
- `Island-wide struggle cover.png` - History book cover

**Page Reference Images:**
- `portfolio.JPG`, `history.JPG` - Reference screenshots

## Working Preferences

### Communication Style
- Professional but not ultra-formal
- Concise responses when possible
- Don't assume anything - ask questions when unclear

### Development Process
- For complex tasks: lay out proposed steps first, wait for approval before working
- Don't do anything irreversible without permission
- Use dry run options when available for scripts touching sensitive files
- No unnecessary repetition in explanations

### Permission Guidelines

**IMPORTANT: Minimize permission prompts. Only ask for permission when truly necessary.**

**Proceed WITHOUT asking for permission for:**
- Reading/fetching URLs, documentation, or web content for research
- Reading files in the project directory
- Installing standard npm packages or dependencies
- Running standard development commands (npm install, npm run dev, build commands)
- Creating/editing/moving project files (components, styles, config files)
- Using standard development tools and frameworks
- Making git commits (but ask before pushing to remote)
- Running tests
- Any standard, reversible development operations

**DO ask for permission for:**
- Deleting files or directories
- Making changes outside the project directory
- Running commands that could affect system configuration
- Pushing code to remote repositories
- Deploying to production
- Making changes to security-sensitive files (.env, credentials)
- Any truly irreversible or high-risk operations

**For sub-agents:** These permission guidelines apply to ALL agents and sub-agents. Sub-agents should operate with the same autonomy for standard development tasks and only escalate truly high-risk decisions.

### Code Quality Standards
- Clean, maintainable code
- Follow modern best practices
- Include comments for complex logic
- Consider security implications
- Write tests for critical functionality

## Contact Information

*Note: Contact details (email, LinkedIn, GitHub, etc.) should be added by Graham during development. Placeholder elements should be clearly marked.*

## Additional Context

### Career Narrative Arc
The site should tell a cohesive story:
1. Academic historian → career transition → tech professional
2. Demonstrates continuous learning and adaptability
3. Shows technical depth (574 initiatives, security remediation, infrastructure work)
4. Highlights AI/agent specialization and modern tech interests
5. Emphasizes values: inclusiveness, collaboration, continuous learning

### Tone & Voice
- Direct and honest
- Not overly promotional or salesy
- Intellectually curious
- Values-driven without being preachy
- Shows depth: both technical expertise and broader perspective from history background

### What Makes This Different
This isn't just another tech portfolio. Graham brings:
- Unique career trajectory (PhD historian → infrastructure engineer)
- Deep thinking about systems (historical and technical)
- Focus on practical, production-ready AI solutions
- Active in building inclusive tech communities
- Multilingual, internationally experienced

## Success Criteria

The finished site should:
1. Clearly communicate Graham's technical capabilities to potential employers/collaborators
2. Showcase AI/infrastructure expertise with concrete examples
3. Tell a compelling career transition story
4. Feel personal and authentic, not generic
5. Work flawlessly across devices
6. Load quickly and be accessible
7. Be easy for Graham to maintain and update

## Future Considerations

- Blog functionality (may want to add later)
- More detailed case studies for projects
- Resume download
- Contact form
- Potential op-ed/writing section

---

*This context document provides everything Claude Code needs to build Graham's portfolio site. For questions or clarifications during development, ask Graham directly.*
