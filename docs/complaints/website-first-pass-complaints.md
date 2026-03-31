
# Issues with the first draft of the portfolio page. 

Here are issues that I found with the first draft of the portfolio page. Most are a bit minor, but a few are a bit bigger. There is also a section on strengths above the areas of improvement to show what the developer agents did particularly well. 

Also, there are a few image file names in this document. These image files are in the same directory as the current Markdown document. 

## Strengths of the site:
- Colors:
    - Good color scheme and color contrast. 
    - The hover color underlines work well. In fact, I think that the gray in the hover underline might be a good candidate to use for a new link hover color (see below for more on that).
    - The red button's hover state looks good. 
- Links:
    - I like that the external links, such as that to the Alamo Tech Collective, open in a separate tab, whereas the internal links open in the same tab. I'm not sure if that's a feature of Astro or something that you added, but it's a practice that works well. 
- Images:
    - I like how the preview project links on the hero page have a zoom in and out effect when you hover over them. 

## Areas for improvement:
- Cat Logo:
    - The ears should not stick out beyond the head horizontally. If you think about what an actual cat's head looks like, it doesn't have the ears extending in those notches beyond the rest of the head. The ears extend vertically beyond the rest of the head, but not horizontally. 
    - I had asked for three colors in the logo, but there are actually four. There's white on top, plus the three that I had asked for. Only be three colors. 
    - There should also be a couple of eyes on the cat. My apologies, I didn't ask for that originally. This grid should be a bit larger and more prominent and extend further. 
    - Thinking more about it, I wonder if a G could be superimposed on the cat to fit snugly inside the circle that is the main part of the cat's head. This might be a stretch goal, but it's worth considering. That would really connect my first name to the logo. 
    - With the G described above and the logo, we could probably get rid of my name in the top left, since it appears in the header anyway. Cut down on repetition. 
- Responsiveness and Spacing:
    - When I shrink the browser window to a small width, like approximately mobile width, and click the hamburger button, nothing happens. It appears to be broken. (hamburger_menu_broken.png)
    - The gap between the end of the hero text and the “Recent Projects” header on mobile is too large. (Hero Text Gap.png)
    - Another minor issue, but if possible, it would be nice to have the “View on GitHub” links on the portfolio page align with each other vertically on larger viewports. (vertical non-alignment.png)
- Colors and Links:
    - I was thinking of making the site default to white text on a black background. That's really more in line with my preferences, and this is my portfolio page. Would it be possible to add a toggle between light mode and dark mode that many sites have and default to dark mode? 
    - I'm not sure that I like the hover color on the links, as it makes the link color indistinguishable from that of the regular text. How about experimenting with making the hover color a shade of gray? One that's dark so that it passes accessibility on a white background, but one that still is distinct from the black text. 
        - Or even use the hover color of the “View on Github” links on the Portfolio page. That would be consistent, and it would be a dark color that is good contrast with the red but still also contrasting with the main text. 
    - It's 2026. I think that we can lose the underline on link text. By now, website users are conditioned to think that differently colored text is likely to be a link. If you hover over it, that'll be the usual behavior of the cursor turning into a pointer and a link preview appearing at the bottom of most browsers. The underline makes the links look dated, and when it comes to the italicized link containing my full book title on the history page, it just looks ugly. 
- Text:
    - Lose the em dashes (—) on the hero page and throughout. That is a classic “tell” that an LLM wrote the page. Use different punctuations, such as commas and semicolons, or new sentences, instead. (This was probably in the original copy in the Markdown files, so it's probably not the fault of the developer agent, but it's still something that should be corrected.)
    - I think that the second bullet point on tech vs. my academic career, instead of reading “A field where continuous learning is celebrated, not exceptional,” should read “A field that values expansive knowledge more than over-specialization, and where stagnation and complacency are not an option.” (This is also not the fault of the developer agent, as this wasn't in the original text.)
- Buttons
    - The “View all projects” button is flush left on all viewports, which is awkward. It really needs to be centered vertically on the page. 
- Images:
    - I'm wondering if it wouldn't make sense to allow the images of the projects on the portfolio page to be clickable. Many users would expect to be able to click on them. And when you click on them, it might open a separate page with a larger version of the image. I can imagine users squinting to read the text on the page without having an opportunity to see the larger image and wishing that they could. On mobile in particular, the text could get very small. 
- Page Navigation:
    - This is not that big of a problem, but when you click on one of the preview tiles for a project on the hero page, it always takes you to the top of the portfolio page. This is awkward if you click on one of the tiles on the hero page that's below the fold on the portfolio page. You click on the hero page on a project expecting to see it on the next page, but you don't; you have to scroll down. I'm wondering if there could be something like a simple internal anchor link to cause the page to snap down to the lower projects when they're clicked on. 
- Favicon:
    - This is a tiny nitpicky point that doesn't have to be resolved in the MVP. You could file a fast-follow CFS issue if you want to for it. But I noticed that the favicon for the localhost version of the site is still the Astro logo. It would be nice to have either a small version of my cat logo or just a rendering of the letter G, something to make it clear that this is my personal page.
