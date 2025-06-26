# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.



## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day's bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page
- **Bonus**: See dynamically generated bars based on the data provided in the local JSON file

### Screenshot

![](./preview.jpg)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- Mobile-first workflow
- Dynamic data loading from JSON

### What I learned

This project was a great opportunity to practice creating interactive data visualizations with vanilla JavaScript. I learned how to:

- Dynamically generate chart bars based on JSON data
- Create interactive tooltips that appear on hover
- Highlight the current day's bar with a different color
- Implement responsive design for different screen sizes
- Calculate proportional heights for chart bars

One of the most interesting parts was calculating the proper height proportions for the bars:

```js
const getHeightInPixels = (amount) => {
  const containerHeight = 150; // Usable height in pixels
  const minHeight = 20; // Minimum height for the smallest bar

  // Calculate height with a slight curve to match the design
  return Math.floor(minHeight + ((amount / maxAmount) * (containerHeight - minHeight)));
};
```

For the CSS, I'm particularly proud of the hover effects and tooltip styling:

```css
.chart-bar:hover {
  background-color: hsl(10, 79%, 75%); /* Lighter shade on hover */
}

.chart-bar-tooltip {
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background-color: hsl(25, 47%, 15%);
  color: white;
  padding: 0.5rem 0.6rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 0.85rem;
  display: none;
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}
```

### Continued development

In future projects, I'd like to focus on:

- Implementing more complex data visualizations
- Adding animations to the chart bars
- Exploring more advanced JavaScript techniques for data manipulation
- Improving accessibility for data visualization components

## Author

- Frontend Mentor - [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)
