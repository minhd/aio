import "./bootstrap"
import router from "./routes"
import axios from "axios"
import sidenav from "./components/SideNav"
import topnav from "./components/TopNav"

import { store } from "./store";

window.eventBus = new Vue();

const app = new Vue({
    el: '#app',
    components: { sidenav,topnav },
    router,
    store,
    mounted() {
        axios.get('api/user').then((response) => this.$store.state.user = response.data)
    }
});

document.getElementById("nav-toggle").addEventListener ("click", toggleNav);
function toggleNav() {
    var nav = document.getElementById("nav-menu");
    var className = nav.getAttribute("class");
    if(className == "nav-right nav-menu") {
        nav.className = "nav-right nav-menu is-active";
    } else {
        nav.className = "nav-right nav-menu";
    }
}