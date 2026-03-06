# CLAUDE.md

## Basic principles and project overview

- This is an AI-first site. The philosophy is to use AI to build out the website from scratch. As such, the project structure reflects this. There is a docs directory. Within that is an AI directory, and within that is an agents directory. (So it's docs/ai/agents.) The agents directory contains instruction documents for all of the particular agents that will be building out the site. It is very important that all of these instruction documents in the agents directory be followed precisely. They describe what is needed for each agent. I want the site to be built out by orchestrated agents working together. During the flow, there are several checkpoints when the system will check in with me, the human user, for approval and feedback. I have noted those below. I describe the intended site content in ##Site Content below. 

The approximate flow is as follows: 
	1. Main agent: The orchestrator of the project. The Project Manager. Oversees the other agents and ensures that the workflow is effective and seamless. 
	2. Researcher agent: Researches different tech stacks and recommends the ones best suited to the project.  
	3. Planner agent: Create a detailed implementation plan for the entire project. This goes from the scaffolding of the site all the way to a polished final project and QA. (user feedback checkpoint: Human user must approve the plan before it moves forward.)
	4. Developer agents: TWO Developer agents work in parallel. Each of these agents is assigned the task of building out the entire site. Each of these developer agents will work completely independently of the other. And neither of these agents can see the other's work. So something like Git Worktree will probably be needed. When each of these developer agents is done, the judge agent, which I describe next, will actually evaluate the output of each and determine a winner. The winner is the solution that was the best implemented. More details, such as the rubric, will be listed in the individual agent documents. 
		a. Each developer agent will be able to spin up a maximum of two subagents each. These can be divided how the individual developer agent wants. For instance, one might be tasked with building out the basic JavaScript of the site, and the other might be tasked with the CSS and HTML. Or there could be two subagents working on different components. Ultimately, the subagents report back to each developer agent, and their and the developer agent's work will be considered as a whole. 
	5. Judge agent: This agent will be entrusted with reviewing each of the two developer agents' implementations and choosing the one that makes the most sense. I will include the evaluation criteria in the individual Markdown document for the judge.
	6. Developer Agent Part 2. In this step, the winning developer agent, as determined by the judge agent, will incorporate any feedback from the judge agent to improve their solution. 
	7. Review agent. After the step above is done, a separate review agent will review the code, performing code review and initial quality checks. (User Feedback checkpoint. At this step, the application will ask the human user to look over the code and the review agent's review and approve before moving forward.) 
	8. QA agent: This will involve testing and looking for bugs. There should be unit tests and, if possible, end-to-end testing as well. If possible, an orchestrator program like Playwright should be used by the AI application to review the entire site and look for visual bugs and make sure that the visual schema is attractive, meets best practices, and fits with what the user wanted. QA agent should also enforce accessibility. See more details on accessibility below.  
	9. Developer Agent Part 3. Incorporate any feedback from the QA agent and fix the bugs and problems that the QA agent found. 
	10. Final step: In this step, the project is tentatively complete. The application will present the completed project to the human user and allow the user to accept or reject the work. 
- The site should be accessible. Follow best practices for accessibility. This finished site must meet the AA WCAG standard.
- The site should be focused around my own accomplishments and should present me in a good light. While always remaining true to the facts, the site should portray my accomplishments and my ideas in positive terms. 

## Site content

- **For full details on the intended content of the site, see the following document. .cursor/features/1-project-overview-new-portfolio-site.md**. The below is just a few extra points. 
- I would like some sort of traditional tab format for each of the sections, and a hamburger menu for mobile. 
- I will provide some content for the site in the form of Markdown files in docs/site-contents. The content may not always be complete in this case, agents should flesh out this content and expand upon it. 
	1. In content creation and editing, don't guess. Don't make assumptions. If you don't know something, ask me. I don't want there to be any hallucinations or any misstatements on the site.
	2. To the extent possible, this site should be in my voice. If you need writing samples from me to better learn my voice, then ask for them. 
	3. The sub-agents will have creative freedom within the following boundaries: must adhere to my voice, must stick to the facts, must not stray off topic, must not introduce any controversial opinions (e.g. religious, political) unless the content in question is specifically about these topics. The sub-agents must also follow common sense rules as far as not saying anything offensive with respect to gender, sexual orientation, race, religion, etc.  
- The site will also involve a personal logo. For more details on that, see the cursor features document described above. 

# Tech specs

- The specific tech stack used, and whether the site is a traditional static site or a single-page application or something else, will be something ultimately decided on by the agents in coordination with the human user.  
