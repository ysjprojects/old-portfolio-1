<template>
    <div id="main">
        <div>
            <span style="font-size:9vw">Awards</span>
            <div :style="[isPresent ? {'visibility': 'hidden'} : {'visibility':'visible'}]">
            <span style="font-size: 5vw; opacity: 0.3;" data-v-d893ae2a="">click for more details</span>
            </div>
        </div>

        <div :style="[isPresent ? {'visibility': 'visible'} : {'visibility':'hidden'}]">
            <AwardText :name="currAwardName" :year="currAwardYear" :bgColor="currAwardColor"/>
        </div>
        
        
        <div class="podium">
            <table id="ladder" cellspacing="0" cellpadding="0">
                <tr>
                    <td>
                        <span class="podium-text" style="font-size:12.5vw">2</span>
                        <div v-for="award in awards.silver" :key="award">
                            <Award @show-detail="showDetailSilver" :name="award.name" :year="award.year" :src="award.src" color="#85898d"/> 
                        </div>        
                        <div id="podium1">

                        </div>

                    </td>
                    <td>
                        <span class="podium-text" style="font-size:17.5vw">1</span>
                        <div v-for="award in awards.gold" :key="award">
                            <Award @show-detail="showDetailGold" :name="award.name" :year="award.year" :src="award.src" color="#f0ba3c"/> 
                        </div>    
                        <div id="podium0">
                        </div>
                    </td>
                    <td>
                        <span class="podium-text" style="font-size:10vw">3</span>
                        <div v-for="award in awards.bronze" :key="award">
                            <Award @show-detail="showDetailBronze" :name="award.name" :year="award.year" :src="award.src" color="#a15347"/> 
                        </div>    
                        <div id="podium2">
                        </div>
                    </td>
                    <td>
                        <span class="podium-text" style="font-size:5vw">MERIT</span>
                        <div v-for="award in awards.merit" :key="award">
                            <Award @show-detail="showDetailMerit" :name="award.name" :year="award.year" :src="award.src" color="#b19cd9"/> 
                        </div>    
                        <div id="podium3">
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import Award from "./Award.vue"
import AwardText from "./AwardText.vue"
export default {
    name:"Awards",
    components: {
        Award,
        AwardText
    },
    data: function() {
        return {
            awards : {
                "gold": [
                    {"name":"Splash Awards",
                    "year":"2016",
                    "src":"sa.jpg"},
                    {"name":"IMDA NIC Face-Off App Development",
                    "year":"2016",
                    "src":"nicad.png"}
                ],
                "silver":[
                    {"name":"IMDA NIC Face-Off Data Analytics",
                    "year":"2016",
                    "src":"nicda.png"}
                ],
                "bronze":[
                    {"name":"Code::XtremeApps::",
                    "year":"2016",
                    "src":"codextremeapps.png"
                    }
                ],
                "merit":[
                    {"name":"Asia Pacific ICT Alliance (APICTA) Awards",
                    "year":"2016",
                    "src":"apicta.jpg"},
                    {"name":"National Olympiad in Informatics",
                    "year":"2017",
                    "src":"noi.png"}
                ]
            },

            currAwardName: "",
            currAwardYear: "0000",
            currAwardColor: "transparent",
            timer:null
        }
    },
    methods: {
        showDetailSilver(name,year) {
            this.showDetail(name,year,"#f0ba3c")

        },
        showDetailGold(name,year) {
            this.showDetail(name,year,"#85898d")
        },
        showDetailBronze(name,year) {
            this.showDetail(name,year,"#a15347")
        },
        showDetailMerit(name,year) {
            this.showDetail(name,year,"#b19cd9")
        },

        showDetail(name,year,col) {
            this.currAwardName = name
            this.currAwardYear = year
            this.currAwardColor = col 
        }
        
    },
    computed: {
        isPresent() {
            return this.currAwardName==="" ? false : true
        }
    },
    created() {
        console.log(this.isPresent)
    }
    
}
</script>


<style scoped>
#main {
    width: 100vw;
    padding-top:5vh;
    background: #159957;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #155799, #159957); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

table {
    margin:0 auto;
}

td {
    vertical-align: bottom;
    position:relative;
    padding-top:2.5vh;
    
}

#award-text-div {
    height:25vw;
    margin-top:2.5vh;

}

#award-text-div div {
    display: inline-block;
}

#response {
    font-family: courier-new, courier;
}
#podium0, #podium1, #podium2, #podium3 {
    width: 25vw;
    position: relative;
}

#podium0 { /* gold */
    height: 20vh;
    background-color: #f0ba3c;

}
#podium1 { /* silver */
    height: 16vh;
    background-color: #85898d;

}
#podium2 { /* bronze */
    height: 12vh;
    background-color: #a15347;
}

#podium3 { /*merit*/
    height: 6vh;
    background-color:#b19cd9;
}

.podium-text {
    position:absolute;
    bottom: 2.5%;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%)



}

span{
    line-height: 1.25em;
    height: 1em;
}
</style>