<template>
    <div @mouseover="addOverlay" @mouseout="removeOverlay" class="medal square-frame" :style="applyStyle">
        <div v-show="show === true" class="overlay">
        </div>
        <div v-show="show === true" class="overlay-text">
                <span style="font-size:1rem">{{name}}</span>
                <br>
                <span style="font-size:0.9rem">{{year}}</span>
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
    width:100px;height:100px;background-color:black;margin: 15px 50px;
    transition: all .2s ease-in-out;
    position:relative;
    
}

.medal:hover { 
    width:150px;height:150px;margin: 15px 25px;
}

.square-frame {
    border:5px solid var(--bordercolor);
    box-shadow: inset 0 50px rgba(255,255,255,0.1),
             inset 2px -15px 30px rgba(0,0,0,0.4),
             2px 2px 5px rgba(0,0,0,0.3);
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;


}

img {
    width: 100%;
    height:100%;
    border-radius: 15px;
    }

.overlay {
    position: absolute;
    width:100%;
    height:100%;
    border-radius: 15px;
    background-color: black;
    opacity: 0.8;
    
}

.overlay-text {
    position:absolute;
    padding:10%;
    width: 150px;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}

span {
    word-wrap: break-word;
}


</style>