<template>
    <img :style="showColor ? 'filter: grayscale(0);' : 'filter: grayscale(100);'" @click="onClickLogo" :src="require(`@/assets/circular-logos/${src}`)" :alt="name" />
</template> 

<script>
export default {
    name:"Skill",
    props: {
        src: String,
        name: String,
        experience: String
    },
    data: function() {
      return {
        showColor: false,
      }
    },
    methods: {
      onClickLogo() {
        this.showColor = true
        this.$emit('load-skill-info',this.name, this.experience)
        return
      }
    }
    
}
</script>


<style scoped>
img {
  display: block;
  max-width: 100%;
  border-radius: 50%;
  filter: grayscale(100%);
  border: solid 1vw tomato;
  transition: .15s;
  background-color:white;

}
img:hover {
  filter: grayscale(0);
}




</style>