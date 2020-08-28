const template = document.createElement('template');
template.innerHTML = `
    <style>
        @import url('./css/card.css');

        ._container_ {
            position: relative;
        }

        ._container_ > ._image-container {
            width: 100%;
            height: 100%;
            position: absolute;
        }

        ._top_ {
            background-image: url('./img/edu-1.png');
        }

        ._top_ > ._overlay_ {
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
        }

        ._bottom_  p { 
            color: var(--text-primary);
            z-index: 1;
            font-size: var(--h3);
        }

    </style>


            <div class="_container_">

                <div class="_top_">


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
                        <path d="M30.1406 53.1406C30.1406 52.1406 29.7865 51.3698 29.0781 50.8281C28.3802 50.2865 27.1146 49.7396 25.2812 49.1875C23.4479 48.6354 21.9896 48.0208 20.9062 47.3438C18.8333 46.0417 17.7969 44.3438 17.7969 42.25C17.7969 40.4167 18.5417 38.9062 20.0312 37.7188C21.5312 36.5312 23.474 35.9375 25.8594 35.9375C27.4427 35.9375 28.8542 36.2292 30.0938 36.8125C31.3333 37.3958 32.3073 38.2292 33.0156 39.3125C33.724 40.3854 34.0781 41.5781 34.0781 42.8906H30.1406C30.1406 41.7031 29.7656 40.776 29.0156 40.1094C28.276 39.4323 27.2135 39.0938 25.8281 39.0938C24.5365 39.0938 23.5312 39.3698 22.8125 39.9219C22.1042 40.474 21.75 41.2448 21.75 42.2344C21.75 43.0677 22.1354 43.7656 22.9062 44.3281C23.6771 44.8802 24.9479 45.4219 26.7188 45.9531C28.4896 46.474 29.9115 47.0729 30.9844 47.75C32.0573 48.4167 32.8438 49.1875 33.3438 50.0625C33.8438 50.9271 34.0938 51.9427 34.0938 53.1094C34.0938 55.0052 33.3646 56.5156 31.9062 57.6406C30.4583 58.7552 28.4896 59.3125 26 59.3125C24.3542 59.3125 22.8385 59.0104 21.4531 58.4062C20.0781 57.7917 19.0052 56.9479 18.2344 55.875C17.474 54.8021 17.0938 53.5521 17.0938 52.125H21.0469C21.0469 53.4167 21.474 54.4167 22.3281 55.125C23.1823 55.8333 24.4062 56.1875 26 56.1875C27.375 56.1875 28.4062 55.9115 29.0938 55.3594C29.7917 54.7969 30.1406 54.0573 30.1406 53.1406ZM41.5156 55.8438H51.8438V59H37.5625V36.25H41.5156V55.8438ZM59.6719 54.0469L65.4531 36.25H69.7969L61.6094 59H57.7812L49.625 36.25H53.9531L59.6719 54.0469Z" fill="white"/>
                        <path d="M29.0781 50.8281L28.7716 51.2231L28.7744 51.2253L29.0781 50.8281ZM20.9062 47.3438L20.6403 47.7672L20.6413 47.7677L20.9062 47.3438ZM20.0312 37.7188L19.7209 37.3267L19.7196 37.3278L20.0312 37.7188ZM33.0156 39.3125L32.5971 39.5861L32.5984 39.588L33.0156 39.3125ZM34.0781 42.8906V43.3906H34.5781V42.8906H34.0781ZM30.1406 42.8906H29.6406V43.3906H30.1406V42.8906ZM29.0156 40.1094L28.678 40.4782L28.6834 40.4831L29.0156 40.1094ZM22.8125 39.9219L22.5079 39.5253L22.5051 39.5275L22.8125 39.9219ZM22.9062 44.3281L22.6115 44.732L22.6151 44.7346L22.9062 44.3281ZM26.7188 45.9531L26.5751 46.432L26.5777 46.4328L26.7188 45.9531ZM30.9844 47.75L30.7175 48.1729L30.7205 48.1747L30.9844 47.75ZM33.3438 50.0625L32.9096 50.3106L32.9109 50.3128L33.3438 50.0625ZM31.9062 57.6406L32.2112 58.0368L32.2117 58.0365L31.9062 57.6406ZM21.4531 58.4062L21.2491 58.8627L21.2533 58.8646L21.4531 58.4062ZM18.2344 55.875L17.8264 56.1641L17.8283 56.1667L18.2344 55.875ZM17.0938 52.125V51.625H16.5938V52.125H17.0938ZM21.0469 52.125H21.5469V51.625H21.0469V52.125ZM29.0938 55.3594L29.4068 55.7492L29.4075 55.7487L29.0938 55.3594ZM30.6406 53.1406C30.6406 52.0065 30.2301 51.0796 29.3818 50.4309L28.7744 51.2253C29.3428 51.66 29.6406 52.2747 29.6406 53.1406H30.6406ZM29.3847 50.4331C28.6084 49.8306 27.265 49.2627 25.4254 48.7087L25.1371 49.6663C26.9641 50.2165 28.152 50.7423 28.7716 51.2231L29.3847 50.4331ZM25.4254 48.7087C23.6157 48.1638 22.2032 47.5647 21.1712 46.9198L20.6413 47.7677C21.776 48.4769 23.2801 49.1071 25.1371 49.6663L25.4254 48.7087ZM21.1722 46.9203C19.2161 45.6916 18.2969 44.1402 18.2969 42.25H17.2969C17.2969 44.5473 18.4506 46.3917 20.6403 47.7672L21.1722 46.9203ZM18.2969 42.25C18.2969 40.5756 18.967 39.2066 20.3429 38.1097L19.7196 37.3278C18.1164 38.6059 17.2969 40.2577 17.2969 42.25H18.2969ZM20.3416 38.1108C21.7333 37.009 23.5582 36.4375 25.8594 36.4375V35.4375C23.3897 35.4375 21.3292 36.0535 19.7209 37.3267L20.3416 38.1108ZM25.8594 36.4375C27.3805 36.4375 28.7175 36.7174 29.8809 37.2649L30.3066 36.3601C28.9908 35.7409 27.5049 35.4375 25.8594 35.4375V36.4375ZM29.8809 37.2649C31.0418 37.8112 31.9425 38.5849 32.5971 39.5861L33.4341 39.0389C32.6721 37.8735 31.6249 36.9804 30.3066 36.3601L29.8809 37.2649ZM32.5984 39.588C33.2515 40.5774 33.5781 41.6739 33.5781 42.8906H34.5781C34.5781 41.4823 34.1964 40.1935 33.4329 39.037L32.5984 39.588ZM34.0781 42.3906H30.1406V43.3906H34.0781V42.3906ZM30.6406 42.8906C30.6406 41.589 30.2243 40.5148 29.3478 39.7357L28.6834 40.4831C29.307 41.0373 29.6406 41.8172 29.6406 42.8906H30.6406ZM29.3533 39.7406C28.4913 38.9515 27.2905 38.5938 25.8281 38.5938V39.5938C27.1366 39.5938 28.0608 39.9131 28.678 40.4782L29.3533 39.7406ZM25.8281 38.5938C24.4718 38.5938 23.3443 38.8829 22.5079 39.5253L23.1171 40.3184C23.7182 39.8567 24.6011 39.5938 25.8281 39.5938V38.5938ZM22.5051 39.5275C21.6617 40.1849 21.25 41.1087 21.25 42.2344H22.25C22.25 41.3809 22.5466 40.763 23.1199 40.3162L22.5051 39.5275ZM21.25 42.2344C21.25 43.2522 21.7331 44.091 22.6115 44.732L23.201 43.9242C22.5377 43.4402 22.25 42.8832 22.25 42.2344H21.25ZM22.6151 44.7346C23.4555 45.3365 24.7917 45.897 26.5751 46.432L26.8624 45.4742C25.1042 44.9467 23.8987 44.4239 23.1974 43.9216L22.6151 44.7346ZM26.5777 46.4328C28.3224 46.946 29.697 47.5288 30.7175 48.1728L31.2512 47.3272C30.1259 46.617 28.6568 46.002 26.8598 45.4734L26.5777 46.4328ZM30.7205 48.1747C31.7404 48.8084 32.46 49.5237 32.9096 50.3106L33.7779 49.8144C33.2275 48.8513 32.3742 48.0249 31.2483 47.3253L30.7205 48.1747ZM32.9109 50.3128C33.36 51.0894 33.5938 52.0157 33.5938 53.1094H34.5938C34.5938 51.8697 34.3275 50.7648 33.7766 49.8122L32.9109 50.3128ZM33.5938 53.1094C33.5938 54.8555 32.9323 56.2176 31.6008 57.2447L32.2117 58.0365C33.7969 56.8136 34.5938 55.1549 34.5938 53.1094H33.5938ZM31.6013 57.2444C30.2676 58.271 28.4188 58.8125 26 58.8125V59.8125C28.5604 59.8125 30.649 59.2394 32.2112 58.0368L31.6013 57.2444ZM26 58.8125C24.4168 58.8125 22.9699 58.5222 21.653 57.9479L21.2533 58.8646C22.7071 59.4986 24.2916 59.8125 26 59.8125V58.8125ZM21.6572 57.9498C20.3514 57.3661 19.3528 56.5748 18.6404 55.5833L17.8283 56.1667C18.6576 57.321 19.8049 58.2172 21.2491 58.8627L21.6572 57.9498ZM18.6423 55.5859C17.9469 54.6047 17.5938 53.4578 17.5938 52.125H16.5938C16.5938 53.6464 17.001 54.9994 17.8264 56.1641L18.6423 55.5859ZM17.0938 52.625H21.0469V51.625H17.0938V52.625ZM20.5469 52.125C20.5469 53.5383 21.0208 54.6905 22.009 55.5099L22.6473 54.7401C21.9271 54.1429 21.5469 53.2951 21.5469 52.125H20.5469ZM22.009 55.5099C22.9849 56.3192 24.3395 56.6875 26 56.6875V55.6875C24.473 55.6875 23.3797 55.3475 22.6473 54.7401L22.009 55.5099ZM26 56.6875C27.4288 56.6875 28.5929 56.4028 29.4068 55.7492L28.7807 54.9695C28.2196 55.4201 27.3212 55.6875 26 55.6875V56.6875ZM29.4075 55.7487C30.2263 55.0888 30.6406 54.2046 30.6406 53.1406H29.6406C29.6406 53.91 29.3571 54.505 28.78 54.9701L29.4075 55.7487ZM41.5156 55.8438H41.0156V56.3438H41.5156V55.8438ZM51.8438 55.8438H52.3438V55.3438H51.8438V55.8438ZM51.8438 59V59.5H52.3438V59H51.8438ZM37.5625 59H37.0625V59.5H37.5625V59ZM37.5625 36.25V35.75H37.0625V36.25H37.5625ZM41.5156 36.25H42.0156V35.75H41.5156V36.25ZM41.5156 56.3438H51.8438V55.3438H41.5156V56.3438ZM51.3438 55.8438V59H52.3438V55.8438H51.3438ZM51.8438 58.5H37.5625V59.5H51.8438V58.5ZM38.0625 59V36.25H37.0625V59H38.0625ZM37.5625 36.75H41.5156V35.75H37.5625V36.75ZM41.0156 36.25V55.8438H42.0156V36.25H41.0156ZM59.6719 54.0469L59.1958 54.1998L59.6693 55.6732L60.1474 54.2014L59.6719 54.0469ZM65.4531 36.25V35.75H65.0898L64.9776 36.0955L65.4531 36.25ZM69.7969 36.25L70.2673 36.4193L70.5082 35.75H69.7969V36.25ZM61.6094 59V59.5H61.9608L62.0798 59.1693L61.6094 59ZM57.7812 59L57.3106 59.1687L57.4293 59.5H57.7812V59ZM49.625 36.25V35.75H48.9146L49.1543 36.4187L49.625 36.25ZM53.9531 36.25L54.4292 36.097L54.3176 35.75H53.9531V36.25ZM60.1474 54.2014L65.9287 36.4045L64.9776 36.0955L59.1963 53.8924L60.1474 54.2014ZM65.4531 36.75H69.7969V35.75H65.4531V36.75ZM69.3264 36.0807L61.1389 58.8307L62.0798 59.1693L70.2673 36.4193L69.3264 36.0807ZM61.6094 58.5H57.7812V59.5H61.6094V58.5ZM58.2519 58.8313L50.0957 36.0813L49.1543 36.4187L57.3106 59.1687L58.2519 58.8313ZM49.625 36.75H53.9531V35.75H49.625V36.75ZM53.4771 36.403L59.1958 54.1998L60.1479 53.8939L54.4292 36.097L53.4771 36.403Z" fill="#6A6A6A" fill-opacity="0.24"/>
                        <rect x="14" y="11" width="31" height="9" rx="3" fill="black" fill-opacity="0.03"/>
                        <path d="M19.1929 16.8354C19.1929 16.4917 19.0711 16.2267 18.8276 16.0405C18.5877 15.8543 18.1527 15.6663 17.5225 15.4766C16.8923 15.2868 16.391 15.0755 16.0186 14.8428C15.306 14.3952 14.9497 13.8115 14.9497 13.0918C14.9497 12.4616 15.2057 11.9424 15.7178 11.5342C16.2334 11.126 16.9012 10.9219 17.7212 10.9219C18.2655 10.9219 18.7507 11.0221 19.1768 11.2227C19.6029 11.4232 19.9377 11.7096 20.1812 12.082C20.4246 12.4508 20.5464 12.8608 20.5464 13.312H19.1929C19.1929 12.9038 19.064 12.5851 18.8062 12.356C18.5519 12.1232 18.1867 12.0068 17.7104 12.0068C17.2664 12.0068 16.9209 12.1017 16.6738 12.2915C16.4303 12.4813 16.3086 12.7463 16.3086 13.0864C16.3086 13.3729 16.4411 13.6128 16.7061 13.8062C16.971 13.9959 17.4079 14.1821 18.0166 14.3647C18.6253 14.5438 19.1141 14.7497 19.4829 14.9824C19.8517 15.2116 20.1221 15.4766 20.2939 15.7773C20.4658 16.0745 20.5518 16.4237 20.5518 16.8247C20.5518 17.4764 20.3011 17.9956 19.7998 18.3823C19.3021 18.7655 18.6253 18.957 17.7695 18.957C17.2038 18.957 16.6828 18.8532 16.2065 18.6455C15.7339 18.4342 15.3651 18.1442 15.1001 17.7754C14.8387 17.4066 14.708 16.9769 14.708 16.4863H16.0669C16.0669 16.9303 16.2137 17.2741 16.5073 17.5176C16.8009 17.7611 17.2217 17.8828 17.7695 17.8828C18.2422 17.8828 18.5967 17.7879 18.833 17.5981C19.0729 17.4048 19.1929 17.1506 19.1929 16.8354ZM25.0903 18.8496C25.033 18.7386 24.9829 18.5578 24.9399 18.3071C24.5246 18.7404 24.0161 18.957 23.4146 18.957C22.8309 18.957 22.3547 18.7905 21.9858 18.4575C21.617 18.1245 21.4326 17.7127 21.4326 17.2222C21.4326 16.6027 21.6618 16.1283 22.1201 15.7988C22.582 15.4658 23.2409 15.2993 24.0967 15.2993H24.897V14.918C24.897 14.6172 24.8128 14.3773 24.6445 14.1982C24.4762 14.0156 24.2202 13.9243 23.8765 13.9243C23.5793 13.9243 23.3358 13.9995 23.146 14.1499C22.9562 14.2967 22.8613 14.4847 22.8613 14.7139H21.5562C21.5562 14.3952 21.6618 14.098 21.873 13.8223C22.0843 13.543 22.3708 13.3245 22.7324 13.167C23.0977 13.0094 23.5041 12.9307 23.9517 12.9307C24.632 12.9307 25.1745 13.1025 25.5791 13.4463C25.9837 13.7865 26.1914 14.2663 26.2021 14.8857V17.5068C26.2021 18.0296 26.2756 18.4468 26.4224 18.7583V18.8496H25.0903ZM23.6562 17.9097C23.9141 17.9097 24.1558 17.847 24.3813 17.7217C24.6105 17.5964 24.7824 17.4281 24.897 17.2168V16.1211H24.1934C23.71 16.1211 23.3465 16.2052 23.103 16.3735C22.8595 16.5418 22.7378 16.7799 22.7378 17.0879C22.7378 17.3385 22.8201 17.5391 22.9849 17.6895C23.1532 17.8363 23.377 17.9097 23.6562 17.9097ZM29.2046 11.6255V13.0381H30.2305V14.0049H29.2046V17.249C29.2046 17.471 29.2476 17.6322 29.3335 17.7324C29.423 17.8291 29.5806 17.8774 29.8062 17.8774C29.9565 17.8774 30.1087 17.8595 30.2627 17.8237V18.8335C29.9655 18.9159 29.679 18.957 29.4033 18.957C28.4007 18.957 27.8994 18.4038 27.8994 17.2974V14.0049H26.9434V13.0381H27.8994V11.6255H29.2046ZM32.6206 18.8496H31.3154V13.0381H32.6206V18.8496ZM31.2349 11.5288C31.2349 11.3283 31.2975 11.1618 31.4229 11.0293C31.5518 10.8968 31.7344 10.8306 31.9707 10.8306C32.207 10.8306 32.3896 10.8968 32.5186 11.0293C32.6475 11.1618 32.7119 11.3283 32.7119 11.5288C32.7119 11.7257 32.6475 11.8905 32.5186 12.0229C32.3896 12.1519 32.207 12.2163 31.9707 12.2163C31.7344 12.2163 31.5518 12.1519 31.4229 12.0229C31.2975 11.8905 31.2349 11.7257 31.2349 11.5288ZM36.0957 17.1953L37.3257 13.0381H38.6738L36.6597 18.8496H35.5264L33.4961 13.0381H34.8496L36.0957 17.1953ZM42.8794 18.8496C42.8221 18.7386 42.772 18.5578 42.729 18.3071C42.3136 18.7404 41.8052 18.957 41.2036 18.957C40.62 18.957 40.1437 18.7905 39.7749 18.4575C39.4061 18.1245 39.2217 17.7127 39.2217 17.2222C39.2217 16.6027 39.4508 16.1283 39.9092 15.7988C40.3711 15.4658 41.0299 15.2993 41.8857 15.2993H42.686V14.918C42.686 14.6172 42.6019 14.3773 42.4336 14.1982C42.2653 14.0156 42.0093 13.9243 41.6655 13.9243C41.3683 13.9243 41.1248 13.9995 40.9351 14.1499C40.7453 14.2967 40.6504 14.4847 40.6504 14.7139H39.3452C39.3452 14.3952 39.4508 14.098 39.6621 13.8223C39.8734 13.543 40.1598 13.3245 40.5215 13.167C40.8867 13.0094 41.2931 12.9307 41.7407 12.9307C42.4211 12.9307 42.9635 13.1025 43.3682 13.4463C43.7728 13.7865 43.9805 14.2663 43.9912 14.8857V17.5068C43.9912 18.0296 44.0646 18.4468 44.2114 18.7583V18.8496H42.8794ZM41.4453 17.9097C41.7031 17.9097 41.9448 17.847 42.1704 17.7217C42.3996 17.5964 42.5715 17.4281 42.686 17.2168V16.1211H41.9824C41.499 16.1211 41.1356 16.2052 40.8921 16.3735C40.6486 16.5418 40.5269 16.7799 40.5269 17.0879C40.5269 17.3385 40.6092 17.5391 40.7739 17.6895C40.9422 17.8363 41.166 17.9097 41.4453 17.9097Z" fill="#78070D"/>
                        <path d="M18.8276 16.0405L18.7817 16.0998L18.7821 16.1001L18.8276 16.0405ZM17.5225 15.4766L17.5008 15.5484L17.5225 15.4766ZM16.0186 14.8428L15.9787 14.9063L15.9788 14.9064L16.0186 14.8428ZM15.7178 11.5342L15.6712 11.4754L15.671 11.4755L15.7178 11.5342ZM20.1812 12.082L20.1184 12.1231L20.1186 12.1234L20.1812 12.082ZM20.5464 13.312V13.387H20.6214V13.312H20.5464ZM19.1929 13.312H19.1179V13.387H19.1929V13.312ZM18.8062 12.356L18.7555 12.4113L18.7563 12.412L18.8062 12.356ZM16.6738 12.2915L16.6281 12.232L16.6277 12.2323L16.6738 12.2915ZM16.7061 13.8062L16.6618 13.8667L16.6624 13.8671L16.7061 13.8062ZM18.0166 14.3647L17.9951 14.4366L17.9954 14.4367L18.0166 14.3647ZM19.4829 14.9824L19.4429 15.0458L19.4433 15.0461L19.4829 14.9824ZM20.2939 15.7773L20.2288 15.8146L20.229 15.8149L20.2939 15.7773ZM19.7998 18.3823L19.8456 18.4418L19.8456 18.4417L19.7998 18.3823ZM16.2065 18.6455L16.1759 18.714L16.1766 18.7143L16.2065 18.6455ZM15.1001 17.7754L15.0389 17.8188L15.0392 17.8192L15.1001 17.7754ZM14.708 16.4863V16.4113H14.633V16.4863H14.708ZM16.0669 16.4863H16.1419V16.4113H16.0669V16.4863ZM18.833 17.5981L18.88 17.6566L18.8801 17.6565L18.833 17.5981ZM19.2679 16.8354C19.2679 16.4716 19.1377 16.1832 18.8732 15.981L18.7821 16.1001C19.0046 16.2703 19.1179 16.5118 19.1179 16.8354H19.2679ZM18.8736 15.9813C18.622 15.786 18.1752 15.5948 17.5441 15.4047L17.5008 15.5484C18.1301 15.7379 18.5535 15.9227 18.7817 16.0998L18.8736 15.9813ZM17.5441 15.4047C16.9174 15.216 16.423 15.0071 16.0583 14.7792L15.9788 14.9064C16.3589 15.1439 16.8671 15.3575 17.5008 15.5484L17.5441 15.4047ZM16.0584 14.7793C15.3634 14.3427 15.0247 13.781 15.0247 13.0918H14.8747C14.8747 13.8421 15.2486 14.4477 15.9787 14.9063L16.0584 14.7793ZM15.0247 13.0918C15.0247 12.4854 15.2695 11.9874 15.7645 11.5928L15.671 11.4755C15.1419 11.8973 14.8747 12.4377 14.8747 13.0918H15.0247ZM15.7643 11.593C16.2637 11.1976 16.9138 10.9969 17.7212 10.9969V10.8469C16.8886 10.8469 16.2031 11.0543 15.6712 11.4754L15.7643 11.593ZM17.7212 10.9969C18.2561 10.9969 18.7301 11.0954 19.1448 11.2905L19.2087 11.1548C18.7712 10.9489 18.2748 10.8469 17.7212 10.8469V10.9969ZM19.1448 11.2905C19.5591 11.4855 19.8829 11.763 20.1184 12.1231L20.2439 12.041C19.9924 11.6563 19.6466 11.3609 19.2087 11.1548L19.1448 11.2905ZM20.1186 12.1234C20.3538 12.4796 20.4714 12.8752 20.4714 13.312H20.6214C20.6214 12.8465 20.4955 12.4221 20.2437 12.0407L20.1186 12.1234ZM20.5464 13.237H19.1929V13.387H20.5464V13.237ZM19.2679 13.312C19.2679 12.8867 19.1328 12.5459 18.856 12.2999L18.7563 12.412C18.9952 12.6243 19.1179 12.9209 19.1179 13.312H19.2679ZM18.8568 12.3006C18.5842 12.0511 18.1982 11.9318 17.7104 11.9318V12.0818C18.1751 12.0818 18.5196 12.1953 18.7555 12.4113L18.8568 12.3006ZM17.7104 11.9318C17.2567 11.9318 16.8929 12.0287 16.6281 12.232L16.7195 12.351C16.9489 12.1748 17.2761 12.0818 17.7104 12.0818V11.9318ZM16.6277 12.2323C16.364 12.4379 16.2336 12.7258 16.2336 13.0864H16.3836C16.3836 12.7667 16.4967 12.5246 16.7199 12.3507L16.6277 12.2323ZM16.2336 13.0864C16.2336 13.4006 16.3807 13.6616 16.6618 13.8667L16.7503 13.7456C16.5014 13.564 16.3836 13.3452 16.3836 13.0864H16.2336ZM16.6624 13.8671C16.9378 14.0644 17.3844 14.2534 17.9951 14.4366L18.0382 14.2929C17.4313 14.1109 17.0043 13.9275 16.7497 13.7452L16.6624 13.8671ZM17.9954 14.4367C18.6002 14.6146 19.0819 14.8181 19.4429 15.0458L19.5229 14.919C19.1463 14.6813 18.6504 14.473 18.0378 14.2928L17.9954 14.4367ZM19.4433 15.0461C19.8042 15.2704 20.0645 15.527 20.2288 15.8146L20.3591 15.7401C20.1796 15.4261 19.8993 15.1528 19.5225 14.9187L19.4433 15.0461ZM20.229 15.8149C20.3933 16.0989 20.4768 16.4346 20.4768 16.8247H20.6268C20.6268 16.4127 20.5384 16.0502 20.3589 15.7398L20.229 15.8149ZM20.4768 16.8247C20.4768 17.4539 20.2363 17.9509 19.754 18.3229L19.8456 18.4417C20.3659 18.0403 20.6268 17.4989 20.6268 16.8247H20.4768ZM19.7541 18.3229C19.2735 18.6928 18.6147 18.882 17.7695 18.882V19.032C18.6359 19.032 19.3307 18.8381 19.8456 18.4418L19.7541 18.3229ZM17.7695 18.882C17.2132 18.882 16.7025 18.78 16.2365 18.5768L16.1766 18.7143C16.6631 18.9264 17.1944 19.032 17.7695 19.032V18.882ZM16.2371 18.577C15.7749 18.3704 15.4172 18.0882 15.161 17.7316L15.0392 17.8192C15.3129 18.2002 15.6929 18.4981 16.1759 18.714L16.2371 18.577ZM15.1613 17.732C14.9097 17.377 14.783 16.9627 14.783 16.4863H14.633C14.633 16.991 14.7678 17.4362 15.0389 17.8188L15.1613 17.732ZM14.708 16.5613H16.0669V16.4113H14.708V16.5613ZM15.9919 16.4863C15.9919 16.9486 16.1457 17.3152 16.4594 17.5753L16.5552 17.4598C16.2817 17.233 16.1419 16.9121 16.1419 16.4863H15.9919ZM16.4594 17.5753C16.7713 17.8339 17.2117 17.9578 17.7695 17.9578V17.8078C17.2317 17.8078 16.8306 17.6882 16.5552 17.4598L16.4594 17.5753ZM17.7695 17.9578C18.2503 17.9578 18.6247 17.8616 18.88 17.6566L18.786 17.5397C18.5687 17.7142 18.2341 17.8078 17.7695 17.8078V17.9578ZM18.8801 17.6565C19.1381 17.4486 19.2679 17.1726 19.2679 16.8354H19.1179C19.1179 17.1285 19.0077 17.361 18.7859 17.5398L18.8801 17.6565ZM25.0903 18.8496L25.0237 18.884L25.0446 18.9246H25.0903V18.8496ZM24.9399 18.3071L25.0139 18.2945L24.9887 18.1479L24.8858 18.2552L24.9399 18.3071ZM21.9858 18.4575L21.9356 18.5132L21.9858 18.4575ZM22.1201 15.7988L22.1639 15.8597L22.164 15.8597L22.1201 15.7988ZM24.897 15.2993V15.3743H24.972V15.2993H24.897ZM24.6445 14.1982L24.5894 14.2491L24.5899 14.2496L24.6445 14.1982ZM23.146 14.1499L23.1919 14.2092L23.1926 14.2087L23.146 14.1499ZM22.8613 14.7139V14.7889H22.9363V14.7139H22.8613ZM21.5562 14.7139H21.4812V14.7889H21.5562V14.7139ZM21.873 13.8223L21.9326 13.8679L21.9329 13.8675L21.873 13.8223ZM22.7324 13.167L22.7027 13.0981L22.7025 13.0982L22.7324 13.167ZM25.5791 13.4463L25.5305 13.5034L25.5308 13.5037L25.5791 13.4463ZM26.2021 14.8857H26.2772L26.2771 14.8844L26.2021 14.8857ZM26.4224 18.7583H26.4974V18.7415L26.4902 18.7263L26.4224 18.7583ZM26.4224 18.8496V18.9246H26.4974V18.8496H26.4224ZM24.3813 17.7217L24.3454 17.6559L24.3449 17.6561L24.3813 17.7217ZM24.897 17.2168L24.9629 17.2526L24.972 17.2358V17.2168H24.897ZM24.897 16.1211H24.972V16.0461H24.897V16.1211ZM22.9849 17.6895L22.9343 17.7449L22.9356 17.746L22.9849 17.6895ZM25.157 18.8152C25.1052 18.715 25.0566 18.5437 25.0139 18.2945L24.866 18.3198C24.9092 18.5719 24.9608 18.7622 25.0237 18.884L25.157 18.8152ZM24.8858 18.2552C24.4846 18.6737 23.9957 18.882 23.4146 18.882V19.032C24.0365 19.032 24.5645 18.8071 24.9941 18.359L24.8858 18.2552ZM23.4146 18.882C22.846 18.882 22.3888 18.7203 22.0361 18.4019L21.9356 18.5132C22.3205 18.8608 22.8158 19.032 23.4146 19.032V18.882ZM22.0361 18.4019C21.6828 18.0829 21.5076 17.6912 21.5076 17.2222H21.3576C21.3576 17.7343 21.5512 18.1662 21.9356 18.5132L22.0361 18.4019ZM21.5076 17.2222C21.5076 16.6241 21.7273 16.1735 22.1639 15.8597L22.0763 15.7379C21.5963 16.083 21.3576 16.5813 21.3576 17.2222H21.5076ZM22.164 15.8597C22.6082 15.5394 23.2491 15.3743 24.0967 15.3743V15.2243C23.2326 15.2243 22.5559 15.3922 22.0763 15.738L22.164 15.8597ZM24.0967 15.3743H24.897V15.2243H24.0967V15.3743ZM24.972 15.2993V14.918H24.822V15.2993H24.972ZM24.972 14.918C24.972 14.6026 24.8833 14.3428 24.6992 14.1469L24.5899 14.2496C24.7423 14.4118 24.822 14.6318 24.822 14.918H24.972ZM24.6997 14.1474C24.5124 13.9442 24.2329 13.8493 23.8765 13.8493V13.9993C24.2076 13.9993 24.4401 14.0871 24.5894 14.2491L24.6997 14.1474ZM23.8765 13.8493C23.5663 13.8493 23.3052 13.928 23.0994 14.0911L23.1926 14.2087C23.3663 14.071 23.5922 13.9993 23.8765 13.9993V13.8493ZM23.1001 14.0906C22.893 14.2508 22.7863 14.4602 22.7863 14.7139H22.9363C22.9363 14.5092 23.0195 14.3426 23.1919 14.2092L23.1001 14.0906ZM22.8613 14.6389H21.5562V14.7889H22.8613V14.6389ZM21.6312 14.7139C21.6312 14.4132 21.7304 14.1318 21.9326 13.8679L21.8135 13.7766C21.5932 14.0642 21.4812 14.3772 21.4812 14.7139H21.6312ZM21.9329 13.8675C22.1354 13.5997 22.411 13.3888 22.7624 13.2358L22.7025 13.0982C22.3305 13.2603 22.0332 13.4862 21.8132 13.777L21.9329 13.8675ZM22.7621 13.2359C23.1169 13.0828 23.513 13.0057 23.9517 13.0057V12.8557C23.4951 12.8557 23.0784 12.936 22.7027 13.0981L22.7621 13.2359ZM23.9517 13.0057C24.6193 13.0057 25.1429 13.1741 25.5305 13.5034L25.6277 13.3891C25.206 13.0309 24.6447 12.8557 23.9517 12.8557V13.0057ZM25.5308 13.5037C25.9159 13.8275 26.1167 14.2851 26.1272 14.887L26.2771 14.8844C26.2661 14.2474 26.0515 13.7455 25.6274 13.3889L25.5308 13.5037ZM26.1271 14.8857V17.5068H26.2771V14.8857H26.1271ZM26.1271 17.5068C26.1271 18.0355 26.2012 18.4649 26.3545 18.7903L26.4902 18.7263C26.3499 18.4286 26.2771 18.0238 26.2771 17.5068H26.1271ZM26.3474 18.7583V18.8496H26.4974V18.7583H26.3474ZM26.4224 18.7746H25.0903V18.9246H26.4224V18.7746ZM23.6562 17.9847C23.9268 17.9847 24.1811 17.9188 24.4178 17.7872L24.3449 17.6561C24.1305 17.7753 23.9013 17.8347 23.6562 17.8347V17.9847ZM24.4173 17.7875C24.658 17.6559 24.8408 17.4776 24.9629 17.2526L24.831 17.181C24.7239 17.3785 24.563 17.5369 24.3454 17.6559L24.4173 17.7875ZM24.972 17.2168V16.1211H24.822V17.2168H24.972ZM24.897 16.0461H24.1934V16.1961H24.897V16.0461ZM24.1934 16.0461C23.7035 16.0461 23.3221 16.131 23.0604 16.3118L23.1457 16.4352C23.371 16.2795 23.7164 16.1961 24.1934 16.1961V16.0461ZM23.0604 16.3118C22.7957 16.4948 22.6628 16.7565 22.6628 17.0879H22.8128C22.8128 16.8034 22.9234 16.5889 23.1457 16.4352L23.0604 16.3118ZM22.6628 17.0879C22.6628 17.3567 22.752 17.5784 22.9343 17.7448L23.0354 17.6341C22.8883 17.4997 22.8128 17.3204 22.8128 17.0879H22.6628ZM22.9356 17.746C23.1207 17.9075 23.3635 17.9847 23.6562 17.9847V17.8347C23.3904 17.8347 23.1856 17.7651 23.0342 17.6329L22.9356 17.746ZM29.2046 11.6255H29.2796V11.5505H29.2046V11.6255ZM29.2046 13.0381H29.1296V13.1131H29.2046V13.0381ZM30.2305 13.0381H30.3055V12.9631H30.2305V13.0381ZM30.2305 14.0049V14.0799H30.3055V14.0049H30.2305ZM29.2046 14.0049V13.9299H29.1296V14.0049H29.2046ZM29.3335 17.7324L29.2765 17.7813L29.2785 17.7834L29.3335 17.7324ZM30.2627 17.8237H30.3377V17.7293L30.2457 17.7507L30.2627 17.8237ZM30.2627 18.8335L30.2827 18.9058L30.3377 18.8905V18.8335H30.2627ZM27.8994 14.0049H27.9744V13.9299H27.8994V14.0049ZM26.9434 14.0049H26.8684V14.0799H26.9434V14.0049ZM26.9434 13.0381V12.9631H26.8684V13.0381H26.9434ZM27.8994 13.0381V13.1131H27.9744V13.0381H27.8994ZM27.8994 11.6255V11.5505H27.8244V11.6255H27.8994ZM29.1296 11.6255V13.0381H29.2796V11.6255H29.1296ZM29.2046 13.1131H30.2305V12.9631H29.2046V13.1131ZM30.1555 13.0381V14.0049H30.3055V13.0381H30.1555ZM30.2305 13.9299H29.2046V14.0799H30.2305V13.9299ZM29.1296 14.0049V17.249H29.2796V14.0049H29.1296ZM29.1296 17.249C29.1296 17.4777 29.1733 17.6608 29.2766 17.7812L29.3904 17.6836C29.3218 17.6036 29.2796 17.4644 29.2796 17.249H29.1296ZM29.2785 17.7834C29.3895 17.9033 29.5737 17.9524 29.8062 17.9524V17.8024C29.5874 17.8024 29.4565 17.7549 29.3885 17.6815L29.2785 17.7834ZM29.8062 17.9524C29.9625 17.9524 30.1204 17.9338 30.2797 17.8968L30.2457 17.7507C30.097 17.7853 29.9505 17.8024 29.8062 17.8024V17.9524ZM30.1877 17.8237V18.8335H30.3377V17.8237H30.1877ZM30.2427 18.7612C29.9512 18.842 29.6715 18.882 29.4033 18.882V19.032C29.6866 19.032 29.9798 18.9897 30.2827 18.9058L30.2427 18.7612ZM29.4033 18.882C28.9156 18.882 28.563 18.7478 28.331 18.4918C28.0977 18.2343 27.9744 17.8408 27.9744 17.2974H27.8244C27.8244 17.8604 27.9518 18.2967 28.2198 18.5925C28.4891 18.8896 28.8884 19.032 29.4033 19.032V18.882ZM27.9744 17.2974V14.0049H27.8244V17.2974H27.9744ZM27.8994 13.9299H26.9434V14.0799H27.8994V13.9299ZM27.0184 14.0049V13.0381H26.8684V14.0049H27.0184ZM26.9434 13.1131H27.8994V12.9631H26.9434V13.1131ZM27.9744 13.0381V11.6255H27.8244V13.0381H27.9744ZM27.8994 11.7005H29.2046V11.5505H27.8994V11.7005ZM32.6206 18.8496V18.9246H32.6956V18.8496H32.6206ZM31.3154 18.8496H31.2404V18.9246H31.3154V18.8496ZM31.3154 13.0381V12.9631H31.2404V13.0381H31.3154ZM32.6206 13.0381H32.6956V12.9631H32.6206V13.0381ZM31.4229 11.0293L31.3691 10.977L31.3684 10.9778L31.4229 11.0293ZM32.5186 12.0229L32.5716 12.076L32.5723 12.0753L32.5186 12.0229ZM31.4229 12.0229L31.3683 12.0745L31.3698 12.076L31.4229 12.0229ZM32.6206 18.7746H31.3154V18.9246H32.6206V18.7746ZM31.3904 18.8496V13.0381H31.2404V18.8496H31.3904ZM31.3154 13.1131H32.6206V12.9631H31.3154V13.1131ZM32.5456 13.0381V18.8496H32.6956V13.0381H32.5456ZM31.3099 11.5288C31.3099 11.3454 31.3665 11.198 31.4773 11.0808L31.3684 10.9778C31.2285 11.1256 31.1599 11.3112 31.1599 11.5288H31.3099ZM31.4766 11.0816C31.5877 10.9674 31.7487 10.9056 31.9707 10.9056V10.7556C31.7201 10.7556 31.5158 10.8262 31.3691 10.977L31.4766 11.0816ZM31.9707 10.9056C32.1927 10.9056 32.3537 10.9674 32.4648 11.0816L32.5723 10.977C32.4256 10.8262 32.2213 10.7556 31.9707 10.7556V10.9056ZM32.4648 11.0816C32.5789 11.1988 32.6369 11.346 32.6369 11.5288H32.7869C32.7869 11.3106 32.7161 11.1247 32.5723 10.977L32.4648 11.0816ZM32.6369 11.5288C32.6369 11.7076 32.5791 11.8531 32.4648 11.9706L32.5723 12.0753C32.7158 11.9278 32.7869 11.7439 32.7869 11.5288H32.6369ZM32.4655 11.9699C32.3545 12.0809 32.1933 12.1413 31.9707 12.1413V12.2913C32.2208 12.2913 32.4248 12.2228 32.5716 12.076L32.4655 11.9699ZM31.9707 12.1413C31.7481 12.1413 31.5869 12.0809 31.4759 11.9699L31.3698 12.076C31.5166 12.2228 31.7206 12.2913 31.9707 12.2913V12.1413ZM31.4773 11.9714C31.3663 11.854 31.3099 11.7083 31.3099 11.5288H31.1599C31.1599 11.7432 31.2288 11.9269 31.3684 12.0745L31.4773 11.9714ZM36.0957 17.1953L36.0239 17.2168L36.0962 17.4581L36.1676 17.2166L36.0957 17.1953ZM37.3257 13.0381V12.9631H37.2697L37.2538 13.0168L37.3257 13.0381ZM38.6738 13.0381L38.7447 13.0626L38.7792 12.9631H38.6738V13.0381ZM36.6597 18.8496V18.9246H36.7131L36.7305 18.8742L36.6597 18.8496ZM35.5264 18.8496L35.4556 18.8743L35.4731 18.9246H35.5264V18.8496ZM33.4961 13.0381V12.9631H33.3904L33.4253 13.0628L33.4961 13.0381ZM34.8496 13.0381L34.9215 13.0166L34.9054 12.9631H34.8496V13.0381ZM36.1676 17.2166L37.3976 13.0594L37.2538 13.0168L36.0238 17.174L36.1676 17.2166ZM37.3257 13.1131H38.6738V12.9631H37.3257V13.1131ZM38.603 13.0135L36.5888 18.825L36.7305 18.8742L38.7447 13.0626L38.603 13.0135ZM36.6597 18.7746H35.5264V18.9246H36.6597V18.7746ZM35.5972 18.8249L33.5669 13.0134L33.4253 13.0628L35.4556 18.8743L35.5972 18.8249ZM33.4961 13.1131H34.8496V12.9631H33.4961V13.1131ZM34.7778 13.0596L36.0239 17.2168L36.1675 17.1738L34.9215 13.0166L34.7778 13.0596ZM42.8794 18.8496L42.8127 18.884L42.8337 18.9246H42.8794V18.8496ZM42.729 18.3071L42.8029 18.2945L42.7778 18.1479L42.6749 18.2552L42.729 18.3071ZM39.7749 18.4575L39.7246 18.5132L39.7749 18.4575ZM39.9092 15.7988L39.953 15.8597L39.953 15.8597L39.9092 15.7988ZM42.686 15.2993V15.3743H42.761V15.2993H42.686ZM42.4336 14.1982L42.3784 14.2491L42.3789 14.2496L42.4336 14.1982ZM40.9351 14.1499L40.981 14.2092L40.9816 14.2087L40.9351 14.1499ZM40.6504 14.7139V14.7889H40.7254V14.7139H40.6504ZM39.3452 14.7139H39.2702V14.7889H39.3452V14.7139ZM39.6621 13.8223L39.7216 13.8679L39.7219 13.8675L39.6621 13.8223ZM40.5215 13.167L40.4918 13.0981L40.4915 13.0982L40.5215 13.167ZM43.3682 13.4463L43.3196 13.5034L43.3199 13.5037L43.3682 13.4463ZM43.9912 14.8857H44.0662L44.0662 14.8844L43.9912 14.8857ZM44.2114 18.7583H44.2864V18.7415L44.2793 18.7263L44.2114 18.7583ZM44.2114 18.8496V18.9246H44.2864V18.8496H44.2114ZM42.1704 17.7217L42.1344 17.6559L42.134 17.6561L42.1704 17.7217ZM42.686 17.2168L42.752 17.2526L42.761 17.2358V17.2168H42.686ZM42.686 16.1211H42.761V16.0461H42.686V16.1211ZM40.7739 17.6895L40.7233 17.7449L40.7246 17.746L40.7739 17.6895ZM42.946 18.8152C42.8943 18.715 42.8456 18.5437 42.8029 18.2945L42.6551 18.3198C42.6983 18.5719 42.7499 18.7622 42.8127 18.884L42.946 18.8152ZM42.6749 18.2552C42.2737 18.6737 41.7848 18.882 41.2036 18.882V19.032C41.8256 19.032 42.3536 18.8071 42.7831 18.359L42.6749 18.2552ZM41.2036 18.882C40.6351 18.882 40.1778 18.7203 39.8252 18.4019L39.7246 18.5132C40.1096 18.8608 40.6048 19.032 41.2036 19.032V18.882ZM39.8252 18.4019C39.4719 18.0829 39.2967 17.6912 39.2967 17.2222H39.1467C39.1467 17.7343 39.3403 18.1662 39.7246 18.5132L39.8252 18.4019ZM39.2967 17.2222C39.2967 16.6241 39.5163 16.1735 39.953 15.8597L39.8654 15.7379C39.3853 16.083 39.1467 16.5813 39.1467 17.2222H39.2967ZM39.953 15.8597C40.3972 15.5394 41.0382 15.3743 41.8857 15.3743V15.2243C41.0217 15.2243 40.345 15.3922 39.8653 15.738L39.953 15.8597ZM41.8857 15.3743H42.686V15.2243H41.8857V15.3743ZM42.761 15.2993V14.918H42.611V15.2993H42.761ZM42.761 14.918C42.761 14.6026 42.6724 14.3428 42.4882 14.1469L42.3789 14.2496C42.5314 14.4118 42.611 14.6318 42.611 14.918H42.761ZM42.4887 14.1474C42.3015 13.9442 42.0219 13.8493 41.6655 13.8493V13.9993C41.9966 13.9993 42.2291 14.0871 42.3784 14.2491L42.4887 14.1474ZM41.6655 13.8493C41.3554 13.8493 41.0943 13.928 40.8885 14.0911L40.9816 14.2087C41.1554 14.071 41.3813 13.9993 41.6655 13.9993V13.8493ZM40.8892 14.0906C40.682 14.2508 40.5754 14.4602 40.5754 14.7139H40.7254C40.7254 14.5092 40.8085 14.3426 40.9809 14.2092L40.8892 14.0906ZM40.6504 14.6389H39.3452V14.7889H40.6504V14.6389ZM39.4202 14.7139C39.4202 14.4132 39.5195 14.1318 39.7216 13.8679L39.6026 13.7766C39.3822 14.0642 39.2702 14.3772 39.2702 14.7139H39.4202ZM39.7219 13.8675C39.9245 13.5997 40.2001 13.3888 40.5514 13.2358L40.4915 13.0982C40.1196 13.2603 39.8223 13.4862 39.6023 13.777L39.7219 13.8675ZM40.5512 13.2359C40.9059 13.0828 41.3021 13.0057 41.7407 13.0057V12.8557C41.2842 12.8557 40.8675 12.936 40.4918 13.0981L40.5512 13.2359ZM41.7407 13.0057C42.4084 13.0057 42.932 13.1741 43.3196 13.5034L43.4167 13.3891C42.9951 13.0309 42.4337 12.8557 41.7407 12.8557V13.0057ZM43.3199 13.5037C43.705 13.8275 43.9058 14.2851 43.9162 14.887L44.0662 14.8844C44.0552 14.2474 43.8406 13.7455 43.4164 13.3889L43.3199 13.5037ZM43.9162 14.8857V17.5068H44.0662V14.8857H43.9162ZM43.9162 17.5068C43.9162 18.0355 43.9903 18.4649 44.1436 18.7903L44.2793 18.7263C44.139 18.4286 44.0662 18.0238 44.0662 17.5068H43.9162ZM44.1364 18.7583V18.8496H44.2864V18.7583H44.1364ZM44.2114 18.7746H42.8794V18.9246H44.2114V18.7746ZM41.4453 17.9847C41.7159 17.9847 41.9701 17.9188 42.2068 17.7872L42.134 17.6561C41.9195 17.7753 41.6904 17.8347 41.4453 17.8347V17.9847ZM42.2064 17.7875C42.4471 17.6559 42.6299 17.4776 42.752 17.2526L42.6201 17.181C42.513 17.3785 42.3521 17.5369 42.1344 17.6559L42.2064 17.7875ZM42.761 17.2168V16.1211H42.611V17.2168H42.761ZM42.686 16.0461H41.9824V16.1961H42.686V16.0461ZM41.9824 16.0461C41.4926 16.0461 41.1111 16.131 40.8494 16.3118L40.9347 16.4352C41.16 16.2795 41.5055 16.1961 41.9824 16.1961V16.0461ZM40.8494 16.3118C40.5847 16.4948 40.4519 16.7565 40.4519 17.0879H40.6019C40.6019 16.8034 40.7125 16.5889 40.9347 16.4352L40.8494 16.3118ZM40.4519 17.0879C40.4519 17.3567 40.5411 17.5784 40.7234 17.7448L40.8245 17.6341C40.6774 17.4997 40.6019 17.3204 40.6019 17.0879H40.4519ZM40.7246 17.746C40.9097 17.9075 41.1526 17.9847 41.4453 17.9847V17.8347C41.1794 17.8347 40.9747 17.7651 40.8232 17.6329L40.7246 17.746Z" fill="#9D9A9A"/>
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

                </div>

                <div class="_bottom_">
                    <p>Silver Haze</p>
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

window.customElements.define('strain-1', WebComp);