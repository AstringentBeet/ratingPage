# Frontend Mentor - Interactive rating component solution
This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Progress log](#progress-log)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
Does their really need to be an explanation for this? Besides being a basic, responsive rating page, there isn't really anything else to say about it.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
The first step is to create a mobile page.

### Progress Log

#### 05/16
Created the first half of the main main layout with a focus on the mobile page. I decided to go with an unordered list  list that mimics buttons, adding the `:hover`, `:focus`, and `:active`pseudo-elements to add the color and resize effects.
The 'thank you' section has the basic outline but I'll deal with that more tomorrow.

#### 05/17
I recently watched a video that reminded me that HTML has `<input>` tags that gather user information, specifically the radio type. So, I'm redoing the rating selection to remove the need of overstyling a simple unordered list (which is more commonly used for navigation).

#### 05/23;1926
Now that I'm implenting Javascript into the mix, I'm now realizing that having pseudo-elements is a CSS-only type of deal. Sure, there are ways to work around that, but it's far more work than it's worth. I'm going to change the HTML elements into buttons, and rewrite the CSS within the pages. This'll be fun...
#### 05/23;2008
That was a colossal failure, so I'm going back to radio inputs, but placing the numbers within that `<label>` tags themselves.

#### 05/25
I decided to replace `document.querySelector(input[type="radio"][name="rate"]:checked);` with a more verbose, but more flexbile version:
```js
submit.addEventListener('click', e => {
  let radio = document.querySelectorAll("input[name='rate']");
      let userSelection;
      e.preventDefault();
      radio.forEach(radioButton => {
          if(radioButton.checked){
              userSelection = radioButton.value;
              setTimeout(function () {
                  score.innerHTML = userSelection;
                  survey.className = "hidden";
                  thxPage.classList.remove("hidden");
                  thxPage.style.animation = "fadein 1.5s ease-out forwards";
              }, 250);
          }
      })
});
```
It would be best to show the first half of the function instead of a snippet so it can make more sense. Nonetheless, using the input Checkbox Checked property allowed the function to determine whehter the button on the screen was actually checked. If it wasn't checked:
```js
/*continued from previous function*/
else if(radioButton.checked === false) {
            function error (){
                document.querySelector(".submit").className = "submit";
                window.requestAnimationFrame(function(time){
                    window.requestAnimationFrame(function(time){
                        document.querySelector(".submit").classList.toggle("error")
                    })
                })
            }
            error();
        };
```

### Built with

- Semantic HTML5 markup
- CSS
- Vanilla Javascript
- Flexbox

### What I learned

- How to better use Flexbox
- Input types and how to manipulate them via Javascript
- The DOM ClassList.toggle() method.
- Keyframes animation (just the basics)


### Useful resources

- The Youtube channel, CodingNepal, was a [tremendous inspiration for both the HTML and CSS layout](https://www.youtube.com/watch?v=rw3eZ6XodN8). The best part about this video is that there isn't any talking or explaining, as it is self-explanatory. Instead of being over fifty minutes, it's a brief sixteen minutes long. There needs to be more channels such as this one.

- Mozilla also had a wonderful tip that helped me figure out how to [run a keyframes animation multiple times](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips). 

## Author

- Website - [Alex](https://www.your-site.com)
- Frontend Mentor - [@AstringentBeet](https://www.frontendmentor.io/profile/AstringentBeet)

