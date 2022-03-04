/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
const page = (
  <div>
    <nav src="images/react_logo.png"></nav>
    <h1>Fun facts about React</h1>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
