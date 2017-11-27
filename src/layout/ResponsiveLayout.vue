<template>
    <b-container fluid class='layout'>
        <b-row class='main'>
            <b-col class='navheader d-md-flex' :md='12' :class="navheader_class">
                <slot name='header'>header</slot>
            </b-col>
            <b-col class='content' :md='12' :sm='content_cols' :cols='content_cols'>
                <!-- show this toogle only for <= sm  -->
                <b-row class="d-md-none d-lg-none">
                    <hamburger @statechanged="hamburgerToggled"></hamburger>
                </b-row>

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
            return this.navheader_active ? 9 : 12;
        },
        navheader_class() {
            return this.navheader_active ? {
                'col-sm-3': true,
                'col-3': true,
                'd-sm-none': false,
                'd-none': false,
            } : {
                'd-sm-none': true,
                'd-none': true,
            };
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

.row>[class^=col-] {
    background-color: rgba(86, 61, 124, .15);
    border: 1px solid rgba(86, 61, 124, .2);
}


.layout {
    .navheader {
        line-height: 60px;
        background-color: $gray-200;
    }
    .content {
        line-height: 500px;
        background-color: $gray-300;
    }

    @include media-breakpoint-down(md) {
        .navheader {
            line-height: 60px;
            background-color: $gray-200;
            float: left;
        }

        .content {
            line-height: 500px;
            background-color: $gray-300;
            float: left; // display: inline-flex;
        }
    }

    .footer {
        line-height: 60px;
        background-color: $gray-500;
    }
}
</style>
