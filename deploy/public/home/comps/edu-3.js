const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('./css/card.css');

        ._top_ {
            background-image: url('./img/edu-3.png');
        }
    </style>


    <div class="_container_">

        <div class="_top_">
        </div>

        <div class="_bottom_">
            <p>A comparison of CBD and THC</p>
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

window.customElements.define('edu-3', WebComp);