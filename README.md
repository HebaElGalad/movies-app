# Movies App

This project was created with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## App Details

### Rating component:

Create a component that displays rating in the form of stars. The rating scale is from 0 to 10. Number of stars should be rounded to the nearest half, for example:

- Rating 5 would display 2 stars and a half.
- Rating 5.5 would also display 2 stars and a half.
- Rating 5.6 would display 3 stars.
- Rating 8.1 would display 4 stars (ignore what's on the design, it's not correct).

_Explanation:_
5 / 10 = 0.5, and 0.5 \* 5 stars = 2.5
5.5 / 10 = 0.55, and 0.55 \* 5 stars = 2.75 (rounds to lowest)
5.6 / 10 = 0.56, and 0.56 \* 5 stars = 2.8 stars (rounds to highest)

### Items counter:

Create a component that displays a heart icon (font awesome is already included) with a count badge.
The component accepts a 'max' and 'value' props. **The outline around the circle reflects the percentage of the current count over the max value**, for example:

value = 5 and max = 10 then the circle should be 50% filled
value = 4 and max = 6 then the circle should be 66.6% filled
value = 1 and max = 5 then the circle should be 20% filled

### Save button:

Create a simple button that accepts the label through its children prop.

### Header:

Create a header component that is composed of other components:

- Logo
- Nav
- Search

### Image: (no preview)

Create an image component that accepts the following props:

- src: URL of the image
- alt: Alternative text that describes the image

**The component should display a simple spinner and once the image loads the spinner should disappear and the image should fade in.**

### Simple card:

Create a simple card component (normal state on the right and hover state on the left).
**The rating component should slide in from the bottom when the user hovers over the card.**
The component should accept the following props:

- title
- image
- rating

### Fancy card:

Create a fancy card component that accepts the following props:

- title
- description
- image
- rating
- onButtonClick
- onClick (on title click)

**When the user hovers over the image, the image would flip (on the Y axis) and the description should appear on the back of the image.**

## Authors

The [app design](https://github.com/teefouad/levelup/tree/full-app) and idea credits are for **Mostafa Fouad**
