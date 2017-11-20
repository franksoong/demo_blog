
import Home from '&/components/Home.vue';
import NotFound from '&/components/404';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        iconCls: 'fa fa-home',
        children: [
        ],
    }, {
        path: '/404',
        component: NotFound,
        name: 'NotFound',
        hidden: true,
    }, {
        path: '*',
        hidden: true,
        redirect: {
            path: '/404',
        },
    },
    // TODO add more...
];

export default routes;
