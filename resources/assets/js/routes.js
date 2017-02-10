let routes = [
    { path: '/', component: require('./views/Home') },
    { path: '/about', component: require('./views/About') },
    { path: '/quotes', component: require('./views/Quotes') },
    { path: '/settings', component: require('./views/Settings') },
];

export default new VueRouter({
    routes,
    // mode: "history",
    linkActiveClass: "is-active"
});