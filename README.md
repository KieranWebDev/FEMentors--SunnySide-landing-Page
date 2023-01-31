# Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef).

# You can view the live site [here.](https://kieran-gill-sunny-side-landing-page.vercel.app/)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<p align="center">
  <img width="50%" src="./images/readmeScreenshots/sunnyside%20screenshot.png">
</p>

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://kieran-gill-sunny-side-landing-page.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Javascript
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- This was the first project where I created a simple hamburger menu, it was surprisingly easy to implement and only took a few lines of JavaScript.

- This website is fully responsive for mobile,tablet and desktop. The figma file provided did not include a tablet design, so I adapted the mobile design.

- I did my best to match the design brief for the mobile and desktop versions as closely as possible, and am pretty pleased with the results, but feel I can do better in the next project.

- I also added a function that opens links in a new tab for desktop and tablet only. (all the links will take you to pictures of cute dogs)

```
function openNewTabForDosktopAndTablet() {
links.forEach((link) => {
  if (window.innerWidth <= 550) {
    link.setAttribute('target', '_self');
  } else {
    link.setAttribute('target', '_blank');
  }
});
}
openNewTabForDosktopAndTablet();
```

- I had fun using flexbox and grid in this project as always.

- I used the css `clamp()` function for the first time in this project,definetly very useful function for responsive design.

### Continued development

In the upcoming weeks I plan to take a deep dive back into React. Thus I would like to rebuild this site using React soon.

## Author

- [Kieran Gill - Portfolio ](https://kieran-gill-portfolio.netlify.app/)
- [Frontend Mentor profile](hhttps://www.frontendmentor.io/profile/KieranWebDev)
- [LinkedIn](www.linkedin.com/in/kieran-gill)
