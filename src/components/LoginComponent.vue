<script setup>

</script>

<template>
    <div class="login-container">
        <div class="logo-container vertical-center">
            <video autoplay muted loop class="background-video">
                <source src="/src/assets/videos/mujer.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <img src="/src/assets/popayan_escudo.png" alt="">
        </div>
        <div class="vertical-center text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <form>
                            <img class="mb-4" src="/src/assets/popayan_escudo.png" width="100">
                            <h1 class="h3 mb-3 fw-normal">Inicio de sesión</h1>

                            <div class="form-floating">
                                <input type="email" class="form-control rounded-0" id="floatingInput"
                                    placeholder="name@example.com">
                                <label for="floatingInput">No. Identificacion</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control rounded-0" id="floatingPassword"
                                    placeholder="Password">
                                <label for="floatingPassword">Contraseña</label>
                            </div>

                            <div class="checkbox mb-3 d-flex justify-content-start">
                                <label>
                                    <input type="checkbox" value="remember-me"> Recuerdame
                                </label>
                            </div>
                            <router-link to="/dashboard" class="w-100 btn btn-lg btn-primary rounded-0" type="button">Iniciar sesión</router-link>
                                <p class="mt-5 mb-3 text-muted">
                                    <a id="forgot-password" href="#">¿Ha olvidado su contraseña?</a>
                                </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
img {
    z-index: 1;
}

.background-video {
    position: relative;
    top: 0;
    left: 0;
    /* width: 100%;
    height: 100%; */
    object-fit: contain;
    /* Asegura que el video cubra todo el contenedor */
    z-index: -1;
    /* Coloca el video detrás del contenido */
}


.login-container {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100vh;
    width: 100vw;
}



.vertical-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-container {

    background-color: #00000075;
    overflow: hidden;
}

.logo-container img {
    max-width: 400px;
}

.btn-primary {
    background-color: #003489;
    border: #003489;
}

a {
    color: #003489;
}

@media (max-width: 575.98px) {
    .login-container {
        background-color: #672e8f;
        grid-template-columns: 100%;
    }

    .logo-container {
        display: none;
    }
}
</style>
