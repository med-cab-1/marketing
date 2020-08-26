const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        button {
            background: linear-gradient(180deg, #086571 0%, #044A53 74.48%);
            border-radius: 5px;
            padding: 10px 15px;
        }

        button > p {
            color: white;
            font-family: Roboto;
            /* font-family: 'Chelsea Market', cursive; */
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
        }
    </style>



    <button>
        <p>
            Find a strain
        </p>
    </button>
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

window.customElements.define('button-comp2', WebComp);