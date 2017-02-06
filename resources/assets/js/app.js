import "./bootstrap";
import router from "./routes";

import sidenav from "./components/SideNav"
import topnav from "./components/TopNav"

const app = new Vue({
    el: '#app',
    components: { sidenav,topnav },
    router,
});
