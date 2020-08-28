const template = document.createElement('template');
template.innerHTML = `
    <style>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
    body {
     margin:0;
     padding:0;
     box-sizing: border-box;
 }
 html{
     font-size: 10px;
     font-family: "Roboto",sans-serif;
 }
 
 ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  background-color: #1f2325;
}

 a{
    text-decoration: none;
    color: #fff;
 }
 .conatinernav{
    /* border:red solid 1px; */
    font-family: "montserrat",sans-serif;
    border-radius: 10px;
    padding: .012rem;
    width: 100%;
    font-size: 14px;
    background-color: #1f2325;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
           0 10px 10px rgba(0,0,0,0.22);
 }
.navbar{
    background-color: #1f2325;
    color: #679437;
    padding: 1.55em;
}

#_right_nav-item {
    display: flex;
    justify-content: flex-end;
    margin-right: 2%;
}

    </style>

    <nav id="_nav_">
        <ul class="conatinernav">
            <li><a class="navbar" href="/">Home</a></li>
            <li><a class="navbar" href="#">Products</a></li>
            <li><a class="navbar" href="/about">About</a></li>
            <li><a class="navbar" href="/contact">Contact</a></li>

            <div id="_right_nav-item">
                <li><a class="navbar" href="#">Login</a></li>
            </div>
        </ul>
    </nav>
`;

class WebComp extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        const deep_copy = true; // include descendants
        this.shadowRoot.appendChild(template.content.cloneNode(deep_copy));

        // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

        // this.innerHTML = ``;
    }
}

window.customElements.define('navbar-comp', WebComp);