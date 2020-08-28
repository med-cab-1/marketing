const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('./css/edu.css');


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