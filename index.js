/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="images/react_logo.png" width="40px;"></img>
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React!</h1>
      <ol>
        <li>It's fun</li>
        <li>It's hireable</li>
        <li>I want to make cool websites</li>
      </ol>
      <footer>
        <small>© 2022 Guerra development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
