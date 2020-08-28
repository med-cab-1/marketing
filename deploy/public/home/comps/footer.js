const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('./css/footer.css');
    </style>



    <footer id="_footer_">
        <div class="_social-container_">
            
            <a href="https://www.facebook.com/">
                <i class="fab fa-facebook-f fa-2x"></i>
            </a>
            
            <a href="https://twitter.com/home?lang=en">
                <i class="fab fa-twitter fa-2x"></i>
            </a>

            <a href="https://www.instagram.com/?hl=en">
                <i class="fab fa-instagram fa-2x"></i>
            </a>
            
        </div>
    </footer>
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

window.customElements.define('footer-comp', WebComp);