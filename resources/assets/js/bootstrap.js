import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import axios from "axios";

import moment from "moment-timezone";
window.Vue = Vue;

Vue.use(VueRouter);
Vue.use(Vuex);

window.axios = axios;
window.moment = moment;
window.VueRouter = VueRouter;

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
