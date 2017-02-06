import "./bootstrap";
import router from "./routes";

import sidenav from "./components/SideNav"
import topnav from "./components/TopNav"

const app = new Vue({
    el: '#app',
    components: { sidenav,topnav },
    router,
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