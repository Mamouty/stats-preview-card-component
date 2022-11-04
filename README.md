# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout depending on their device's screen size

### Screenshot

![](./public/Frontend%20Mentor%20Stats%20preview%20card%20component.png)

### Links

- Solution URL: [Stas Prview Card Component with React, Styled-Components and CSS Grid](https://www.frontendmentor.io/solutions/stas-prview-card-component-with-react-styledcomponents-and-css-grid-cCjJi3dq0h)
- Live Site URL: [Stats preview card component](https://mamouty.github.io/stats-preview-card-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

In this challenge I implemented the mapping function to render the stats components (which I called SPStats) automatically so that when a new stat is added or an existing one is modified it can be directly done inside stats js file which contains an array of objects representing them rather than to create manually a new component for each one. 

Down below is the code of the react component that uses the map() function:
```js
import stats from "../../stats";
import desktopImage from "../../images/image-header-desktop.jpg";
import mobileImage from "../../images/image-header-mobile.jpg"

function createStats(status, index) {
    return(
        <SPStats
         key={index}
         number={status.number}
         subject={status.subject}
        />
    );
}

function SPCard() {
    return (
        <Card>
            <picture>
                <source srcset={desktopImage} media="(min-width: 700px)" />
                <img src={mobileImage} alt={"People working in the office."} />
            </picture>
            <Layer />
            <SPDescription />
            <Stats>
                {stats.map(createStats)}
            </Stats>
        </Card>
    );
}

export default SPCard;
```

and below is the js file thats contains the data of the stats:

```js
const stats = [
    {
        number: "10k+",
        subject: "COMPANIES"
    },
    {
        number: "314",
        subject: "TEMPLATES"
    },
    {
        number: "12M+",
        subject: "QUERIES"
    }
]

export default stats;
```

### Continued development

I'm still new to the React.js library and the styled-components so I plan on keeping learning those for now.

### Useful resources

- [map() function React.js example ](https://codesandbox.io/s/mapping-components-forked-ip8q89?file=/src/contacts.js) - This is an example that Dr. Angela Yu used on her Web development bootcamp to explain to us the use of the map() function. I had to go back to it to refresh my memory on how to use it.
- [mdn map() function documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - for more explanation about the function.

## Author
- Frontend Mentor - [@Mamouty](https://www.frontendmentor.io/profile/Mamouty)
- LinkedIn - [Mahmoud Guefri](https://www.linkedin.com/in/mahmoud-guefri-6b0269193/)


