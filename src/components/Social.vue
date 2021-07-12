<template>
    <img @click="goTo" :src="require(`@/assets/social-media/${imgurl}`)" :alt="imgurl"/>
</template>

<script>

export default {
    name: "Social",
    props: {
        imgurl:String,
        siteurl:String
    },
    methods: {
        goTo() {
            window.open(this.siteurl, "_blank")
        }
    }
}
</script>

<style scoped>
img {
    width:3vw;
    background-color: white;
    border-radius:50%;
    cursor:pointer;
}

</style>
