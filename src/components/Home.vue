<template>
    <responsive-layout>
        <template slot='header'>
            <div class='headercontainer'>
                <b-navbar type="light" variant="light">

                    <b-navbar-brand href="#">
                        <img class="fa fa-users brand" alt="  Logo@Me">
                    </b-navbar-brand>

                    <b-navbar-nav pills >
                        <b-nav-item href="#">Home</b-nav-item>
                        <b-nav-item href="#">Projects</b-nav-item>
                        <b-nav-item href="#">About</b-nav-item>
                        <b-nav-item href="#">Contact</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav pills  class="ml-auto">
                        <b-nav-item-dropdown text="Theme" right @mouseover="">
                            <b-dropdown-item href="#">Light</b-dropdown-item>
                            <b-dropdown-item href="#">Primary</b-dropdown-item>
                            <b-dropdown-item href="#">Dark</b-dropdown-item>
                            <b-dropdown-item href="#">Chrome</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown text="Language" right>
                            <!-- Using button-content slot -->
                            <!-- <template slot="button-content">
                                <em>Language</em>
                            </template> -->
                            <b-dropdown-item href="#">中文</b-dropdown-item>
                            <b-dropdown-item href="#">Enlish</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-navbar>
            </div>
        </template>
        <template slot='wrap'>
            wrap content
        </template>
    </responsive-layout>
</template>

<script>
import ResponsiveLayout from '../layout/ResponsiveLayout';

export default {
    components: {
        ResponsiveLayout,
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
@import '../styles/bootstrap-functions.scss';


.headercontainer {
    //mobile first
    width: 100%;

    .navbar {
        align-items: start;
        flex-direction: column;
        padding:0 20px;

        .brand {
            font-size: 1em;
            color: pink;
        }

        .ml-auto {
            margin-left: 0 !important;
        }
    }
}



@include media-breakpoint-up(lg) {
    .headercontainer {
        width: 100%;

        .navbar {
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: baseline;

            .ml-auto {
                margin-left: auto !important;
            }

            ul {
                flex-flow: row nowrap;
                justify-content: space-around;
            }

            .navbar-nav {
                .nav-item {
                    padding-right: .5rem;
                    padding-left: .5rem;

                    .dropdown-menu {
                        position: absolute;
                        &.dropdown-menu-right {
                            right: 0;
                            left: auto;
                        }
                    }
                }
            }
        }
    }
}
</style>
