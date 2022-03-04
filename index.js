// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

var newH1 = document.createElement("h1");

var newContent = document.createTextNode("Hello from Rick and Morty!");

newH1.appendChild(newContent);

var currentId = document.getElementById("root");
document.body.insertBefore(newH1, currentId);

// Instructor solution
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);
