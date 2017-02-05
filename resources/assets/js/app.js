import "./bootstrap";
import router from "./routes";

import sidenav from "./components/SideNav"

const app = new Vue({
    el: '#app',
    components: { sidenav },
    router,
});
