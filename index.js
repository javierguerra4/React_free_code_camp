/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/
function Header() {
  <header>
    <nav>
      <img src="images/react_logo.png" width="40px" />
    </nav>
  </header>;
}

function Page() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>
        <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
