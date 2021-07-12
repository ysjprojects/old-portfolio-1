<template>
    <div @mouseover="addOverlay" @mouseout="removeOverlay" class="medal square-frame" :style="applyStyle">
        <div v-show="show === true" class="overlay">
        </div>
        <div v-show="show === true" class="overlay-text">
                <span style="font-size:1.2vw">{{name}}</span>
                <div style="height:1vw"></div>
                <span style="font-size:1vw;color:#A9A9A9">{{year}}</span>
        </div>
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
            timer:null
        }
    },
    computed: {
        applyStyle() {
            return {
                '--bordercolor':this.color,
            }
        }
    },
    methods: {
        addOverlay() {
            this.timer = setTimeout(()=>this.show = true,100)

        },
        removeOverlay() {
            clearTimeout(this.timer)
            this.show = false
        }
    } 

    
}
</script>


<style scoped>
.medal {
    width:5vw;height:5vw;background-color:black;margin: 1vw 5vw;
    transition: all .2s ease-in-out;
    position:relative;
    
}

.medal:hover { 
    width:10vw;height:10vw;margin: 1vw 2.5vw;
}

.square-frame {
    border:0.5vw solid var(--bordercolor);
    box-shadow: inset 0 50px rgba(255,255,255,0.1),
             inset 2px -15px 30px rgba(0,0,0,0.4),
             2px 2px 5px #0000004d;
    border-radius: 1vw;
    -webkit-border-radius: 1vw ;
    -moz-border-radius: 1vw;


}

img {
    width: 100%;
    height:100%;
    border-radius: 0.5vw;
    -webkit-border-radius: 0.5vw;
    -moz-border-radius: 0.5vw;
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
}

span {
    word-wrap: break-word;
}


</style>