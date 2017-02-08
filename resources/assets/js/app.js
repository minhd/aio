import router from "./routes"
import sidenav from "./components/SideNav"
import topnav from "./components/TopNav"

import { store } from "./store";

window.eventBus = new Vue();

import Notification from './components/display/Notification'
const NotificationComponent = window.Vue.extend(Notification)
window.openNotification = (propsData = {
    title: '',
    message: '',
    type: '',
    direction: '',
    duration: 3000,
    container: '.notifications'
}) => {
    return new NotificationComponent({
        el: document.createElement('div'),
        propsData
    })
}

const app = new Vue({
    el: '#app',
    components: { sidenav,topnav },
    router,
    store,
    mounted() {
        axios.get('api/user')
            .then((response) => this.$store.state.user = response.data)
            .catch((error) => console.error('User is not logged in', error));
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