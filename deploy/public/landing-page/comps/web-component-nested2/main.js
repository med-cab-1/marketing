import {Button} from './button.js';

// =================================================

const template = document.createElement('template');
const x = 'josh';

template.innerHTML = `
    Inside main4.js:
    <button-comp name="${x}"></button-comp>
`;

class WebComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const deep_copy = true; // include descendants
        this.shadowRoot.appendChild(template.content.cloneNode(deep_copy));
    }
}



window.customElements.define('web-comp', WebComp);