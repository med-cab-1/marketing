const template = document.createElement('template');
template.innerHTML = `
    <style>

        /* fill remaing space vertically with flexbox: */
        /* https://codepen.io/JoshuaHolloway/pen/rNemPom */

        ._container_{
            overflow: hidden;
            border-radius: 20px;
            height: 500px;
            // border: solid red 5px;
            display: flex;
            flex-direction: column;
            background-color: var(--color-primary);
            transition: 0.5s;
        }

        ._container_:hover {
            -webkit-box-shadow: 17px 14px 21px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 17px 14px 21px 0px rgba(0,0,0,0.75);
            box-shadow: 17px 14px 21px 0px rgba(0,0,0,0.75);
        }

        ._top_ {
            // border: solid blue 5px;
            height: 70%;

            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-image: url('img/edu-1.png');

        }

        ._bottom_ {
            padding: 0 20%;
            // border: solid orange 5px;
        }
        ._bottom_ > p {
            font-size: 24px;
            text-align: center;
            color: white;
        }

        ._top_, ._bottom_ {
            display: grid;
            place-items: center;
        }

    </style>


            <div class="_container_">

                <div class="_top_">
                </div>

                <div class="_bottom_">
                    <p>What is cannabis and what is cannabis strain?</p>
                </div>
                
            </div>

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

window.customElements.define('edu-1', WebComp);