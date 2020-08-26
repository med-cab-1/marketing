import {WebComp} from './main.js';

// =================================================




const template2 = document.createElement('template');
template2.innerHTML = `
    Inside main4.js:
    <web-comp></web-comp>
`;

class WebComp2 extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        const deep_copy = true; // include descendants
        this.shadowRoot.appendChild(template2.content.cloneNode(deep_copy));
    }
}



window.customElements.define('web-comp4', WebComp2);