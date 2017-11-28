<template>
    <responsive-layout>
        <template slot='header'>
            <div class='headercontainer'>
                <b-navbar type="light" variant="light">

                    <b-navbar-brand href="#">
                        <img class="fa fa-users brand" alt="Logo@Me">
                    </b-navbar-brand>

                    <b-navbar-nav>
                        <b-nav-item href="#">Link1</b-nav-item>
                        <b-nav-item href="#">Link2</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <!-- Using button-content slot -->
                            <template slot="button-content">
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Signout</b-dropdown-item>
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



@include media-breakpoint-up(md) {
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
