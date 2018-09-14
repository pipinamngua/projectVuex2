<template>
    <h1>Edit profile</h1>
</template>

<script>
    export default {
        computed: {
            isLoggedIn() {
                return this.$store.state.user.isLoggedIn
            }
        }
    }
</script>
