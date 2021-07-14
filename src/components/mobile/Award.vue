<template>
    <div @click="$emit('show-detail', name, year)" class="medal square-frame" :style="applyStyle">
        <img :src="require(`@/assets/awards/${src}`)" :alt="name"/>
    </div>
</template>

<script>
export default {
    name:"Award",
    props: {
        name: String,
        year: String, 
        src: String,
        color: String

    }, 
    data: function() {
        return {
            show: false,

        }
    },
    computed: {
        applyStyle() {
            return {
                '--bordercolor':this.color,
            }
        }
    }

    
}
</script>


<style scoped>
.medal {
    width:15vw;height:15vw;background-color:black;margin: 2vw 5vw;
    transition: all .2s ease-in-out;
    position:relative;
    
}

.square-frame {
    border:1vw solid var(--bordercolor);
    box-shadow: inset 0 50px rgba(255,255,255,0.1),
             inset 2px -15px 30px rgba(0,0,0,0.4),
             2px 2px 5px #0000004d;
    border-radius: 2vw;
    -webkit-border-radius: 2vw ;
    -moz-border-radius: 2vw;


}

img {
    width: 100%;
    height:100%;
    border-radius: 1vw;
    -webkit-border-radius: 1vw;
    -moz-border-radius: 1vw;
}

.overlay {
    position: absolute;
    width:100%;
    height:100%;
    border-radius: 0.5vw;
    background-color: black;
    opacity: 0.8;
    
}

.overlay-text {
    position:absolute;
    padding:10%;
    width: 100%;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    line-height:1.2vw !important;
}

span {
    word-wrap: break-word;
}


</style>