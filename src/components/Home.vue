/*
 * @Author: soong
 * @Date: 2017-11-20 22:00:53
 * @Last Modified by: soong
 * @Last Modified time: 2017-11-22 21:17:15
 */
<template>
    <div class="container">
        <header>
            <div class="blog-masthead">
                <div class="container">
                    <nav class="nav">
                        <a class="nav-link active" href="#">Home</a>
                        <a class="nav-link" href="#">New features</a>
                        <a class="nav-link" href="#">Press</a>
                        <a class="nav-link" href="#">New hires</a>
                        <a class="nav-link" href="#">About</a>
                    </nav>
                </div>
            </div>

            <div class="blog-header">
                <div class="container">
                    <h1 class="blog-title">The Bootstrap Blog</h1>
                    <p class="lead blog-description">An example blog template built with Bootstrap.</p>
                </div>
            </div>
        </header>

        <main class="container">

        </main>

        <footer class="blog-footer">
            <p>Blog template built for
                <a href="https://getbootstrap.com/">Bootstrap</a> by
                <a href="https://twitter.com/mdo">@mdo</a>
            </p>
            <p>
                <a href="#">Back to top</a>
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        name() {

        },
    },

};
</script>

<style lang='scss'>
@import '~&/styles/custom.scss';


/*
 * Override Bootstrap's default container.
 */

.container {
  max-width: 60rem;
}



.blog-masthead {
    margin-bottom: 3rem;
    background-color: #428bca;
    box-shadow: inset 0 -.1rem .25rem rgba(0, 0, 0, .1);

    .nav-link {
        position: relative;
        padding: 1rem;
        font-weight: 500;
        color: #cdddeb;

        &:hover,
        &:focus {
            color: #fff;
            background-color: transparent;
        }

        .active {
            color: #fff;
            &:after {
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 0;
                height: 0;
                margin-left: -.3rem;
                vertical-align: middle;
                content: "";
                border-right: .3rem solid transparent;
                border-bottom: .3rem solid;
                border-left: .3rem solid transparent;
            }
        }
    }
}
</style>
