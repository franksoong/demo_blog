<template>
    <div>
        <transition name='fade' mode='out-in'>
            <router-view/>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {
    },
};
</script>

<style scoped lang="scss">

.fade-enter-active,
.fade-leave-active {
    transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
