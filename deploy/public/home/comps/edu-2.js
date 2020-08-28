const template = document.createElement('template');
template.innerHTML = `
    <style>

        /* fill remaing space vertically with flexbox: */
        /* https://codepen.io/JoshuaHolloway/pen/rNemPom */

        ._popular-strain_{
            height: 500px;
            /* width: 500px; */
            border: solid red 5px;
            display: flex;
            flex-direction: column;
            
            background-color: var(--color-primary);
        }

        ._top_ {
            border: solid blue 5px;
            height: 70%;

            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-image: url('img/edu-2.png');

        }

        ._bottom_ {
            border: solid orange 5px;
            flex: 1;
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


            <div class="_popular-strain_">

                <div class="_top_">
                </div>

                <div class="_bottom_">
                    <p>Silver Haze</p>
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

window.customElements.define('edu-2', WebComp);