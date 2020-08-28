const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('./css/card.css');

        #_hero_ {
            height: 100%;
            width: 100%;
            position: relative;
        }
        ._image-container_ {
            background-image: url('./img/edu-1_small_MozJPEG.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

            height: 100%;
            width: 100%;
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

        #_hero_  svg,
        ._bottom_ p { 
            z-index: 1;
        }

        ._bottom_ p {
            color: var(--text-secondary);
            font-size: var(--h2);
        }

    </style>


    <div class="_container_">

        <div class="_top_">

            <section id="_hero_">
                <div class="_image-container_">


<svg width="86" height="96" viewBox="0 0 86 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<rect x="4" y="2" width="78" height="86" rx="20" fill="url(#paint0_angular)"/>
<g filter="url(#filter1_f)">
<rect x="8.58789" y="5.73926" width="69.5217" height="78.5217" rx="20" fill="url(#paint1_linear)" fill-opacity="0.6"/>
<rect x="8.33789" y="5.48926" width="70.0217" height="79.0217" rx="20.25" stroke="url(#paint2_linear)" stroke-opacity="0.52" stroke-width="0.5" stroke-linecap="round"/>
</g>
<g filter="url(#filter2_f)">
<rect x="13.9414" y="5.73926" width="57.6522" height="14.9565" rx="7.47826" fill="url(#paint3_linear)"/>
</g>
<path d="M31.1719 56.0469C30.349 57.1198 29.2083 57.9323 27.75 58.4844C26.2917 59.0365 24.6354 59.3125 22.7812 59.3125C20.875 59.3125 19.1875 58.8802 17.7188 58.0156C16.25 57.151 15.1146 55.9167 14.3125 54.3125C13.5208 52.6979 13.1094 50.8177 13.0781 48.6719V46.8906C13.0781 43.4531 13.901 40.7708 15.5469 38.8438C17.1927 36.9062 19.4896 35.9375 22.4375 35.9375C24.9688 35.9375 26.9792 36.5625 28.4688 37.8125C29.9583 39.0625 30.8542 40.8646 31.1562 43.2188H27.2812C26.8438 40.4792 25.2552 39.1094 22.5156 39.1094C20.7448 39.1094 19.3958 39.75 18.4688 41.0312C17.5521 42.3021 17.0781 44.1719 17.0469 46.6406V48.3906C17.0469 50.849 17.5625 52.7604 18.5938 54.125C19.6354 55.4792 21.0781 56.1562 22.9219 56.1562C24.9427 56.1562 26.3802 55.6979 27.2344 54.7812V50.3281H22.5469V47.3281H31.1719V56.0469ZM35.5156 59V36.25H42.2344C44.2448 36.25 46.026 36.6979 47.5781 37.5938C49.1406 38.4896 50.349 39.7604 51.2031 41.4062C52.0573 43.0521 52.4844 44.9375 52.4844 47.0625V48.2031C52.4844 50.3594 52.0521 52.2552 51.1875 53.8906C50.3333 55.526 49.1094 56.7865 47.5156 57.6719C45.9323 58.5573 44.1146 59 42.0625 59H35.5156ZM39.4688 39.4375V55.8438H42.0469C44.1198 55.8438 45.7083 55.1979 46.8125 53.9062C47.9271 52.6042 48.4948 50.7396 48.5156 48.3125V47.0469C48.5156 44.5781 47.9792 42.6927 46.9062 41.3906C45.8333 40.0885 44.276 39.4375 42.2344 39.4375H39.4688ZM60.375 50.5469V59H56.4219V36.25H65.125C67.6667 36.25 69.6823 36.9115 71.1719 38.2344C72.6719 39.5573 73.4219 41.3073 73.4219 43.4844C73.4219 45.7135 72.6875 47.4479 71.2188 48.6875C69.7604 49.9271 67.7135 50.5469 65.0781 50.5469H60.375ZM60.375 47.375H65.125C66.5312 47.375 67.6042 47.0469 68.3438 46.3906C69.0833 45.724 69.4531 44.7656 69.4531 43.5156C69.4531 42.2865 69.0781 41.3073 68.3281 40.5781C67.5781 39.8385 66.5469 39.4583 65.2344 39.4375H60.375V47.375Z" fill="white"/>
<path d="M31.1719 56.0469L31.5686 56.3512L31.6719 56.2165V56.0469H31.1719ZM14.3125 54.3125L13.8635 54.5326L13.8653 54.5361L14.3125 54.3125ZM13.0781 48.6719H12.5781L12.5782 48.6792L13.0781 48.6719ZM15.5469 38.8438L15.9271 39.1685L15.9279 39.1675L15.5469 38.8438ZM28.4688 37.8125L28.7902 37.4295L28.4688 37.8125ZM31.1562 43.2188V43.7188H31.7245L31.6522 43.1551L31.1562 43.2188ZM27.2812 43.2188L26.7875 43.2976L26.8548 43.7188H27.2812V43.2188ZM18.4688 41.0312L18.0637 40.7381L18.0632 40.7387L18.4688 41.0312ZM17.0469 46.6406L16.5469 46.6343V46.6406H17.0469ZM18.5938 54.125L18.1948 54.4265L18.1974 54.4299L18.5938 54.125ZM27.2344 54.7812L27.6002 55.1221L27.7344 54.9781V54.7812H27.2344ZM27.2344 50.3281H27.7344V49.8281H27.2344V50.3281ZM22.5469 50.3281H22.0469V50.8281H22.5469V50.3281ZM22.5469 47.3281V46.8281H22.0469V47.3281H22.5469ZM31.1719 47.3281H31.6719V46.8281H31.1719V47.3281ZM30.7751 55.7426C30.0171 56.7309 28.9579 57.4925 27.573 58.0168L27.927 58.952C29.4588 58.3721 30.6808 57.5086 31.5686 56.3512L30.7751 55.7426ZM27.573 58.0168C26.1808 58.5438 24.5861 58.8125 22.7812 58.8125V59.8125C24.6847 59.8125 26.4025 59.5291 27.927 58.952L27.573 58.0168ZM22.7812 58.8125C20.9534 58.8125 19.3555 58.3989 17.9724 57.5847L17.4651 58.4465C19.0195 59.3615 20.7966 59.8125 22.7812 59.8125V58.8125ZM17.9724 57.5847C16.5913 56.7717 15.521 55.6115 14.7597 54.0889L13.8653 54.5361C14.7082 56.2219 15.9087 57.5303 17.4651 58.4465L17.9724 57.5847ZM14.7614 54.0924C14.008 52.5557 13.6085 50.7507 13.5781 48.6646L12.5782 48.6792C12.6103 50.8847 13.0337 52.8401 13.8636 54.5326L14.7614 54.0924ZM13.5781 48.6719V46.8906H12.5781V48.6719H13.5781ZM13.5781 46.8906C13.5781 43.5296 14.3823 40.9772 15.9271 39.1685L15.1667 38.519C13.4198 40.5645 12.5781 43.3767 12.5781 46.8906H13.5781ZM15.9279 39.1675C17.4631 37.3602 19.6103 36.4375 22.4375 36.4375V35.4375C19.3689 35.4375 16.9223 36.4523 15.1658 38.52L15.9279 39.1675ZM22.4375 36.4375C24.8872 36.4375 26.772 37.0414 28.1473 38.1955L28.7902 37.4295C27.1863 36.0836 25.0503 35.4375 22.4375 35.4375V36.4375ZM28.1473 38.1955C29.5205 39.3478 30.3705 41.0239 30.6603 43.2824L31.6522 43.1551C31.3378 40.7052 30.3962 38.7772 28.7902 37.4295L28.1473 38.1955ZM31.1562 42.7188H27.2812V43.7188H31.1562V42.7188ZM27.775 43.1399C27.5437 41.6916 26.9973 40.5419 26.0882 39.7581C25.1784 38.9735 23.9679 38.6094 22.5156 38.6094V39.6094C23.8029 39.6094 24.7565 39.9301 25.4352 40.5154C26.1147 41.1013 26.5813 42.0063 26.7875 43.2976L27.775 43.1399ZM22.5156 38.6094C20.6066 38.6094 19.0971 39.31 18.0637 40.7381L18.8738 41.3244C19.6946 40.19 20.883 39.6094 22.5156 39.6094V38.6094ZM18.0632 40.7387C17.0608 42.1285 16.5788 44.1175 16.5469 46.6343L17.5468 46.647C17.5775 44.2263 18.0434 42.4757 18.8743 41.3238L18.0632 40.7387ZM16.5469 46.6406V48.3906H17.5469V46.6406H16.5469ZM16.5469 48.3906C16.5469 50.9118 17.0748 52.9444 18.1948 54.4265L18.9927 53.8235C18.0502 52.5764 17.5469 50.7862 17.5469 48.3906H16.5469ZM18.1974 54.4299C19.3421 55.9179 20.9371 56.6562 22.9219 56.6562V55.6562C21.2192 55.6562 19.9287 55.0404 18.9901 53.8201L18.1974 54.4299ZM22.9219 56.6562C24.999 56.6562 26.607 56.188 27.6002 55.1221L26.8686 54.4404C26.1534 55.2079 24.8864 55.6562 22.9219 55.6562V56.6562ZM27.7344 54.7812V50.3281H26.7344V54.7812H27.7344ZM27.2344 49.8281H22.5469V50.8281H27.2344V49.8281ZM23.0469 50.3281V47.3281H22.0469V50.3281H23.0469ZM22.5469 47.8281H31.1719V46.8281H22.5469V47.8281ZM30.6719 47.3281V56.0469H31.6719V47.3281H30.6719ZM35.5156 59H35.0156V59.5H35.5156V59ZM35.5156 36.25V35.75H35.0156V36.25H35.5156ZM47.5781 37.5938L47.3282 38.0268L47.3294 38.0275L47.5781 37.5938ZM51.1875 53.8906L50.7455 53.6569L50.7443 53.6591L51.1875 53.8906ZM47.5156 57.6719L47.2728 57.2348L47.2716 57.2355L47.5156 57.6719ZM39.4688 39.4375V38.9375H38.9688V39.4375H39.4688ZM39.4688 55.8438H38.9688V56.3438H39.4688V55.8438ZM46.8125 53.9062L46.4327 53.5811L46.4324 53.5814L46.8125 53.9062ZM48.5156 48.3125L49.0156 48.3168V48.3125H48.5156ZM36.0156 59V36.25H35.0156V59H36.0156ZM35.5156 36.75H42.2344V35.75H35.5156V36.75ZM42.2344 36.75C44.168 36.75 45.861 37.18 47.3282 38.0268L47.8281 37.1607C46.1911 36.2159 44.3216 35.75 42.2344 35.75V36.75ZM47.3294 38.0275C48.8062 38.8742 49.948 40.0732 50.7593 41.6366L51.6469 41.1759C50.75 39.4476 49.4751 38.105 47.8268 37.16L47.3294 38.0275ZM50.7593 41.6366C51.5715 43.2015 51.9844 45.0059 51.9844 47.0625H52.9844C52.9844 44.8691 52.5431 42.9027 51.6469 41.1759L50.7593 41.6366ZM51.9844 47.0625V48.2031H52.9844V47.0625H51.9844ZM51.9844 48.2031C51.9844 50.2914 51.5661 52.1046 50.7455 53.6569L51.6295 54.1243C52.538 52.4058 52.9844 50.4273 52.9844 48.2031H51.9844ZM50.7443 53.6591C49.9348 55.209 48.78 56.3975 47.2728 57.2348L47.7584 58.109C49.4387 57.1755 50.7318 55.8431 51.6307 54.1221L50.7443 53.6591ZM47.2716 57.2355C45.7722 58.074 44.0405 58.5 42.0625 58.5V59.5C44.1886 59.5 46.0924 59.0406 47.7597 58.1083L47.2716 57.2355ZM42.0625 58.5H35.5156V59.5H42.0625V58.5ZM38.9688 39.4375V55.8438H39.9688V39.4375H38.9688ZM39.4688 56.3438H42.0469V55.3438H39.4688V56.3438ZM42.0469 56.3438C44.2309 56.3438 45.9727 55.6581 47.1926 54.2311L46.4324 53.5814C45.4439 54.7377 44.0087 55.3438 42.0469 55.3438V56.3438ZM47.1923 54.2314C48.4099 52.809 48.9942 50.8133 49.0156 48.3168L48.0156 48.3082C47.9954 50.6658 47.4442 52.3994 46.4327 53.5811L47.1923 54.2314ZM49.0156 48.3125V47.0469H48.0156V48.3125H49.0156ZM49.0156 47.0469C49.0156 44.5143 48.4663 42.4976 47.2921 41.0727L46.5204 41.7086C47.492 42.8878 48.0156 44.642 48.0156 47.0469H49.0156ZM47.2921 41.0727C46.1042 39.631 44.3908 38.9375 42.2344 38.9375V39.9375C44.1613 39.9375 45.5624 40.546 46.5204 41.7086L47.2921 41.0727ZM42.2344 38.9375H39.4688V39.9375H42.2344V38.9375ZM60.375 50.5469V50.0469H59.875V50.5469H60.375ZM60.375 59V59.5H60.875V59H60.375ZM56.4219 59H55.9219V59.5H56.4219V59ZM56.4219 36.25V35.75H55.9219V36.25H56.4219ZM71.1719 38.2344L70.8399 38.6082L70.8412 38.6094L71.1719 38.2344ZM71.2188 48.6875L70.8963 48.3054L70.8949 48.3065L71.2188 48.6875ZM60.375 47.375H59.875V47.875H60.375V47.375ZM68.3438 46.3906L68.6756 46.7646L68.6785 46.762L68.3438 46.3906ZM68.3281 40.5781L67.977 40.9342L67.9796 40.9366L68.3281 40.5781ZM65.2344 39.4375L65.2423 38.9375H65.2344V39.4375ZM60.375 39.4375V38.9375H59.875V39.4375H60.375ZM59.875 50.5469V59H60.875V50.5469H59.875ZM60.375 58.5H56.4219V59.5H60.375V58.5ZM56.9219 59V36.25H55.9219V59H56.9219ZM56.4219 36.75H65.125V35.75H56.4219V36.75ZM65.125 36.75C67.5791 36.75 69.4648 37.387 70.8399 38.6082L71.5039 37.8605C69.8998 36.4359 67.7543 35.75 65.125 35.75V36.75ZM70.8412 38.6094C72.2233 39.8283 72.9219 41.4365 72.9219 43.4844H73.9219C73.9219 41.1781 73.1205 39.2863 71.5026 37.8594L70.8412 38.6094ZM72.9219 43.4844C72.9219 45.5924 72.2339 47.1765 70.8963 48.3054L71.5412 49.0696C73.1411 47.7193 73.9219 45.8346 73.9219 43.4844H72.9219ZM70.8949 48.3065C69.556 49.4446 67.6395 50.0469 65.0781 50.0469V51.0469C67.7876 51.0469 69.9648 50.4095 71.5426 49.0685L70.8949 48.3065ZM65.0781 50.0469H60.375V51.0469H65.0781V50.0469ZM60.375 47.875H65.125V46.875H60.375V47.875ZM65.125 47.875C66.6024 47.875 67.8124 47.5306 68.6756 46.7646L68.0119 46.0166C67.396 46.5632 66.4601 46.875 65.125 46.875V47.875ZM68.6785 46.762C69.549 45.9773 69.9531 44.8684 69.9531 43.5156H68.9531C68.9531 44.6628 68.6177 45.4706 68.009 46.0192L68.6785 46.762ZM69.9531 43.5156C69.9531 42.177 69.5404 41.0594 68.6767 40.2196L67.9796 40.9366C68.6158 41.5552 68.9531 42.3959 68.9531 43.5156H69.9531ZM68.6792 40.2221C67.8164 39.3713 66.6502 38.9599 65.2423 38.9376L65.2264 39.9374C66.4436 39.9568 67.3399 40.3058 67.9771 40.9341L68.6792 40.2221ZM65.2344 38.9375H60.375V39.9375H65.2344V38.9375ZM59.875 39.4375V47.375H60.875V39.4375H59.875Z" fill="#6A6A6A" fill-opacity="0.24"/>
<rect x="14" y="10" width="30" height="10" rx="3" fill="black" fill-opacity="0.02"/>
<path d="M16.249 18.8496H14.8955V11.0293H16.249V18.8496ZM19.0044 13.0381L19.042 13.7095C19.4717 13.1903 20.0356 12.9307 20.7339 12.9307C21.9442 12.9307 22.5601 13.6235 22.5815 15.0093V18.8496H21.2764V15.0845C21.2764 14.7157 21.1958 14.4435 21.0347 14.2681C20.8771 14.089 20.6175 13.9995 20.2559 13.9995C19.7295 13.9995 19.3374 14.2376 19.0796 14.7139V18.8496H17.7744V13.0381H19.0044ZM23.6719 15.9009C23.6719 15.0057 23.8796 14.2878 24.2949 13.7471C24.7103 13.2028 25.2671 12.9307 25.9653 12.9307C26.5812 12.9307 27.0789 13.1455 27.4585 13.5752V10.5996H28.7637V18.8496H27.582L27.5176 18.248C27.1273 18.7207 26.6063 18.957 25.9546 18.957C25.2743 18.957 24.7228 18.6831 24.3003 18.1353C23.8813 17.5874 23.6719 16.8426 23.6719 15.9009ZM24.9771 16.0137C24.9771 16.6045 25.0898 17.0664 25.3154 17.3994C25.5446 17.7288 25.8687 17.8936 26.2876 17.8936C26.8211 17.8936 27.2114 17.6554 27.4585 17.1792V14.6978C27.2186 14.2323 26.8319 13.9995 26.2983 13.9995C25.8758 13.9995 25.55 14.1678 25.3208 14.5044C25.0916 14.8374 24.9771 15.3405 24.9771 16.0137ZM31.5137 18.8496H30.2085V13.0381H31.5137V18.8496ZM30.1279 11.5288C30.1279 11.3283 30.1906 11.1618 30.3159 11.0293C30.4448 10.8968 30.6274 10.8306 30.8638 10.8306C31.1001 10.8306 31.2827 10.8968 31.4116 11.0293C31.5405 11.1618 31.605 11.3283 31.605 11.5288C31.605 11.7257 31.5405 11.8905 31.4116 12.0229C31.2827 12.1519 31.1001 12.2163 30.8638 12.2163C30.6274 12.2163 30.4448 12.1519 30.3159 12.0229C30.1906 11.8905 30.1279 11.7257 30.1279 11.5288ZM35.3271 17.915C35.653 17.915 35.9233 17.8201 36.1382 17.6304C36.353 17.4406 36.4676 17.2061 36.4819 16.9268H37.7119C37.6976 17.2884 37.5848 17.6268 37.3735 17.9419C37.1623 18.2534 36.8758 18.5005 36.5142 18.6831C36.1525 18.8657 35.7622 18.957 35.3433 18.957C34.5304 18.957 33.8859 18.6938 33.4097 18.1675C32.9334 17.6411 32.6953 16.9142 32.6953 15.9868V15.8525C32.6953 14.9681 32.9316 14.2609 33.4043 13.731C33.877 13.1974 34.5215 12.9307 35.3379 12.9307C36.029 12.9307 36.5911 13.133 37.0244 13.5376C37.4613 13.9386 37.6904 14.4668 37.7119 15.1221H36.4819C36.4676 14.7891 36.353 14.5151 36.1382 14.3003C35.9269 14.0854 35.6566 13.978 35.3271 13.978C34.9046 13.978 34.5788 14.132 34.3496 14.4399C34.1204 14.7443 34.0041 15.208 34.0005 15.8311V16.0405C34.0005 16.6707 34.1133 17.1416 34.3389 17.4531C34.568 17.7611 34.8975 17.915 35.3271 17.915ZM42.1699 18.8496C42.1126 18.7386 42.0625 18.5578 42.0195 18.3071C41.6042 18.7404 41.0957 18.957 40.4941 18.957C39.9105 18.957 39.4342 18.7905 39.0654 18.4575C38.6966 18.1245 38.5122 17.7127 38.5122 17.2222C38.5122 16.6027 38.7414 16.1283 39.1997 15.7988C39.6616 15.4658 40.3205 15.2993 41.1763 15.2993H41.9766V14.918C41.9766 14.6172 41.8924 14.3773 41.7241 14.1982C41.5558 14.0156 41.2998 13.9243 40.9561 13.9243C40.6589 13.9243 40.4154 13.9995 40.2256 14.1499C40.0358 14.2967 39.9409 14.4847 39.9409 14.7139H38.6357C38.6357 14.3952 38.7414 14.098 38.9526 13.8223C39.1639 13.543 39.4504 13.3245 39.812 13.167C40.1772 13.0094 40.5837 12.9307 41.0312 12.9307C41.7116 12.9307 42.2541 13.1025 42.6587 13.4463C43.0633 13.7865 43.271 14.2663 43.2817 14.8857V17.5068C43.2817 18.0296 43.3551 18.4468 43.502 18.7583V18.8496H42.1699ZM40.7358 17.9097C40.9937 17.9097 41.2354 17.847 41.4609 17.7217C41.6901 17.5964 41.862 17.4281 41.9766 17.2168V16.1211H41.2729C40.7896 16.1211 40.4261 16.2052 40.1826 16.3735C39.9391 16.5418 39.8174 16.7799 39.8174 17.0879C39.8174 17.3385 39.8997 17.5391 40.0645 17.6895C40.2327 17.8363 40.4565 17.9097 40.7358 17.9097Z" fill="#1000CE"/>
<path d="M16.249 18.8496V18.9496H16.349V18.8496H16.249ZM14.8955 18.8496H14.7955V18.9496H14.8955V18.8496ZM14.8955 11.0293V10.9293H14.7955V11.0293H14.8955ZM16.249 11.0293H16.349V10.9293H16.249V11.0293ZM16.249 18.7496H14.8955V18.9496H16.249V18.7496ZM14.9955 18.8496V11.0293H14.7955V18.8496H14.9955ZM14.8955 11.1293H16.249V10.9293H14.8955V11.1293ZM16.149 11.0293V18.8496H16.349V11.0293H16.149ZM19.0044 13.0381L19.1042 13.0325L19.099 12.9381H19.0044V13.0381ZM19.042 13.7095L18.9421 13.7151L18.9564 13.9697L19.119 13.7732L19.042 13.7095ZM22.5815 15.0093H22.6816L22.6815 15.0077L22.5815 15.0093ZM22.5815 18.8496V18.9496H22.6815V18.8496H22.5815ZM21.2764 18.8496H21.1764V18.9496H21.2764V18.8496ZM21.0347 14.2681L20.9596 14.3341L20.961 14.3357L21.0347 14.2681ZM19.0796 14.7139L18.9916 14.6663L18.9796 14.6885V14.7139H19.0796ZM19.0796 18.8496V18.9496H19.1796V18.8496H19.0796ZM17.7744 18.8496H17.6744V18.9496H17.7744V18.8496ZM17.7744 13.0381V12.9381H17.6744V13.0381H17.7744ZM18.9046 13.0437L18.9421 13.7151L19.1418 13.7039L19.1042 13.0325L18.9046 13.0437ZM19.119 13.7732C19.5289 13.2779 20.0642 13.0307 20.7339 13.0307V12.8307C20.0071 12.8307 19.4144 13.1026 18.965 13.6457L19.119 13.7732ZM20.7339 13.0307C21.3197 13.0307 21.7452 13.1977 22.0288 13.5168C22.3145 13.8382 22.471 14.3304 22.4816 15.0108L22.6815 15.0077C22.6706 14.3024 22.5084 13.7553 22.1783 13.3839C21.846 13.01 21.3583 12.8307 20.7339 12.8307V13.0307ZM22.4815 15.0093V18.8496H22.6815V15.0093H22.4815ZM22.5815 18.7496H21.2764V18.9496H22.5815V18.7496ZM21.3764 18.8496V15.0845H21.1764V18.8496H21.3764ZM21.3764 15.0845C21.3764 14.7038 21.2936 14.4022 21.1083 14.2004L20.961 14.3357C21.098 14.4849 21.1764 14.7275 21.1764 15.0845H21.3764ZM21.1097 14.202C20.9252 13.9923 20.6313 13.8995 20.2559 13.8995V14.0995C20.6037 14.0995 20.829 14.1858 20.9596 14.3341L21.1097 14.202ZM20.2559 13.8995C19.9771 13.8995 19.729 13.9627 19.5151 14.0926C19.3014 14.2224 19.1275 14.4154 18.9916 14.6663L19.1675 14.7615C19.2895 14.5361 19.4406 14.3719 19.6189 14.2636C19.7971 14.1553 20.0082 14.0995 20.2559 14.0995V13.8995ZM18.9796 14.7139V18.8496H19.1796V14.7139H18.9796ZM19.0796 18.7496H17.7744V18.9496H19.0796V18.7496ZM17.8744 18.8496V13.0381H17.6744V18.8496H17.8744ZM17.7744 13.1381H19.0044V12.9381H17.7744V13.1381ZM24.2949 13.7471L24.3742 13.808L24.3744 13.8077L24.2949 13.7471ZM27.4585 13.5752L27.3835 13.6414L27.5585 13.8395V13.5752H27.4585ZM27.4585 10.5996V10.4996H27.3585V10.5996H27.4585ZM28.7637 10.5996H28.8637V10.4996H28.7637V10.5996ZM28.7637 18.8496V18.9496H28.8637V18.8496H28.7637ZM27.582 18.8496L27.4826 18.8603L27.4922 18.9496H27.582V18.8496ZM27.5176 18.248L27.617 18.2374L27.5917 18.0012L27.4405 18.1844L27.5176 18.248ZM24.3003 18.1353L24.2209 18.196L24.2211 18.1963L24.3003 18.1353ZM25.3154 17.3994L25.2326 17.4555L25.2333 17.4565L25.3154 17.3994ZM27.4585 17.1792L27.5473 17.2253L27.5585 17.2036V17.1792H27.4585ZM27.4585 14.6978H27.5585V14.6735L27.5474 14.6519L27.4585 14.6978ZM25.3208 14.5044L25.4032 14.5611L25.4035 14.5607L25.3208 14.5044ZM23.7719 15.9009C23.7719 15.0208 23.976 14.3264 24.3742 13.808L24.2156 13.6862C23.7832 14.2491 23.5719 14.9906 23.5719 15.9009H23.7719ZM24.3744 13.8077C24.7704 13.2888 25.2975 13.0307 25.9653 13.0307V12.8307C25.2366 12.8307 24.6501 13.1168 24.2154 13.6864L24.3744 13.8077ZM25.9653 13.0307C26.5549 13.0307 27.0245 13.2349 27.3835 13.6414L27.5334 13.509C27.1334 13.0561 26.6075 12.8307 25.9653 12.8307V13.0307ZM27.5585 13.5752V10.5996H27.3585V13.5752H27.5585ZM27.4585 10.6996H28.7637V10.4996H27.4585V10.6996ZM28.6637 10.5996V18.8496H28.8637V10.5996H28.6637ZM28.7637 18.7496H27.582V18.9496H28.7637V18.7496ZM27.6815 18.839L27.617 18.2374L27.4181 18.2587L27.4826 18.8603L27.6815 18.839ZM27.4405 18.1844C27.0705 18.6324 26.5786 18.857 25.9546 18.857V19.057C26.634 19.057 27.1841 18.809 27.5947 18.3117L27.4405 18.1844ZM25.9546 18.857C25.3059 18.857 24.7834 18.598 24.3795 18.0742L24.2211 18.1963C24.6622 18.7682 25.2426 19.057 25.9546 19.057V18.857ZM24.3797 18.0745C23.9782 17.5495 23.7719 16.8286 23.7719 15.9009H23.5719C23.5719 16.8566 23.7845 17.6253 24.2209 18.196L24.3797 18.0745ZM24.8771 16.0137C24.8771 16.6156 24.9917 17.0999 25.2326 17.4555L25.3982 17.3433C25.188 17.033 25.0771 16.5934 25.0771 16.0137H24.8771ZM25.2333 17.4565C25.4822 17.8142 25.8376 17.9936 26.2876 17.9936V17.7936C25.8997 17.7936 25.607 17.6435 25.3975 17.3423L25.2333 17.4565ZM26.2876 17.9936C26.5696 17.9936 26.8193 17.9305 27.0326 17.8003C27.2458 17.6702 27.4168 17.4767 27.5473 17.2253L27.3697 17.1331C27.2531 17.3579 27.1054 17.5216 26.9284 17.6296C26.7514 17.7376 26.5391 17.7936 26.2876 17.7936V17.9936ZM27.5585 17.1792V14.6978H27.3585V17.1792H27.5585ZM27.5474 14.6519C27.4203 14.4054 27.2518 14.2158 27.0401 14.0884C26.8285 13.9611 26.5799 13.8995 26.2983 13.8995V14.0995C26.5503 14.0995 26.7618 14.1543 26.937 14.2598C27.112 14.3651 27.2568 14.5246 27.3696 14.7436L27.5474 14.6519ZM26.2983 13.8995C25.8442 13.8995 25.4868 14.083 25.2381 14.4481L25.4035 14.5607C25.6132 14.2526 25.9074 14.0995 26.2983 14.0995V13.8995ZM25.2384 14.4477C24.9924 14.8052 24.8771 15.3324 24.8771 16.0137H25.0771C25.0771 15.3486 25.1908 14.8696 25.4032 14.5611L25.2384 14.4477ZM31.5137 18.8496V18.9496H31.6137V18.8496H31.5137ZM30.2085 18.8496H30.1085V18.9496H30.2085V18.8496ZM30.2085 13.0381V12.9381H30.1085V13.0381H30.2085ZM31.5137 13.0381H31.6137V12.9381H31.5137V13.0381ZM30.3159 11.0293L30.2442 10.9596L30.2433 10.9606L30.3159 11.0293ZM31.4116 12.0229L31.4823 12.0937L31.4833 12.0927L31.4116 12.0229ZM30.3159 12.0229L30.2432 12.0917L30.2452 12.0937L30.3159 12.0229ZM31.5137 18.7496H30.2085V18.9496H31.5137V18.7496ZM30.3085 18.8496V13.0381H30.1085V18.8496H30.3085ZM30.2085 13.1381H31.5137V12.9381H30.2085V13.1381ZM31.4137 13.0381V18.8496H31.6137V13.0381H31.4137ZM30.2279 11.5288C30.2279 11.3511 30.2826 11.21 30.3886 11.098L30.2433 10.9606C30.0986 11.1136 30.0279 11.3055 30.0279 11.5288H30.2279ZM30.3876 11.099C30.4928 10.9909 30.6465 10.9306 30.8638 10.9306V10.7306C30.6084 10.7306 30.3969 10.8027 30.2442 10.9596L30.3876 11.099ZM30.8638 10.9306C31.081 10.9306 31.2348 10.9909 31.3399 11.099L31.4833 10.9596C31.3307 10.8027 31.1192 10.7306 30.8638 10.7306V10.9306ZM31.3399 11.099C31.4491 11.2112 31.505 11.3519 31.505 11.5288H31.705C31.705 11.3047 31.632 11.1124 31.4833 10.9596L31.3399 11.099ZM31.505 11.5288C31.505 11.7016 31.4494 11.8407 31.3399 11.9532L31.4833 12.0927C31.6316 11.9402 31.705 11.7499 31.705 11.5288H31.505ZM31.3409 11.9522C31.2359 12.0573 31.0818 12.1163 30.8638 12.1163V12.3163C31.1184 12.3163 31.3296 12.2464 31.4823 12.0937L31.3409 11.9522ZM30.8638 12.1163C30.6458 12.1163 30.4917 12.0573 30.3866 11.9522L30.2452 12.0937C30.398 12.2464 30.6091 12.3163 30.8638 12.3163V12.1163ZM30.3886 11.9542C30.2823 11.8419 30.2279 11.7024 30.2279 11.5288H30.0279C30.0279 11.7491 30.0989 11.9391 30.2433 12.0917L30.3886 11.9542ZM36.1382 17.6304L36.072 17.5554L36.1382 17.6304ZM36.4819 16.9268V16.8268H36.3869L36.3821 16.9216L36.4819 16.9268ZM37.7119 16.9268L37.8118 16.9307L37.816 16.8268H37.7119V16.9268ZM37.3735 17.9419L37.4563 17.998L37.4566 17.9976L37.3735 17.9419ZM36.5142 18.6831L36.4691 18.5938L36.5142 18.6831ZM33.4097 18.1675L33.3355 18.2346L33.4097 18.1675ZM33.4043 13.731L33.4789 13.7975L33.4791 13.7973L33.4043 13.731ZM37.0244 13.5376L36.9562 13.6107L36.9568 13.6113L37.0244 13.5376ZM37.7119 15.1221V15.2221H37.8152L37.8119 15.1188L37.7119 15.1221ZM36.4819 15.1221L36.382 15.1264L36.3861 15.2221H36.4819V15.1221ZM36.1382 14.3003L36.0669 14.3704L36.0675 14.371L36.1382 14.3003ZM34.3496 14.4399L34.4295 14.5001L34.4298 14.4996L34.3496 14.4399ZM34.0005 15.8311L33.9005 15.8305V15.8311H34.0005ZM34.3389 17.4531L34.2579 17.5118L34.2586 17.5128L34.3389 17.4531ZM35.3271 18.015C35.6738 18.015 35.9688 17.9135 36.2044 17.7053L36.072 17.5554C35.8779 17.7268 35.6322 17.815 35.3271 17.815V18.015ZM36.2044 17.7053C36.4388 17.4982 36.5661 17.2388 36.5818 16.9319L36.3821 16.9216C36.3692 17.1733 36.2672 17.3829 36.072 17.5554L36.2044 17.7053ZM36.4819 17.0268H37.7119V16.8268H36.4819V17.0268ZM37.612 16.9228C37.5984 17.2651 37.492 17.5857 37.2905 17.8862L37.4566 17.9976C37.6776 17.6679 37.7967 17.3117 37.8118 16.9307L37.612 16.9228ZM37.2908 17.8858C37.0898 18.1822 36.8168 18.4183 36.4691 18.5938L36.5592 18.7724C36.9349 18.5827 37.2348 18.3247 37.4563 17.998L37.2908 17.8858ZM36.4691 18.5938C36.1219 18.7692 35.7471 18.857 35.3433 18.857V19.057C35.7773 19.057 36.1831 18.9623 36.5592 18.7724L36.4691 18.5938ZM35.3433 18.857C34.5542 18.857 33.9383 18.6027 33.4838 18.1004L33.3355 18.2346C33.8335 18.785 34.5067 19.057 35.3433 19.057V18.857ZM33.4838 18.1004C33.0288 17.5975 32.7953 16.8972 32.7953 15.9868H32.5953C32.5953 16.9312 32.8381 17.6848 33.3355 18.2346L33.4838 18.1004ZM32.7953 15.9868V15.8525H32.5953V15.9868H32.7953ZM32.7953 15.8525C32.7953 14.9864 33.0263 14.305 33.4789 13.7975L33.3297 13.6644C32.8369 14.2169 32.5953 14.9498 32.5953 15.8525H32.7953ZM33.4791 13.7973C33.93 13.2884 34.5455 13.0307 35.3379 13.0307V12.8307C34.4975 12.8307 33.8239 13.1065 33.3294 13.6646L33.4791 13.7973ZM35.3379 13.0307C36.0081 13.0307 36.5445 13.2262 36.9562 13.6107L37.0927 13.4645C36.6378 13.0398 36.0498 12.8307 35.3379 12.8307V13.0307ZM36.9568 13.6113C37.3717 13.9921 37.5913 14.4938 37.612 15.1253L37.8119 15.1188C37.7896 14.4398 37.5509 13.8852 37.092 13.4639L36.9568 13.6113ZM37.7119 15.0221H36.4819V15.2221H37.7119V15.0221ZM36.5818 15.1178C36.5666 14.7624 36.4432 14.4639 36.2089 14.2296L36.0675 14.371C36.2628 14.5664 36.3687 14.8157 36.382 15.1264L36.5818 15.1178ZM36.2095 14.2302C35.9776 13.9943 35.6806 13.878 35.3271 13.878V14.078C35.6325 14.078 35.8763 14.1766 36.0669 14.3704L36.2095 14.2302ZM35.3271 13.878C34.8767 13.878 34.5195 14.0441 34.2694 14.3802L34.4298 14.4996C34.638 14.2199 34.9326 14.078 35.3271 14.078V13.878ZM34.2697 14.3798C34.0217 14.7092 33.9041 15.1985 33.9005 15.8305L34.1005 15.8316C34.104 15.2176 34.2192 14.7794 34.4295 14.5001L34.2697 14.3798ZM33.9005 15.8311V16.0405H34.1005V15.8311H33.9005ZM33.9005 16.0405C33.9005 16.6795 34.0143 17.1754 34.2579 17.5118L34.4199 17.3945C34.2123 17.1078 34.1005 16.662 34.1005 16.0405H33.9005ZM34.2586 17.5128C34.5091 17.8494 34.8702 18.015 35.3271 18.015V17.815C34.9247 17.815 34.6269 17.6727 34.4191 17.3934L34.2586 17.5128ZM42.1699 18.8496L42.0811 18.8955L42.109 18.9496H42.1699V18.8496ZM42.0195 18.3071L42.1181 18.2902L42.0846 18.0948L41.9473 18.2379L42.0195 18.3071ZM39.0654 18.4575L38.9984 18.5317L39.0654 18.4575ZM39.1997 15.7988L39.2581 15.88L39.2582 15.8799L39.1997 15.7988ZM41.9766 15.2993V15.3993H42.0766V15.2993H41.9766ZM41.7241 14.1982L41.6506 14.266L41.6513 14.2667L41.7241 14.1982ZM40.2256 14.1499L40.2868 14.229L40.2877 14.2283L40.2256 14.1499ZM39.9409 14.7139V14.8139H40.0409V14.7139H39.9409ZM38.6357 14.7139H38.5357V14.8139H38.6357V14.7139ZM38.9526 13.8223L39.032 13.8831L39.0324 13.8826L38.9526 13.8223ZM39.812 13.167L39.7724 13.0752L39.7721 13.0753L39.812 13.167ZM42.6587 13.4463L42.5939 13.5225L42.5943 13.5228L42.6587 13.4463ZM43.2817 14.8857H43.3818L43.3817 14.884L43.2817 14.8857ZM43.502 18.7583H43.602V18.7359L43.5924 18.7157L43.502 18.7583ZM43.502 18.8496V18.9496H43.602V18.8496H43.502ZM41.4609 17.7217L41.413 17.6339L41.4124 17.6343L41.4609 17.7217ZM41.9766 17.2168L42.0645 17.2645L42.0766 17.2422V17.2168H41.9766ZM41.9766 16.1211H42.0766V16.0211H41.9766V16.1211ZM40.0645 17.6895L39.997 17.7633L39.9987 17.7648L40.0645 17.6895ZM42.2588 18.8037C42.2089 18.7071 42.1607 18.539 42.1181 18.2902L41.921 18.324C41.9643 18.5766 42.0164 18.7701 42.0811 18.8955L42.2588 18.8037ZM41.9473 18.2379C41.5509 18.6515 41.0685 18.857 40.4941 18.857V19.057C41.1229 19.057 41.6574 18.8293 42.0917 18.3763L41.9473 18.2379ZM40.4941 18.857C39.9307 18.857 39.4797 18.6969 39.1324 18.3833L38.9984 18.5317C39.3887 18.8842 39.8903 19.057 40.4941 19.057V18.857ZM39.1324 18.3833C38.7843 18.069 38.6122 17.684 38.6122 17.2222H38.4122C38.4122 17.7414 38.6089 18.1801 38.9984 18.5317L39.1324 18.3833ZM38.6122 17.2222C38.6122 16.6312 38.8287 16.1886 39.2581 15.88L39.1413 15.7176C38.654 16.0679 38.4122 16.5742 38.4122 17.2222H38.6122ZM39.2582 15.8799C39.6965 15.564 40.3315 15.3993 41.1763 15.3993V15.1993C40.3095 15.1993 39.6268 15.3677 39.1412 15.7177L39.2582 15.8799ZM41.1763 15.3993H41.9766V15.1993H41.1763V15.3993ZM42.0766 15.2993V14.918H41.8766V15.2993H42.0766ZM42.0766 14.918C42.0766 14.5977 41.9864 14.3313 41.797 14.1298L41.6513 14.2667C41.7984 14.4233 41.8766 14.6366 41.8766 14.918H42.0766ZM41.7977 14.1305C41.604 13.9204 41.3167 13.8243 40.9561 13.8243V14.0243C41.2829 14.0243 41.5076 14.1109 41.6506 14.266L41.7977 14.1305ZM40.9561 13.8243C40.6416 13.8243 40.3747 13.9042 40.1635 14.0715L40.2877 14.2283C40.4561 14.0948 40.6761 14.0243 40.9561 14.0243V13.8243ZM40.1644 14.0708C39.9515 14.2355 39.8409 14.4521 39.8409 14.7139H40.0409C40.0409 14.5173 40.1201 14.3579 40.2868 14.229L40.1644 14.0708ZM39.9409 14.6139H38.6357V14.8139H39.9409V14.6139ZM38.7357 14.7139C38.7357 14.4192 38.8328 14.143 39.032 13.8831L38.8733 13.7614C38.6499 14.0529 38.5357 14.3712 38.5357 14.7139H38.7357ZM39.0324 13.8826C39.232 13.6187 39.504 13.4102 39.852 13.2587L39.7721 13.0753C39.3967 13.2388 39.0958 13.4673 38.8729 13.7619L39.0324 13.8826ZM39.8516 13.2588C40.2029 13.1073 40.5956 13.0307 41.0312 13.0307V12.8307C40.5717 12.8307 40.1516 12.9116 39.7724 13.0752L39.8516 13.2588ZM41.0312 13.0307C41.6947 13.0307 42.212 13.198 42.5939 13.5225L42.7234 13.3701C42.2961 13.0071 41.7285 12.8307 41.0312 12.8307V13.0307ZM42.5943 13.5228C42.9729 13.8411 43.1714 14.2914 43.1818 14.8875L43.3817 14.884C43.3706 14.2411 43.1537 13.7318 42.723 13.3697L42.5943 13.5228ZM43.1817 14.8857V17.5068H43.3817V14.8857H43.1817ZM43.1817 17.5068C43.1817 18.0374 43.256 18.471 43.4115 18.8009L43.5924 18.7157C43.4543 18.4226 43.3817 18.0218 43.3817 17.5068H43.1817ZM43.402 18.7583V18.8496H43.602V18.7583H43.402ZM43.502 18.7496H42.1699V18.9496H43.502V18.7496ZM40.7358 18.0097C41.0107 18.0097 41.2691 17.9427 41.5095 17.8091L41.4124 17.6343C41.2016 17.7513 40.9766 17.8097 40.7358 17.8097V18.0097ZM41.5089 17.8094C41.7534 17.6757 41.9399 17.4941 42.0645 17.2645L41.8887 17.1691C41.784 17.362 41.6268 17.517 41.413 17.6339L41.5089 17.8094ZM42.0766 17.2168V16.1211H41.8766V17.2168H42.0766ZM41.9766 16.0211H41.2729V16.2211H41.9766V16.0211ZM41.2729 16.0211C40.7809 16.0211 40.3935 16.1062 40.1258 16.2913L40.2395 16.4558C40.4587 16.3043 40.7982 16.2211 41.2729 16.2211V16.0211ZM40.1258 16.2913C39.854 16.4791 39.7174 16.7487 39.7174 17.0879H39.9174C39.9174 16.8112 40.0243 16.6045 40.2395 16.4558L40.1258 16.2913ZM39.7174 17.0879C39.7174 17.3628 39.8089 17.5915 39.997 17.7633L40.1319 17.6156C39.9906 17.4866 39.9174 17.3143 39.9174 17.0879H39.7174ZM39.9987 17.7648C40.1895 17.9312 40.4386 18.0097 40.7358 18.0097V17.8097C40.4744 17.8097 40.276 17.7413 40.1302 17.6141L39.9987 17.7648Z" fill="#9D9A9A"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="2" width="86" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_f" x="3.08789" y="0.239258" width="80.5217" height="89.5217" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter2_f" x="10.9414" y="2.73926" width="63.6522" height="20.9565" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(77.7941 45.3805) rotate(149.714) scale(73.9452 73.0857)">
<stop stop-color="#1397AB"/>
<stop offset="0.508373" stop-color="#0E9DB3" stop-opacity="0.68"/>
<stop offset="1" stop-color="#0F91A5" stop-opacity="0.94"/>
</radialGradient>
<linearGradient id="paint1_linear" x1="43.3488" y1="5.73926" x2="43.3488" y2="77.4609" gradientUnits="userSpaceOnUse">
<stop offset="0.203125" stop-color="#04C6F2" stop-opacity="0"/>
<stop offset="0.5" stop-color="#04C6F2" stop-opacity="0.448819"/>
<stop offset="0.880208" stop-color="#04BBE4" stop-opacity="0.72"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="42.9997" y1="68.2125" x2="43.3454" y2="84.2611" gradientUnits="userSpaceOnUse">
<stop offset="0.552083" stop-color="#229DAD" stop-opacity="0.685677"/>
<stop offset="0.619792" stop-color="#1C99AA"/>
<stop offset="1" stop-color="#28A1B0"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="42.7675" y1="6.21581" x2="41.929" y2="18.4419" gradientUnits="userSpaceOnUse">
<stop offset="0.0254978" stop-color="#58C1D8"/>
<stop offset="0.699104" stop-color="#9EDFED" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>



                </div>
                <div class="_overlay_"></div>
            </section>

        </div>

        <div class="_bottom_">
            <p>Indica</p>
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

window.customElements.define('strain-2', WebComp);