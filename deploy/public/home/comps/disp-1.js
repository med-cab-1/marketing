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
            background-image: url('img/dispensary-1.png');

        }

        ._bottom_ {
            border: solid orange 5px;
            flex: 1;
        }
        ._bottom_ > h5 {
            font-size: 2.4rem;
            text-align: center;
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
                    <h5>Silver Haze</h5>
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

window.customElements.define('disp-1', WebComp);