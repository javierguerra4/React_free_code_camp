/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function Page() {
  return (
    <div>
      <ol>
        <li>It's fun</li>
        <li>It's hireable</li>
        <li>I want to make cool websites</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
