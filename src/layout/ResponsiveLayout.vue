<template>
    <b-container fluid class='layout'>
        <b-row class='main'>
            <b-col class='navheader d-md-flex' :md='12' :class="{active: this.navheader_active}">
                <slot name='header'>header</slot>
            </b-col>
            <b-col class='wrap' :md='12' :class="{active: this.navheader_active}">
                <!-- show this toogle only for <= md  -->
                <div class="sidebar-toggle d-lg-none">
                    <hamburger @statechanged="hamburgerToggled"></hamburger>
                </div>

                <slot name='content'>content</slot>
            </b-col>
        </b-row>
        <b-row class='footer'>
            <slot name='footer'>footer</slot>
        </b-row>
    </b-container>
</template>

<script>
import Hamburger from '../widgets/Hamburger';

export default {
    components: {
        Hamburger,
    },
    data() {
        return {
            navheader_active: false,
        };
    },
    computed: {
        content_cols() {
            // return this.navheader_active ? 9 : 12;
            return 12;
        },
    },
    methods: {
        name() {

        },

        hamburgerToggled(state) {
            this.navheader_active = state;
        },
    },
};
</script>

<style scoped lang='scss'>
@import '../styles/bootstrap-override.scss';


.layout {
    overflow-x: hidden;

    .main {
        // set the anchor point
        position: relative;
    }

    .navheader {
        line-height: 60px;
        background-color: $gray-200;
    }
    .wrap {
        position: relative;
        line-height: 500px;
        background-color: $gray-300;
    }





    @include media-breakpoint-down(md) {
        .sidebar {
            //navheader will change to sidebar in md scale
            line-height: 60px;
            background-color: $gray-200;
            position: absolute;
            top: 0;
            bottom: 0;
            left: -14rem;
            width: 14rem;
            visibility: hidden;
            overflow-y: auto;
            z-index: 100;
            transition: all .3s ease-in-out;
        }


        .navheader {
            @extend .sidebar;

            &.active {
                visibility: visible;
                transform: translateX(14rem);
            }
        }


        .wrap {
            line-height: 500px;
            background-color: $gray-300;
            width: 100%;
            transition: all .3s ease-in-out;

            &.active {
                transform: translateX(14rem);
            }
        }

        .sidebar-toggle {
            position: absolute;
            top: 20px;
            left: 20px;
            display: block;
            border-radius: .25rem;
            cursor: pointer;
            padding: 10px; // background-color: red;
            line-height: 1em;
        }
    }

    .footer {
        line-height: 60px;
        background-color: $gray-500;
    }
}
</style>
