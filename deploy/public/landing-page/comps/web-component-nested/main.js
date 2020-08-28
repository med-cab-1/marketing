const template = document.createElement('template');
template.innerHTML = `
    <style>
        h3: {
            color: green;
        }
    </style>

    <h3>web-comp</h3>
`;

export class WebComp extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        const deep_copy = true; // include descendants
        this.shadowRoot.appendChild(template.content.cloneNode(deep_copy));
    }
}

window.customElements.define('web-comp', WebComp);
