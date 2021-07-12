<template>
    <img @mouseover="$emit('load-skill-info',name, experience)" @mouseout="$emit('unload-skill-info')" :src="require(`@/assets/circular-logos/${src}`)" :alt="name" />
</template>

<script>
export default {
    name:"Skill",
    props: {
        src: String,
        name: String,
        experience: String
    },
    
}
</script>


<style scoped>
img {
  display: block;
  max-width: 100%;
  border-radius: 50%;
  filter: grayscale(100%);
  border: solid 1vh tomato;
  transition: .15s;
  background-color:white;

}
img:hover {
  filter: grayscale(0);
}




</style>