<template>
    <div id="award-text-div" :style="awardTextDivStyle">
            <div style="height:100%;width:25vw;border:2vw solid white;position:absolute;left:0">
                <img :src="require(`@/assets/numbers/${quad1}.png`)" style="width:10.5vw;height:10.5vw" :alt="quad1"/>
                <img :src="require(`@/assets/numbers/${quad2}.png`)" style="width:10.5vw;height:10.5vw" :alt="quad2"/>
                <img :src="require(`@/assets/numbers/${quad3}.png`)" style="width:10.5vw;height:10.5vw" :alt="quad3"/>
                <img :src="require(`@/assets/numbers/${quad4}.png`)" style="width:10.5vw;height:10.5vw" :alt="quad4"/>
            </div>
            <div style="height:100%;width:75vw;padding:2vw;position:absolute;right:0">
                    <span style="width:100%;font-size:5vw;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)">{{name}}</span>
            </div>

    </div>
</template>


<script>

export default {
    name:"AwardText",
    props: {
        name: String,
        year:String,
        bgColor:String
    },
    data: function() {
        return {
            awardTextDivStyle: {
                backgroundColor: this.bgColor,
                position:'relative'
            }
        }
    },
    computed: {
        quad1() {
            return this.year.charAt(0)
        },
        quad2() {
            return this.year.charAt(1)
        },
        quad3() {
            return this.year.charAt(2)
        },
        quad4() {
            return this.year.charAt(3)
        }


    },
    created() {
        console.log(this.year)
        console.log(typeof this.year)
        console.log(this.bgColor)
    }
}
</script>
