const template = document.createElement('template');
template.innerHTML = `
    <style>
        #_hero_ {
        height: 100%;
        height: 200px;
        position: relative;
        }

        #_hero_ > ._image-container_ {

        width: 100%;
        height: 100%;
        position: absolute;

        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: url('./img/home-hero.png');

        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;

        }

        #_hero_ > ._overlay_ {
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.35);
        position: absolute;
        }

        #_hero_  h1 { 
            color: var(--text-primary);
            z-index: 1;
            font-size: var(--h1);
        }
    </style>



    <section id="_hero_">
        <div class="_image-container_">
            <h1>Med Cabinet</h1>
        </div>
        <div class="_overlay_"></div>
    </section>
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

window.customElements.define('hero-comp', WebComp);