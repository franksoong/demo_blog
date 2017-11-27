<template>
    <b-container>
        <hamburger @statechanged="hamburgerToggled"></hamburger>
        <router-view></router-view>
    </b-container>
</template>

<script>
import Hamburger from './widgets/Hamburger';

export default {
    components: {
        Hamburger,
    },
    data() {
        return {
        };
    },
    methods: {
        name() {

        },

        hamburgerToggled() {

        },
    },
};
</script>

<style lang='scss'>
@import './styles/vars.scss';

:root {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
}

body {
    margin: 0px;
    padding: 0px;
    font-family: $--font-family;
    font-size: $--font-size;
    -webkit-font-smoothing: antialiased;
}
</style>
