const template = document.createElement('template');
template.innerHTML = `
    <h3>web-comp</h3>
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




// =================================================




const template2 = document.createElement('template');
template2.innerHTML = `
    <h3>web-comp2</h3>
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



window.customElements.define('web-comp3', WebComp2);





