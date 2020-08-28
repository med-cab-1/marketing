const template = document.createElement('template');
template.innerHTML = `
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
:root {
    --color-primary: #1F2325;
    --color-secondary: #53762B;
    --color-tertiary: #1D2952;
    --color-4: #2B2C2C;

    --text-primary: #E8E6E2;
    --text-secondary: #C7C3BC;
    --test-tertiary: #9D9487;

    /* --debug: solid; */
    --debug: none;

    --debug-1: 5px red     var(--debug);
    --debug-2: 5px blue    var(--debug);
    --debug-3: 5px orange  var(--debug);
    --debug-4: 5px green   var(--debug);
    --debug-5: 5px yellow  var(--debug);
    --debug-6: 5px purple  var(--debug);

    --card-width: 256px;

    --border-radius: 10px;
}

        .card-container{
            /* width: fit-content; */
            width: 256px;
            border: solid black 1px;
            border-radius: 10px;
        }

        .ThreeD-Container {
            perspective: 600px;
            height: 256px;
            width: 256px;
            border-radius: 10px 10px 0 0 ;
        }
        .Card {
            border: var(--debug-border-3);
            height: 100%;
            width: 100%;
            cursor: pointer;
            transform-style: preserve-3d;

            position: relative;
            transition: 0.5s transform ease;
            border-radius: inherit;
        }

        .ThreeD-Container:hover .Card{
            transform: rotateY(180deg);

        }
        .Card-Face {
            height: 100%;
            width: 100%;
            position: absolute;
            backface-visibility: hidden;
            border: solid black 1px;

        }
        .Image-Container {
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

        }
        .Color-Overlay {
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
        }
        .Image-Container > h4 {
            z-index: 1;
        }
        .Card-Face-Front {
            background: var(--background-6);
            border-radius: inherit;
            background: var(--color-primary, #1F2325);
        }
        .Card-Face-Back {
            transform: rotateY(180deg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-color: hotpink;
            padding: 15%;
            text-align: center;
            border-radius: inherit;
            background: var(--color-tertiary, #1D2952);
        }
        .Center {
            display: grid;
            place-items: center;
        }

        .card-title-container {
            display: grid;
            place-items: center;
            height: 100px;
            width: 100%;
            border: solid black 1px;
            border-radius: 0 0 10px 10px;
            background: var(--color-primary, #1F2325);
            // border: solid red 5px;

        }
        .card-title-container > .center-text {
            
            height: 100%;
            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: space-around;

            text-align: center;

            // border: solid blue 5px;
        }

        .card-title-container > .center-text > h5 {
            font-size: 20px;
            color: var(--text-primary, #E8E6E2);
        }
        .card-title-container > .center-text > p {
            font-size: 14px;
            color: var(--text-secondary, #C7C3BC);
        }

    </style>
    <div class="card-container">
        <div class="ThreeD-Container">
            <div class="Card">
                <div class="Card-Face Card-Face-Front">
                    <div class="Image-Container Center">                       







<svg width="230" height="230" viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="115" cy="115" r="115" fill="#2BC3D7"/>
<circle cx="115.5" cy="115.5" r="87.5" fill="#45C7DB"/>
<circle cx="115" cy="115" r="65" fill="#74D1E4"/>
<circle cx="115.5" cy="115.5" r="47.5" fill="#DFFAFE"/>
<path d="M113.562 144V130.515C112.125 132.777 109.25 135.561 103.586 137.649C103.586 137.649 105.024 132.69 109.077 129.355C105.34 130.167 99.705 130.051 92 126.6C92 126.6 99.1012 122.511 107.18 123.613C102.609 120.8 96.8875 115.232 92.4888 103.719C92.4888 103.719 105.426 107.286 111.866 118.306C106.03 104.096 115 86 115 86C121.986 101.863 120.491 112.39 118.22 118.19C124.689 107.257 137.511 103.719 137.511 103.719C133.112 115.232 127.391 120.8 122.82 123.613C130.899 122.511 138 126.6 138 126.6C130.295 130.051 124.66 130.167 120.923 129.355C124.976 132.69 126.414 137.649 126.414 137.649C120.75 135.561 117.875 132.777 116.438 130.515V144H113.562Z" fill="#04AB9A" fill-opacity="0.81"/>
</svg>



                    
                    </div>
                </div> 
                <div class="Card-Face Card-Face-Back Center">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident dolorem sit doloremque eos dolore...
                    </p>
                </div>
            </div>
        </div>

        <div class="card-title-container">
            <div class="center-text">
                <h5>Find your strain</h5>
                <p>Find strains based on their effects and taste in a database of thousands</p>
            </div>
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

window.customElements.define('card-2', WebComp);