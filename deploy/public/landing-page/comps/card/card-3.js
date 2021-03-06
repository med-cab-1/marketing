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
    --text-tertiary: #9D9487;

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







    <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="115.5" cy="115" r="115" fill="#2BC3D7"/>
        <circle cx="115" cy="114.5" r="87.5" fill="#51B9C9"/>
        <g filter="url(#filter0_d)">
        <rect x="64.5" y="58" width="102" height="113" rx="20" fill="url(#paint0_linear)"/>
        <g filter="url(#filter1_f)">
        <rect x="70.5" y="62.9141" width="90.913" height="103.174" rx="20" fill="url(#paint1_linear)" fill-opacity="0.6"/>
        <rect x="70.25" y="62.6641" width="91.413" height="103.674" rx="20.25" stroke="url(#paint2_linear)" stroke-opacity="0.52" stroke-width="0.5" stroke-linecap="round"/>
        </g>
        <g filter="url(#filter2_f)">
        <rect x="74.5" y="62.9121" width="81" height="20" rx="8" fill="url(#paint3_linear)" fill-opacity="0.9"/>
        </g>
        <path d="M162.067 90.5056V93.0738C162.067 93.4305 161.942 93.7337 161.692 93.9834C161.442 94.2331 161.138 94.3579 160.781 94.3579H155.213V99.9223C155.213 100.279 155.088 100.582 154.838 100.832C154.588 101.082 154.285 101.206 153.928 101.206H151.358C151.001 101.206 150.697 101.082 150.447 100.832C150.197 100.582 150.073 100.279 150.073 99.9223V94.3579H144.504C144.147 94.3579 143.843 94.2331 143.594 93.9834C143.344 93.7337 143.219 93.4305 143.219 93.0738V90.5056C143.219 90.1489 143.344 89.8457 143.594 89.5961C143.843 89.3464 144.147 89.2215 144.504 89.2215H150.073V83.6571C150.073 83.3004 150.197 82.9973 150.447 82.7476C150.697 82.4979 151.001 82.373 151.358 82.373H153.928C154.285 82.373 154.588 82.4979 154.838 82.7476C155.088 82.9973 155.213 83.3004 155.213 83.6571V89.2215H160.781C161.138 89.2215 161.442 89.3464 161.692 89.5961C161.942 89.8457 162.067 90.1489 162.067 90.5056Z" fill="white" stroke="url(#paint4_angular)"/>
        <path d="M152.656 95V93.605C152.812 93.839 153.125 94.127 153.741 94.343C153.741 94.343 153.584 93.83 153.144 93.485C153.55 93.569 154.162 93.557 155 93.2C155 93.2 154.228 92.777 153.35 92.891C153.847 92.6 154.469 92.024 154.947 90.833C154.947 90.833 153.541 91.202 152.841 92.342C153.475 90.872 152.5 89 152.5 89C151.741 90.641 151.903 91.73 152.15 92.33C151.447 91.199 150.053 90.833 150.053 90.833C150.531 92.024 151.153 92.6 151.65 92.891C150.772 92.777 150 93.2 150 93.2C150.838 93.557 151.45 93.569 151.856 93.485C151.416 93.83 151.259 94.343 151.259 94.343C151.875 94.127 152.188 93.839 152.344 93.605V95H152.656Z" fill="#04AB9A" fill-opacity="0.74"/>
        <path d="M88.6562 103.875L98.5 130.031L108.32 103.875H115.984V138H110.078V126.75L110.664 111.703L100.586 138H96.3438L86.2891 111.727L86.875 126.75V138H80.9688V103.875H88.6562ZM149.055 126.891C148.711 130.531 147.367 133.375 145.023 135.422C142.68 137.453 139.562 138.469 135.672 138.469C132.953 138.469 130.555 137.828 128.477 136.547C126.414 135.25 124.82 133.414 123.695 131.039C122.57 128.664 121.984 125.906 121.938 122.766V119.578C121.938 116.359 122.508 113.523 123.648 111.07C124.789 108.617 126.422 106.727 128.547 105.398C130.688 104.07 133.156 103.406 135.953 103.406C139.719 103.406 142.75 104.43 145.047 106.477C147.344 108.523 148.68 111.414 149.055 115.148H143.148C142.867 112.695 142.148 110.93 140.992 109.852C139.852 108.758 138.172 108.211 135.953 108.211C133.375 108.211 131.391 109.156 130 111.047C128.625 112.922 127.922 115.68 127.891 119.32V122.344C127.891 126.031 128.547 128.844 129.859 130.781C131.188 132.719 133.125 133.688 135.672 133.688C138 133.688 139.75 133.164 140.922 132.117C142.094 131.07 142.836 129.328 143.148 126.891H149.055Z" fill="white"/>
        <path d="M88.6562 103.875L89.1242 103.699L89.0023 103.375H88.6562V103.875ZM98.5 130.031L98.032 130.207L98.5006 131.452L98.9681 130.207L98.5 130.031ZM108.32 103.875V103.375H107.974L107.852 103.699L108.32 103.875ZM115.984 103.875H116.484V103.375H115.984V103.875ZM115.984 138V138.5H116.484V138H115.984ZM110.078 138H109.578V138.5H110.078V138ZM110.078 126.75L109.579 126.731L109.578 126.74V126.75H110.078ZM110.664 111.703L111.164 111.723L110.197 111.524L110.664 111.703ZM100.586 138V138.5H100.93L101.053 138.179L100.586 138ZM96.3438 138L95.8768 138.179L95.9997 138.5H96.3438V138ZM86.2891 111.727L86.756 111.548L85.7894 111.746L86.2891 111.727ZM86.875 126.75H87.375V126.74L87.3746 126.731L86.875 126.75ZM86.875 138V138.5H87.375V138H86.875ZM80.9688 138H80.4688V138.5H80.9688V138ZM80.9688 103.875V103.375H80.4688V103.875H80.9688ZM88.1883 104.051L98.032 130.207L98.968 129.855L89.1242 103.699L88.1883 104.051ZM98.9681 130.207L108.788 104.051L107.852 103.699L98.0319 129.856L98.9681 130.207ZM108.32 104.375H115.984V103.375H108.32V104.375ZM115.484 103.875V138H116.484V103.875H115.484ZM115.984 137.5H110.078V138.5H115.984V137.5ZM110.578 138V126.75H109.578V138H110.578ZM110.578 126.769L111.164 111.723L110.164 111.684L109.579 126.731L110.578 126.769ZM110.197 111.524L100.119 137.821L101.053 138.179L111.131 111.882L110.197 111.524ZM100.586 137.5H96.3438V138.5H100.586V137.5ZM96.8107 137.821L86.756 111.548L85.8221 111.905L95.8768 138.179L96.8107 137.821ZM85.7894 111.746L86.3754 126.769L87.3746 126.731L86.7887 111.707L85.7894 111.746ZM86.375 126.75V138H87.375V126.75H86.375ZM86.875 137.5H80.9688V138.5H86.875V137.5ZM81.4688 138V103.875H80.4688V138H81.4688ZM80.9688 104.375H88.6562V103.375H80.9688V104.375ZM149.055 126.891L149.552 126.938L149.604 126.391H149.055V126.891ZM145.023 135.422L145.351 135.8L145.352 135.798L145.023 135.422ZM128.477 136.547L128.21 136.97L128.214 136.972L128.477 136.547ZM121.938 122.766H121.437L121.438 122.773L121.938 122.766ZM128.547 105.398L128.283 104.974L128.282 104.974L128.547 105.398ZM149.055 115.148V115.648H149.607L149.552 115.098L149.055 115.148ZM143.148 115.148L142.652 115.205L142.702 115.648H143.148V115.148ZM140.992 109.852L140.646 110.212L140.651 110.217L140.992 109.852ZM130 111.047L129.597 110.751L129.597 110.751L130 111.047ZM127.891 119.32L127.391 119.316V119.32H127.891ZM129.859 130.781L129.445 131.062L129.447 131.064L129.859 130.781ZM143.148 126.891V126.391H142.708L142.652 126.827L143.148 126.891ZM148.557 126.844C148.223 130.381 146.925 133.097 144.695 135.045L145.352 135.798C147.809 133.653 149.199 130.682 149.552 126.938L148.557 126.844ZM144.696 135.044C142.464 136.978 139.474 137.969 135.672 137.969V138.969C139.651 138.969 142.895 137.928 145.351 135.8L144.696 135.044ZM135.672 137.969C133.035 137.969 130.729 137.348 128.739 136.121L128.214 136.972C130.38 138.308 132.871 138.969 135.672 138.969V137.969ZM128.743 136.124C126.767 134.881 125.235 133.121 124.147 130.825L123.243 131.253C124.406 133.707 126.061 135.619 128.21 136.97L128.743 136.124ZM124.147 130.825C123.058 128.526 122.483 125.841 122.437 122.758L121.438 122.773C121.485 125.971 122.082 128.802 123.243 131.253L124.147 130.825ZM122.438 122.766V119.578H121.438V122.766H122.438ZM122.438 119.578C122.438 116.419 122.997 113.657 124.102 111.281L123.195 110.86C122.018 113.39 121.438 116.3 121.438 119.578H122.438ZM124.102 111.281C125.205 108.909 126.776 107.095 128.812 105.822L128.282 104.974C126.068 106.358 124.373 108.326 123.195 110.86L124.102 111.281ZM128.81 105.823C130.863 104.55 133.239 103.906 135.953 103.906V102.906C133.074 102.906 130.512 103.591 128.283 104.974L128.81 105.823ZM135.953 103.906C139.625 103.906 142.528 104.902 144.714 106.85L145.38 106.103C142.972 103.958 139.813 102.906 135.953 102.906V103.906ZM144.714 106.85C146.898 108.796 148.192 111.56 148.557 115.198L149.552 115.098C149.168 111.268 147.789 108.251 145.38 106.103L144.714 106.85ZM149.055 114.648H143.148V115.648H149.055V114.648ZM143.645 115.091C143.358 112.583 142.614 110.68 141.333 109.486L140.651 110.217C141.683 111.18 142.377 112.807 142.652 115.205L143.645 115.091ZM141.338 109.491C140.073 108.277 138.248 107.711 135.953 107.711V108.711C138.095 108.711 139.631 109.239 140.646 110.212L141.338 109.491ZM135.953 107.711C133.234 107.711 131.092 108.718 129.597 110.751L130.403 111.343C131.689 109.595 133.516 108.711 135.953 108.711V107.711ZM129.597 110.751C128.134 112.746 127.422 115.626 127.391 119.316L128.391 119.325C128.421 115.734 129.116 113.097 130.403 111.343L129.597 110.751ZM127.391 119.32V122.344H128.391V119.32H127.391ZM127.391 122.344C127.391 126.078 128.053 129.006 129.445 131.062L130.273 130.501C129.041 128.681 128.391 125.984 128.391 122.344H127.391ZM129.447 131.064C130.877 133.15 132.976 134.188 135.672 134.188V133.188C133.274 133.188 131.498 132.287 130.272 130.499L129.447 131.064ZM135.672 134.188C138.065 134.188 139.956 133.651 141.255 132.49L140.589 131.744C139.544 132.678 137.935 133.188 135.672 133.188V134.188ZM141.255 132.49C142.555 131.329 143.325 129.447 143.644 126.954L142.652 126.827C142.347 129.209 141.632 130.812 140.589 131.744L141.255 132.49ZM143.148 127.391H149.055V126.391H143.148V127.391Z" fill="#6A6A6A" fill-opacity="0.24"/>
        </g>
        <defs>
        <filter id="filter0_d" x="60.5" y="58" width="110" height="121" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter1_f" x="64" y="56.4141" width="103.913" height="116.174" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur"/>
        </filter>
        <filter id="filter2_f" x="68.5" y="56.9121" width="93" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur"/>
        </filter>
        <linearGradient id="paint0_linear" x1="133.5" y1="91.5" x2="120.5" y2="126" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0A9EB5"/>
        <stop offset="0.508373" stop-color="#0E9DB3" stop-opacity="0.78"/>
        <stop offset="1" stop-color="#0F91A5" stop-opacity="0.94"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="115.957" y1="62.9141" x2="115.957" y2="157.153" gradientUnits="userSpaceOnUse">
        <stop offset="0.203125" stop-color="#04C6F2" stop-opacity="0"/>
        <stop offset="0.5" stop-color="#04C6F2" stop-opacity="0.448819"/>
        <stop offset="0.880208" stop-color="#04BBE4" stop-opacity="0.72"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="115.5" y1="145.001" x2="115.957" y2="166.088" gradientUnits="userSpaceOnUse">
        <stop offset="0.552083" stop-color="#229DAD" stop-opacity="0.685677"/>
        <stop offset="0.619792" stop-color="#1C99AA"/>
        <stop offset="1" stop-color="#28A1B0"/>
        </linearGradient>
        <linearGradient id="paint3_linear" x1="115" y1="63.5494" x2="115.147" y2="82.9979" gradientUnits="userSpaceOnUse">
        <stop offset="0.0254978" stop-color="#58C1D8"/>
        <stop offset="0.699104" stop-color="#9EDFED" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="paint4_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(152.643 91.7897) rotate(-146.33) scale(3.99651 3.08862)">
        <stop offset="0.289194" stop-color="#28AA6D"/>
        <stop offset="0.560407" stop-color="#13C097" stop-opacity="0.7"/>
        <stop offset="0.65695" stop-color="#14A087" stop-opacity="0.494792"/>
        </radialGradient>
        </defs>
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

window.customElements.define('card-3', WebComp);