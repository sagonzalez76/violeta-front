<script setup>

</script>

<template>
    <div class="container sticky-top bg-violeta rounded-bottom-5 mb-5">
        <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Inicio</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Formulario</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Chatbot</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Comunidad</a></li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">About</router-link>
                </li>
            </ul>
        </header>
    </div>


    <div class="px-4 py-5 my-5 text-center vh-90">
        <img class="d-block mx-auto mb-4" src="../assets/logo_violeta.png" alt="" width="142" height="70">
        <h1 class="display-5 fw-bold text-body-emphasis">Denuncia</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid vero fugit
                ab quibusdam soluta. Pariatur ad incidunt fugiat totam. Quasi autem amet soluta et nemo expedita ex
                officia ea?</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <router-link to="/victima" type="button" class="btn btn-primary btn-lg px-4 gap-3">Formula tu denuncia
                    <i class="bi bi-arrow-right"></i></router-link>
                <!-- <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button> -->
            </div>
        </div>
    </div>


    <div class="b-example-divider"></div>


    <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold text-body-emphasis">Formulario</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor officia delectus
                praesentium nostrum eligendi obcaecati unde doloremque. Eum, a commodi placeat, voluptatem sed
                consequuntur sint sequi, delectus quod harum totam?</p>
            <!-- <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
            </div> -->
        </div>
        <div class="overflow-hidden" style="max-height: 30vh;">
            <div class="container px-5">
                <img src="https://www.shutterstock.com/shutterstock/photos/2324242781/display_1500/stock-vector-vector-flat-horizontal-banner-for-international-women-s-day-women-of-different-cultures-and-2324242781.jpg"
                    class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500"
                    loading="lazy">
            </div>
        </div>
    </div>



    <input class="chat-menu hidden" id="offchat-menu" type="checkbox" />
    <div class="sticky-button" id="sticky-button">
        <label for="offchat-menu">
            <svg class="chat-icon" viewBox="0 0 24 24">
                <path
                    d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
            </svg>
            <svg class="close-icon" viewBox="0 0 512 512">
                <path
                    d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
            </svg>
        </label>
    </div>
    <div class="sticky-chat">
        <div class="chat-content">
            <div class="chat-header">
                <svg viewBox="0 0 32 32">
                    <path
                        d="M24,22a1,1,0,0,1-.64-.23L18.84,18H17A8,8,0,0,1,17,2h6a8,8,0,0,1,2,15.74V21a1,1,0,0,1-.58.91A1,1,0,0,1,24,22ZM17,4a6,6,0,0,0,0,12h2.2a1,1,0,0,1,.64.23L23,18.86V16.92a1,1,0,0,1,.86-1A6,6,0,0,0,23,4Z" />
                    <rect height="2" width="2" x="19" y="9"></rect>
                    <rect height="2" width="2" x="14" y="9"></rect>
                    <rect height="2" width="2" x="24" y="9"></rect>
                    <path
                        d="M8,30a1,1,0,0,1-.42-.09A1,1,0,0,1,7,29V25.74a8,8,0,0,1-1.28-15,1,1,0,1,1,.82,1.82,6,6,0,0,0,1.6,11.4,1,1,0,0,1,.86,1v1.94l3.16-2.63A1,1,0,0,1,12.8,24H15a5.94,5.94,0,0,0,4.29-1.82,1,1,0,0,1,1.44,1.4A8,8,0,0,1,15,26H13.16L8.64,29.77A1,1,0,0,1,8,30Z" />
                </svg>
                <div class="title">Habla ahora con nuestro equipo <span>Un asesor se pondra en contacto contigo.</span>
                </div>
            </div>
            <div class="chat-text"><span>Hola, como te podemos ayudar?</span>
                <span class="typing">
                    <svg viewBox="0 0 512 512">
                        <circle cx="256" cy="256" r="48"></circle>
                        <circle cx="416" cy="256" r="48"></circle>
                        <circle cx="96" cy="256" r="48"></circle>
                    </svg>
                </span>
            </div>
        </div>
        <a class="chat-button" href="https://www.popayan.gov.co/Paginas/Inicio.aspx#gsc.tab=0" target="_blank">
            <span>Escribe un mensaje!</span>
            <svg viewBox="0 0 32 32">
                <path
                    d="M19.47,31a2,2,0,0,1-1.8-1.09l-4-7.57a1,1,0,0,1,1.77-.93l4,7.57L29,3.06,3,12.49l9.8,5.26,8.32-8.32a1,1,0,0,1,1.42,1.42l-8.85,8.84a1,1,0,0,1-1.17.18L2.09,14.33a2,2,0,0,1,.25-3.72L28.25,1.13a2,2,0,0,1,2.62,2.62L21.39,29.66A2,2,0,0,1,19.61,31Z" />
            </svg>
        </a>
    </div>


</template>


<style scoped>
.bg-violeta {
    background-color: #683EE9 !important;
}

.nav-link {
    margin-inline: 1rem;
    color: aliceblue;
}

.nav-link:hover {
    transition: width 0.3s ease;
    /* Suaviza la transición del subrayado */
    text-decoration: underline;
    /* Aplica el subrayado en hover */
}

.vh-90 {
    height: 80vh !important;
}


.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    width: 100%;
    height: 1rem;
    background-color: #693ee934;
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
    --bd-violet-bg: #683EE9;
    --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--bs-white);
    --bs-btn-bg: var(--bd-violet-bg);
    --bs-btn-border-color: var(--bd-violet-bg);
    --bs-btn-hover-color: var(--bs-white);
    --bs-btn-hover-bg: #6528e0;
    --bs-btn-hover-border-color: #6528e0;
    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
    --bs-btn-active-color: var(--bs-btn-hover-color);
    --bs-btn-active-bg: #5a23c8;
    --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
    z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
    display: block !important;
}









.hidden {
    display: none;
}

.sticky-button {
    position: fixed;
    background-color: #003489;
    bottom: 20px;
    right: 20px;
    border-radius: 50px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    z-index: 20;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
}

.sticky-button svg {
    margin: auto;
    fill: #fff;
    width: 35px;
    height: 35px;
}

.sticky-button a,
.sticky-button label {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 55px;
    height: 55px;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
}

.sticky-button label svg.close-icon {
    display: none;
}

.sticky-chat {
    position: fixed;
    bottom: 70px;
    right: 20px;
    width: 320px;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    z-index: 21;
    opacity: 0;
    visibility: hidden;
}

.sticky-chat a {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    color: #505050;
}

.sticky-chat svg {
    width: 35px;
    height: 35px;
}

.sticky-chat .chat-content {
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    overflow: hidden;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
}

.sticky-chat .chat-header {
    position: relative;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    background-color: #003489;
    overflow: hidden;
}

.sticky-chat .chat-header:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 75px;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 70px 0 5px 0;
}

.sticky-chat .chat-header svg {
    width: 35px;
    height: 35px;
    flex: 0 0 auto;
    fill: #fff;
}

.sticky-chat .chat-header .title {
    padding-left: 15px;
    font-size: 14px;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    color: #fff;
}

.sticky-chat .chat-header .title span {
    font-size: 11px;
    font-weight: 400;
    display: block;
    line-height: 1.58em;
    margin: 0;
    color: #f4f4f4;
}

.sticky-chat .chat-text {
    display: flex;
    flex-wrap: wrap;
    margin: 30px 20px;
    font-size: 12px;
}

.sticky-chat .chat-text span {
    display: inline-block;
    margin-right: auto;
    padding: 10px;
    background-color: #f0f5fb;
    border-radius: 0px 15px 15px;
}

.sticky-chat .chat-text span:after {
    content: "justo ahora";
    display: inline-block;
    margin-left: 2px;
    font-size: 9px;
    color: #989b9f;
}

.sticky-chat .chat-text span.typing {
    margin: 15px 0 0 auto;
    padding: 10px;
    border-radius: 15px 0px 15px 15px;
}

.sticky-chat .chat-text span.typing:after {
    display: none;
}

.sticky-chat .chat-text span.typing svg {
    height: 13px;
    fill: #505050;
}

.sticky-chat .chat-button {
    display: flex;
    align-items: center;
    margin-top: 15px;
    padding: 12px 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    overflow: hidden;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
}

.sticky-chat .chat-button svg {
    width: 20px;
    height: 20px;
    fill: #505050;
    margin-left: auto;
    transform: rotate(40deg);
    -webkit-transform: rotate(40deg);
}

.chat-menu:checked+.sticky-button label {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}

.chat-menu:checked+.sticky-button label svg.chat-icon {
    text-align: center;
    align-content: center;
    display: none;
}

.chat-menu:checked+.sticky-button label svg.close-icon {
    display: table-cell;
}

.chat-menu:checked+.sticky-button+.sticky-chat {
    bottom: 90px;
    opacity: 1;
    visibility: visible;
}
</style>
