/*
 * @Author: soong
 * @Date: 2017-11-17 10:52:11
 * @Last Modified by: soong
 * @Last Modified time: 2017-11-22 21:18:40
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'font-awesome/css/font-awesome.min.css';
import App from '&/App';
import router from '&/router';

// import Mock from '@/mock';
// Mock.initilizeMock();


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
